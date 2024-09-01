import Link from "next/link";
import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderSnippet = snippets.map((snippet) => (
    <div
      key={snippet.id}
      className="bg-white p-5 m-4 rounded-lg shadow-lg mb-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200 p "
    >
      <Link href={`/snippets/${snippet.id}`}>
        <div className="flex justify-between items-center ">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-300">
            {snippet.title}
          </h2>
          <span className="text-blue-500 text-sm font-medium hover:underline">
            View
          </span>
        </div>
      </Link>
    </div>
  ));

  return (
    <div>
      <h1 className=" font-semibold text-3xl my-11 text-center flex content-center justify-center  ">
        Snippets
      </h1>
      <div>{renderSnippet}</div>
    </div>
  );
}
