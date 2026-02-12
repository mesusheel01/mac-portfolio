'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BlogCard } from './BlogCard';
import { useBlogStore } from '@/store/blogs';

export interface Blog {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
}

export default function BlogsShowMore({ blogs }: { blogs: Blog[] }) {
  const [showAll, setShowAll] = useState(false);
  const { blogItem, setBlog } = useBlogStore()
  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);
  const router = useRouter()

  const handleBlogClick = (blog: Blog) => {
    setBlog(blog)
    router.push(`/blog/${blog.id}`)
    console.log(blog)
  }

  return (
    <>
      {visibleBlogs.map((blog) => (
        <BlogCard onClick={() => handleBlogClick(blog)} key={blog.id} blog={blog as any} />
      ))}

      {blogs.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 px-6 py-2 font-sono  text-text-secondary hover:text-text-primary  transition-colors duration-300"
        >
          {showAll ? 'Show Less...' : 'Show More...'}
        </button>
      )}
    </>
  );
}
