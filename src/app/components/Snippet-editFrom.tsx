"use client";
import { notFound } from "next/navigation";
import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/app/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);
  const handleChange = (value: string = "") => {
    setCode(value);
  };
  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          {snippet?.title}
        </h1>
        <Editor
          height="50vh"
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue={snippet?.code}
          options={{ minimap: { enabled: false } }}
          onChange={handleChange}
          className="rounded-lg"
        />
      </div>
      <form action={editSnippetAction}>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Save
        </button>
      </form>
    </div>
  );
}
