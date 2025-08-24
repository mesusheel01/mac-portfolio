import { BlogCard } from "./BlogCard";

type Blog = {
id: number;
title: string;
description: string;
imageUrl?: string;
};
const requestUrl ='http://localhost:3000';
export async function BlogsList() {
let blogs: Blog[] = [];

const res = await fetch(`${requestUrl}/api/blog`, {
  headers: {
    Authorization: `Bearer ${process.env.API_SECRET}`,
    },
    next:{revalidate: 60}
  });

  if (!res.ok) {
    return <p className="text-red-500">Failed to load blogs.</p>;
  }
  const data = await res.json();
  blogs = data.allBlogs || [];

  if (blogs.length === 0) {
    return <p>No blogs found!</p>;
  }

  return (
    <div className="mt-4">
      {blogs.map((b) => (
        <div
          key={b.id}
          className="flex flex-col m-2 text-lg text-neutral-400 items-center justify-center"
        >
          <BlogCard blog={b} />
        </div>
      ))}
    </div>
  );
}
