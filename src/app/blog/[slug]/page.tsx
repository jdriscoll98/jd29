import { Article } from "@/components/";
import { getPostBySlug } from "@/lib/api";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { data } = getPostBySlug(params.slug);
  return {
    title: data.title,
    description: data.excerpt,
    openGraph: {
      images: [
        {
          url: data.ogImage.url,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
  };
};

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  return <Article post={post} />;
}
