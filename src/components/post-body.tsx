import markdownToHtml from "@/lib/utils";
import markdownStyles from "./styles/markdown.module.css";

export const PostBody = async ({ content }: { content: string }) => {
  const html = await markdownToHtml(content);
  return (
    <div
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
};
