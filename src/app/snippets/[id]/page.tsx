import { db } from "@/db";
import { notFound } from "next/navigation";
import * as actions from "@/app/actions";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}
export default async function SnippetShowPage(props: any) {
  //   await new Promise((resolve) => setTimeout(resolve, 9000));

  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });
  if (!snippet) {
    return notFound();
  }
  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          {snippet?.title}
        </h1>
        <pre className="bg-gray-50 p-6 rounded-lg mt-4 overflow-auto text-base text-gray-800 leading-relaxed">
          {snippet?.code}
        </pre>
        {/* edit and delete button */}
      </div>
      <div className="mt-4">
        <a
          href={`/snippets/${snippet.id}/edit`}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
        >
          Edit
        </a>

        <form action={deleteSnippetAction} className=" inline-block">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg inline-block">
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
