import Link from "next/link";

export const BlogLink = ({ title, excerpt, slug }: { title: string, excerpt: string, slug: string }) => {
  return (
    <div className="space-y-2">
      <Link
        className="font-semibold underline underline-offset-2"
        href={`/blog/${slug}`}
      >
        <h3 className="text-2xl font-bold">{title}</h3>
      </Link>
      <p className="text-gray-500 dark:text-gray-400">
       {excerpt}
      </p>
      <Link
        className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-gray-300"
        href={`/blog/${slug}`}
      >
        Read More
      </Link>
    </div>
  );
};
