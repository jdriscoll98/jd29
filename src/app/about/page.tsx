import Link from "next/link";

const stops = [
  {
    period: "2017 – 2021",
    role: "Computer Science Student",
    place: "University of Florida",
    description:
      "Placeholder — studying CS with a minor in Entrepreneurship. First exposure to real codebases, open-source, and building things that mattered.",
    tags: ["Python", "Django", "Git"],
  },
  {
    period: "Jan 2019 – Sep 2020",
    role: "Full Stack Web Developer",
    place: "UF CISE Department",
    description:
      "Placeholder — built and maintained student-facing apps for the CS department while still in school. First taste of production software.",
    tags: ["Django", "jQuery", "NGINX", "Digital Ocean"],
  },
  {
    period: "Sep 2020 – Feb 2023",
    role: "Senior Software Engineer",
    place: "UKG",
    description:
      "Placeholder — joined as an intern and grew into a Senior Engineer on the Design System team. Built a component library used by 2,000+ engineers across the company.",
    tags: ["Angular", "TypeScript", "CI/CD", "Design Systems"],
  },
  {
    period: "Feb 2023 – Mar 2026",
    role: "Founding Engineer",
    place: "MX Locker",
    description:
      "Placeholder — first engineer at a pre-seed motocross marketplace startup. Built the platform from scratch, led contractors, and drove the company's first SaaS revenue.",
    tags: ["Next.js", "Firebase", "AWS", "Full Stack"],
  },
  {
    period: "Mar 2026 – Present",
    role: "Software Engineer",
    place: "PGA Tour",
    description:
      "Placeholder — working on Shotlink2, the Tour's next-gen real-time shot-tracking system. Focused on event-driven architecture that powers live data for fans, broadcasters, and officials.",
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
            Placeholder intro — a short personal note about who I am, what drives me, and where I&apos;m headed.
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
