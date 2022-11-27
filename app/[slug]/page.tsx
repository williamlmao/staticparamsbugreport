import { FC } from "react";

interface PageProps {
  params: {
    slug: string;
    id: string;
  };
}

const BlogPage: FC<PageProps> = ({ params }) => {
  const { slug, id } = params;

  return (
    <div>
      Slug: {slug} | id: {id}
    </div>
  );
};

export default BlogPage;

export async function generateStaticParams() {
  const pages = [
    { slug: "test", id: "1" },
    { slug: "test2", id: "2" },
    { slug: "test3", id: "3" },
  ];
  return pages.map((page) => ({
    slug: page.slug,
    id: page.id,
  }));
}
