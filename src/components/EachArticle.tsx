import articleType from "@/types/articleType";

export default function EachArticle({
  article: { body, id, title, userId },
}: {
  article: articleType;
}) {
  return (
    <div className="w-[300px] min-h-[200px] max-h-[350px] border border-red-600 bg-gray-900 p-2">
      <h1 className="text-center uppercase text-lg">{title}</h1>
    </div>
  );
}
