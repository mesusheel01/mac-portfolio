'use client';
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { on } from 'events';
import { useBlogStore } from '@/store/blogs';

type Blog = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
};

export const BlogCard = ({ blog, onClick }: { blog: Blog; onClick: () => void }) => {


  return (
    <div
      className="relative flex items-center justify-between bg-neutral-900 border-t border-b border-transparent hover:border-neutral-600 transition-colors duration-500 ease-in-out shadow-md p-3 w-full max-w-3xl cursor-pointer group"
    >
      {/* Text Content */}
      <div className="flex flex-col">
        <h2 className="text-md font-sono font-semibold text-neutral-300 mb-2">{blog.title}</h2>
        <p className="text-neutral-500 font-sono text-sm line-clamp-1">{blog.description}</p>
      </div>
      {/* Read More Button - Shows on hover (desktop) and active/touch (mobile) */}
      <div className="absolute inset-0 bg-[#100f0f] bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button
          onClick={onClick}
          className="bg-neutral-600 text-neutral-300 font-sono px-5 py-2 rounded-lg shadow-lg pointer-events-auto"
        >
          Read More
        </button>
      </div>
    </div>
  );
};
