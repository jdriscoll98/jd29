/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/AlXFx6Lf0nc
 */
import { Post } from "@/types/post";
import { PostHeader } from "./post-header";
import { PostBody } from "./post-body";
export async function Article({ post }: { post: Post }) {
  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
        <PostHeader data={post.data} />
        <PostBody content={post.content} />
      </article>
    </div>
  );
}
