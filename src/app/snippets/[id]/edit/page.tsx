import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/app/components/Snippet-editFrom";
interface EditSnippetPageProps {
  params: {
    id: string;
  };
}

export default async function EditSnippetPage(props: EditSnippetPageProps) {
  const id = props.params.id;
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      {/* title and data */}
      <SnippetEditForm snippet={snippet} />
      {/* edit and delete button */}
    </div>
  );
}
