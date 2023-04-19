import Head from "next/head";

type metaTypes = {
  title: string;
  keywords: string;
  description: string;
};

export default function Meta({ title, keywords, description }: metaTypes) {
  return (
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

Meta.defaultProps = {
  title: "Next js studying",
  keywords: "nextjs, typescript, next-ts, nextts, next and typescript",
  description: "Understanding nextjs",
};
