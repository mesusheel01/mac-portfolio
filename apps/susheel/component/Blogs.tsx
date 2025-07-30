'use client'
import React, { useEffect, useState } from 'react';
import { BlogCard } from './BlogCard';
import axios from 'axios';

type Blog = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

export const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:5001/blog?token=susheel');
      const res = response.data;
      console.log(res)
      if (res && res.allBlogs.length) {
        setBlogs(res.allBlogs);
      } else {
        setErrorMsg('No blogs found!');
      }
    } catch (error) {
      setErrorMsg('Server Error!');
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1 className='text-purple-400 font-share-mono text-xl'>Blogs...</h1>
      <div className='mt-4'>
        {errorMsg ? (
        <p>{errorMsg}</p>
      ) : (
        blogs.map((blog) =>
        <div className='flex flex-col m-2 text-lg text-neutral-400 items-center justify-center'> 
          <BlogCard key={blog.id} blog={blog} />
        </div>)
      )}
      </div>
    </div>
  );
};
