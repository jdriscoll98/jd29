export interface Post {
  data: {
    title: string;
    author: {
        name: string;
        picture: string;
    };
    date: string;
    coverImage: string;
    excerpt: string;
    ogImage: { url: string };
  };
  content: string;
}
