export const dynamic = 'force-dynamic'; // ✅ Prevents SSG issues

import BlogsShowMore from "./BlogShowMore";

type Blog = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
};

export async function BlogsList() {
  const base =
    process.env.NEXT_PUBLIC_API_URL ||
    (typeof window === 'undefined'
      ? process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : ''
      : '');

  let blogs: Blog[] = [];

  try {
    const res = await fetch(`${base}/api/blog`, {
      headers: {
        Authorization: `Bearer ${process.env.API_SECRET}`,
      },
      next: { revalidate: 60 }, // ISR for 1 min
    });

    const contentType = res.headers.get('content-type') || '';
    if (!res.ok || !contentType.includes('application/json')) {
      console.error('Invalid response from API:', await res.text());
      return (
        <div className="w-full flex justify-center items-center mt-2">
          <p className="text-red-500">Failed to load blogs.</p>
        </div>
      );
    }

    const data = await res.json();
    blogs = data.allBlogs || [];
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
      <BlogsShowMore blogs={blogs} />
    </div>
  );
}
