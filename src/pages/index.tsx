import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs study</title>
        <meta name="keywords" content="nexting, jsing, nextjs, nextjs13" />
        <meta name="description" content="This is to practice nextjs" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Welcome to next</h1>
      </main>
    </>
  );
}
