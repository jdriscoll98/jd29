"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-mono">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-zinc-950/80 backdrop-blur-sm border-b border-green-700/30 px-6 py-4 flex items-center gap-4">
        <Link href="/" className="text-green-500 hover:text-green-400 transition-colors text-sm">
          ← back
        </Link>
        <span className="text-zinc-600">/</span>
        <h1 className="text-sm text-zinc-400">contact.me</h1>
      </div>

      <div className="max-w-xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-green-500 text-sm mb-2 tracking-widest uppercase">&#47;&#47; contact</p>
          <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Have a project in mind, a question, or just want to say hi? Send me a message and I&apos;ll get back to you.
          </p>
        </div>

        {status === "success" ? (
          <div className="border border-green-500/60 bg-green-950/20 rounded-sm p-6">
            <p className="text-green-500 text-xs tracking-widest uppercase mb-2">&#47;&#47; message_sent</p>
            <p className="text-zinc-300 text-sm">Thanks for reaching out — I&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs text-green-600 tracking-widest uppercase">name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="your name"
                className="w-full bg-zinc-900/50 border border-green-700/30 rounded-sm px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-green-500/60 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-green-600 tracking-widest uppercase">email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="you@example.com"
                className="w-full bg-zinc-900/50 border border-green-700/30 rounded-sm px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-green-500/60 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-green-600 tracking-widest uppercase">message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="what's on your mind?"
                rows={5}
                className="w-full bg-zinc-900/50 border border-green-700/30 rounded-sm px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-green-500/60 transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-red-500 text-xs tracking-wider">&#47;&#47; error sending message. please try again.</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="text-sm px-6 py-2 border border-green-700/40 text-green-500 rounded-sm hover:bg-green-500/10 hover:border-green-500 transition-colors tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "sending..." : "send_message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
