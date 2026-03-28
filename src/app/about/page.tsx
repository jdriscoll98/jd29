import Link from "next/link";

const stops = [
  {
    period: "2017 – 2021",
    role: "Computer Science Student",
    place: "University of Florida",
    description:
      "Earned a BS in Computer Science with a Minor in Entrepreneurship. Coursework ranged from application security and compiler design to a semester-long project with a B-Corp company — and it was here I realized I wanted to build real things, not just study them.",
    tags: ["Python", "Django", "Git", "Entrepreneurship"],
  },
  {
    period: "Jan 2019 – Sep 2020",
    role: "Full Stack Web Developer",
    place: "UF CISE Department",
    description:
      "While still a student, I built and maintained multiple student-facing apps for the CS department. Introduced automated scripts that cut processing times by 30%, and got hands-on with the full deployment stack — Git, Digital Ocean CI/CD, and NGINX. My first real production software.",
    tags: ["Django", "jQuery", "NGINX", "Digital Ocean"],
  },
  {
    period: "Sep 2020 – Feb 2023",
    role: "Senior Software Engineer",
    place: "UKG",
    description:
      "Started as an intern and grew into a Senior Engineer on the Design System team. Led the development of a component library now used by 2,000+ engineers across UKG. Championed test-driven development and CI/CD improvements that reduced bug rates by 40% and sped up release cycles by 25%. Also mentored interns and led technical demos for leadership.",
    tags: ["Angular", "TypeScript", "CI/CD", "Design Systems"],
  },
  {
    period: "Feb 2023 – Mar 2026",
    role: "Founding Engineer",
    place: "MX Locker",
    description:
      "First engineer at a pre-seed motocross marketplace startup. Built the entire platform from scratch — a Next.js app with Firebase backend, a recommendation engine that boosted user engagement by 50%, and an integration suite that generated the company's first SaaS revenue. Led a team of contractors, cut hosting costs by 50%, and reduced search costs by 66%.",
    tags: ["Next.js", "Firebase", "AWS", "Full Stack"],
  },
  {
    period: "Mar 2026 – Present",
    role: "Software Engineer",
    place: "PGA Tour",
    description:
      "Working on Shotlink2, the PGA Tour's next-generation real-time shot-tracking platform. Building event-driven systems in C# on AWS that process and deliver live scoring and shot data during tournaments — powering the experiences fans, broadcasters, and tour officials rely on every week.",
    tags: ["C#", "AWS", "Event-Driven", "Real-Time"],
    current: true,
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-mono">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-zinc-950/80 backdrop-blur-sm border-b border-green-700/30 px-6 py-4 flex items-center gap-4">
        <Link href="/" className="text-green-500 hover:text-green-400 transition-colors text-sm">
          ← back
        </Link>
        <span className="text-zinc-600">/</span>
        <h1 className="text-sm text-zinc-400">about.me</h1>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="mb-16">
          <p className="text-green-500 text-sm mb-2 tracking-widest uppercase">&#47;&#47; about</p>
          <h2 className="text-4xl font-bold mb-4 text-white">The Journey</h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            I&apos;m Jack — a software engineer who&apos;s worked across the full spectrum, from large enterprise teams to being the first engineer at a pre-seed startup. I thrive in environments that demand creative thinking and a bias toward action. Right now I&apos;m building real-time systems at the PGA Tour, bringing the same mindset I&apos;ve carried from day one: ship good software, keep learning, and make things that matter.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-green-700/30" />

          <div className="space-y-10">
            {stops.map((stop, i) => (
              <div key={i} className="relative pl-12">
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1 w-8 h-8 rounded-sm border flex items-center justify-center text-xs font-bold
                    ${stop.current
                      ? "bg-green-500 text-zinc-950 border-green-500"
                      : "bg-zinc-950 border-green-700/50 text-green-600"
                    }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Card */}
                <div className={`rounded-sm p-6 border transition-colors
                  ${stop.current
                    ? "border-green-500/60 bg-green-950/20"
                    : "border-green-700/20 bg-zinc-900/50 hover:border-green-700/40"
                  }`}>
                  <p className="text-green-600 text-xs mb-1 tracking-wider">{stop.period}</p>
                  <h3 className="text-lg font-bold text-white">{stop.role}</h3>
                  <p className="text-zinc-400 text-sm font-medium mb-3">{stop.place}</p>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">{stop.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {stop.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 border border-green-700/40 text-green-500 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {stop.current && (
                    <p className="mt-4 text-xs text-green-500 tracking-widest">▶ CURRENT</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
