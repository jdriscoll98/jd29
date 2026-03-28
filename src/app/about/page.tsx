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
    <div className="min-h-screen bg-green-700 text-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-green-800/80 backdrop-blur-sm border-b border-white/10 px-6 py-4 flex items-center gap-4">
        <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">
          ← Back
        </Link>
        <h1 className="text-lg font-semibold">About Me</h1>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">The Journey</h2>
          <p className="text-white/70 text-lg">
            Placeholder intro — a short personal note about who I am, what drives me, and where I&apos;m headed.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/20" />

          <div className="space-y-12">
            {stops.map((stop, i) => (
              <div key={i} className="relative pl-12">
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold
                    ${stop.current
                      ? "bg-white text-green-700 border-white"
                      : "bg-green-700 border-white/40 text-white/60"
                    }`}
                >
                  {i + 1}
                </div>

                {/* Card */}
                <div className={`rounded-xl p-6 border ${stop.current ? "border-white/40 bg-white/10" : "border-white/10 bg-white/5"}`}>
                  <p className="text-white/50 text-sm mb-1">{stop.period}</p>
                  <h3 className="text-xl font-semibold">{stop.role}</h3>
                  <p className="text-white/70 font-medium mb-3">{stop.place}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{stop.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {stop.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {stop.current && (
                    <p className="mt-3 text-xs text-green-300 font-medium">● Currently here</p>
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
