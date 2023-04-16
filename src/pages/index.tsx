import type articleType from "../types/articleType";
import EachArticle from "@/components/EachArticle";

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
}

type homeProps = {
  articles: articleType[];
};

export default function Home({ articles }: homeProps) {
  return (
    <section className="flex flex-wrap content-start justify-center gap-2">
      {articles.map((article) => (
        <EachArticle article={article} />
      ))}

      {/*(grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]
      auto-rows-[minmax(200px,_300px)] gap-2 justify-center*/}
    </section>
  );
}
