export interface Post {
  slug: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  content: string[];
}

export const posts: Post[] = [
  {
    slug: "hello-world",
    date: "2026-04-16",
    title: "Hello, World",
    description:
      "Kicking off this blog — a place to share notes on software engineering, real-time systems, and whatever else I'm building or learning.",
    tags: ["meta", "intro"],
    content: [
      "Welcome to the blog. I've been meaning to start writing for a while, and today I finally did.",
      "The plan is simple: short posts about things I'm building, problems I've run into, and ideas I'm turning over. No grand schedule, no content strategy — just notes worth writing down.",
      "Expect a mix of software engineering, real-time systems (currently my day job at the PGA Tour), side projects, and the occasional detour into chess or golf.",
      "Thanks for reading. More soon.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
