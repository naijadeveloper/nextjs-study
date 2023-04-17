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
    <section
      className="w-[95%] md:w-[90%] mx-auto grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]
      auto-rows-[220px] gap-8 justify-center"
    >
      {articles.map((article) => (
        <EachArticle key={article.id} article={article} />
      ))}

      {/*
      [grid]
      grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]
      auto-rows-[minmax(200px,_300px)] gap-2 justify-center

      [flex]
      flex flex-wrap content-start justify-start
      */}
    </section>
  );
}
