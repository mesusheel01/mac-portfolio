'use client';

import React, { useState } from 'react';
import { BlogCard } from './BlogCard';
import { useRouter } from 'next/navigation';


type Blog = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
};

export default function BlogsShowMore({ blogs }: { blogs: Blog[] }) {

  const [showAll, setShowAll] = useState(false);
  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);
  const router = useRouter()



  return (
    <>
      {visibleBlogs.map((blog) => (
        <BlogCard onClick={() => router.push(`/blog/${blog.id}`)} key={blog.id} blog={blog} />
      ))}

      {blogs.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </>
  );
}
