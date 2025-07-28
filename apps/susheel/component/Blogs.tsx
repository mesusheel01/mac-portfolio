import React from 'react';
import { BlogCard } from './BlogCard';

type Blog = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

export const Blogs = async () => {
  let blogs: Blog[] = [];
  let errorMsg = '';

  try {
    const response = await fetch('http://localhost:5001/blog?token=susheel', {
      cache: 'no-store', // to always fetch fresh data (optional)
    });

    if (!response.ok) {
      errorMsg = 'Failed to fetch blogs.';
    } else {
      const data = await response.json();
      if (data.length > 0) {
        blogs = data;
      } else {
        errorMsg = 'No blogs found.';
      }
    }
  } catch (error) {
    errorMsg = 'Server Error!';
  }

  return (
    <div>
      <h1>Blogs...</h1>
      {errorMsg ? (
        <p>{errorMsg}</p>
      ) : (
        blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      )}
    </div>
  );
};
