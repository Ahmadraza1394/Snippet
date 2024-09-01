import React from "react";
import { db } from "@/db";
import { redirect } from "next/navigation";
export default function CreateNewSnippets() {
  async function creatteSnippet(formData: FormData) {
    //    server action
    "use server";
    // validation
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    // create new records in database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);
    // redirect the user to home page
    redirect("/");
  }
  return (
    <form
      action={creatteSnippet}
      className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md"
    >
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Create Snippets</h1>

      <label
        htmlFor="title"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Title
      </label>
      <input
        type="text"
        name="title"
        id="title"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter snippet title"
      />

      <label
        htmlFor="code"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Code
      </label>
      <textarea
        name="code"
        id="code"
        rows="6"
        class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your code snippet"
      ></textarea>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Create
      </button>
    </form>
  );
}
