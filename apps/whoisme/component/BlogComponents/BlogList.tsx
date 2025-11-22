import { prismaClient } from "@repo/db";
import BlogsShowMore from "./BlogShowMore";

type Blog = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string | null;
};

export async function BlogsList() {
  let blogs: Blog[] = [];

  try {
    const data = await prismaClient.blog.findMany();
    blogs = data || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return (
      <div className="w-full flex justify-center items-center mt-2">
        <p className="text-red-500">Error loading blogs.</p>
      </div>
    );
  }

  if (blogs.length === 0) {
    return <p className="text-gray-400">No blogs found!</p>;
  }

  return (
    <div className="mt-6 flex flex-col items-center gap-6">
      <BlogsShowMore blogs={blogs as any} />
    </div>
  );
}
