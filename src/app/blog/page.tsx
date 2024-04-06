import { BlogHome } from "@/components";
import { Metadata, NextPage } from "next";

interface Props {}

export const metadata: Metadata = {
  title: "NextGen Marketplaces",
  description: "Empowering the Next Generation of AI-Enabled Marketplaces",
  openGraph: {
    images: [
      {
        url: "/header.webp",
        width: 1200,
        height: 630,
        alt: "NextGen Marketplaces",
      },
    ],
  },
};

const Page: NextPage<Props> = ({}) => {
  return <BlogHome />;
};

export default Page;
