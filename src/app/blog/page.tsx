import Link from "next/link";

const posts = [
  {
    slug: "hello-world",
    date: "2026-04-16",
    title: "Hello, World",
    description:
      "Kicking off this blog — a place to share notes on software engineering, real-time systems, and whatever else I'm building or learning.",
    tags: ["meta", "intro"],
  },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-mono">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-zinc-950/80 backdrop-blur-sm border-b border-green-700/30 px-6 py-4 flex items-center gap-4">
        <Link href="/" className="text-green-500 hover:text-green-400 transition-colors text-sm">
          ← back
        </Link>
        <span className="text-zinc-600">/</span>
        <h1 className="text-sm text-zinc-400">blog</h1>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="mb-16">
          <p className="text-green-500 text-sm mb-2 tracking-widest uppercase">&#47;&#47; blog</p>
          <h2 className="text-4xl font-bold mb-4 text-white">Notes &amp; Posts</h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Writing about what I&apos;m building, reading, and thinking about — mostly software engineering, real-time systems, and lessons from shipping.
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.length === 0 ? (
            <p className="text-zinc-500 text-sm italic">No posts yet — check back soon.</p>
          ) : (
            posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-sm p-6 border border-green-700/20 bg-zinc-900/50 hover:border-green-700/40 transition-colors"
              >
                <p className="text-green-600 text-xs mb-1 tracking-wider">
                  {formatDate(post.date)}
                </p>
                <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 border border-green-700/40 text-green-500 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
