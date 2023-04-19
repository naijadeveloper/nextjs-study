import Link from "next/link";
import articleType from "@/types/articleType";

export default function EachArticle({
  article: { body, id, title },
}: {
  article: articleType;
}) {
  return (
    <Link
      href="/article/[id]"
      as={`/article/${id}`}
      className="flex flex-col items-center justify-center border-2 border-transparent hover:border-red-600 bg-gray-900 p-2 rounded-md"
    >
      <h1 className="text-center uppercase text-lg underline underline-offset-4 decoration-purple-600 decoration-4">
        {title.substring(0, 10)}
      </h1>
      <p>{body}</p>
    </Link>
  );
}
