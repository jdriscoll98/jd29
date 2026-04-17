import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_NAME = 100;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 5000;
const MIN_FILL_MS = 2000;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const hits = new Map<string, number[]>();

function rateLimit(ip: string) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const prev = (hits.get(ip) ?? []).filter((t) => t > windowStart);
  if (prev.length >= RATE_LIMIT_MAX) {
    hits.set(ip, prev);
    return false;
  }
  prev.push(now);
  hits.set(ip, prev);
  if (hits.size > 10000) {
    hits.forEach((times, key) => {
      if (times.every((t) => t <= windowStart)) hits.delete(key);
    });
  }
  return true;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function looksLikeSpam(message: string) {
  const urlCount = (message.match(/https?:\/\//gi) ?? []).length;
  if (urlCount > 3) return true;
  const bbCode = /\[url=|\[\/url\]/i.test(message);
  if (bbCode) return true;
  return false;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const { name, email, message, website, loadedAt } = (body ?? {}) as {
    name?: unknown;
    email?: unknown;
    message?: unknown;
    website?: unknown;
    loadedAt?: unknown;
  };

  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (typeof loadedAt === "number" && Date.now() - loadedAt < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  if (
    trimmedName.length > MAX_NAME ||
    trimmedEmail.length > MAX_EMAIL ||
    trimmedMessage.length > MAX_MESSAGE
  ) {
    return NextResponse.json({ error: "Input too long" }, { status: 400 });
  }
  if (!isValidEmail(trimmedEmail)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (looksLikeSpam(trimmedMessage)) {
    return NextResponse.json({ ok: true });
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
    console.error("Contact form missing RESEND_API_KEY or CONTACT_EMAIL");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: "contact@jd29.dev",
      to: process.env.CONTACT_EMAIL,
      subject: `New message from ${trimmedName}`,
      replyTo: trimmedEmail,
      text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\nIP: ${ip}\n\n${trimmedMessage}`,
    });
    if (error) {
      console.error("Resend error", error);
      return NextResponse.json({ error: "Send failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("Contact send threw", err);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
