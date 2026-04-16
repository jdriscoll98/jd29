import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, posts, formatDate } from "../posts";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — @jd29`,
    description: post.description,
  };
}

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-mono">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-zinc-950/80 backdrop-blur-sm border-b border-green-700/30 px-6 py-4 flex items-center gap-4">
        <Link href="/blog" className="text-green-500 hover:text-green-400 transition-colors text-sm">
          ← back
        </Link>
        <span className="text-zinc-600">/</span>
        <h1 className="text-sm text-zinc-400">blog/{post.slug}</h1>
      </div>

      <article className="max-w-2xl mx-auto px-6 py-16">
        {/* Meta */}
        <p className="text-green-600 text-xs mb-2 tracking-wider">
          {formatDate(post.date)}
        </p>

        {/* Title */}
        <h2 className="text-4xl font-bold mb-4 text-white">{post.title}</h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 border border-green-700/40 text-green-500 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-10 max-w-xs">
          <div className="flex-1 h-px bg-green-700/30" />
          <span className="text-green-700/60 text-xs">&#47;&#47;</span>
          <div className="flex-1 h-px bg-green-700/30" />
        </div>

        {/* Body */}
        <div className="space-y-5">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-zinc-400 text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-green-700/20">
          <Link
            href="/blog"
            className="text-sm text-green-500 hover:text-green-400 transition-colors tracking-wider"
          >
            ← all_posts
          </Link>
        </div>
      </article>
    </div>
  );
}
