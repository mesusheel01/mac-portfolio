'use client'
import { createBlog } from '@/app/actions/Addblog';
import React from 'react'

export const AddBlog = () => {
  const [isSusheel, setIsSusheel] = React.useState(false);
  const [form, setForm] = React.useState({
    title: "",
    content: "",
    imageUrl: ""
  });

  const CheckWhoIs = () => {
    const whois = localStorage.getItem("whois");
    if (whois && whois === "susheel") {
      setIsSusheel(!isSusheel);
      // console.log(process.env.API_SECRET); --> getting undefined as running on the client side
      console.log("whois found");
    } else {
      console.log("whois not found");
      alert("Only owner of this page can add blog!");
    }
  }

  const handleAddBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Form data:", form);
      // Call the server action to create the blog
      await createBlog(form.title, form.content, form.imageUrl);
      alert("Blog added successfully");
      setForm({ title: "", content: "", imageUrl: "" });
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("Error adding blog");
    }
  }

  return (
    <div className="flex flex-col items-center mt-6">
      <button
        onClick={CheckWhoIs}
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        Add Blog
      </button>

      {isSusheel && (
        <div className="mt-6 w-full max-w-lg bg-neutral-900 p-6 rounded-2xl shadow-xl border border-purple-700">
          <h2 className="text-xl font-bold text-purple-400 mb-4">Create New Blog</h2>
          <form onSubmit={handleAddBlog} className="flex flex-col space-y-4">
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              type="text"
              placeholder="Title"
              className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
            />

            <textarea
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              placeholder="Content"
              className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 text-white h-32 resize-none"
            />

            <input
              value={form.imageUrl}
              onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
              type="text"
              placeholder="Image URL(optional)"
              className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
            />

            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
