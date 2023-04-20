import Link from "next/link";
import { GetStaticProps } from "next";
import type { GetStaticPropsContext } from "next";
import Meta from "@/components/Meta";
//
import { server } from "../../../../config";
//
import type articleType from "@/types/articleType";

// export const getStaticProps: GetStaticProps<{
//   article: articleType;
// }> = async (context: GetStaticPropsContext) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params?.id}`
//   );

//   if (!res.ok) return { notFound: true };

//   const article: articleType = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

// export async function getStaticPaths() {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=5`
//   );

//   const articles: articleType[] = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

export const getStaticProps: GetStaticProps<
  {
    article: articleType;
  }
> = async (context: GetStaticPropsContext) => {
  const res = await fetch(`${server}/api/articles/${context.params?.id}`);

  if (!res.ok) return { notFound: true };

  const article: articleType = await res.json();
  return {
    props: {
      article,
    },
  };
};

export async function getStaticPaths() {
  const res = await fetch(`${server}/api/articles`);

  const articles: articleType[] = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export default function EachArticleInfo({ article }: { article: articleType }) {
  return (
    <div>
      <Meta title={article.title} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <Link href="/" className="inline-block mt-2 p-2 rounded-md bg-red-600">
        Go Back
      </Link>
    </div>
  );
}
