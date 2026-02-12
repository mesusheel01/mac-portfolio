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
      className="relative flex items-center justify-between bg-bg-primary/50 border-t border-b border-border-primary/30 hover:border-border-primary transition-colors duration-500 ease-in-out shadow-md p-3 w-full max-w-3xl cursor-pointer group"
    >
      {/* Text Content */}
      <div className="flex flex-col">
        <h2 className="text-md font-sono font-semibold text-text-primary mb-2">{blog.title}</h2>
        <p className="text-text-secondary font-sono text-sm line-clamp-1">{blog.description}</p>
      </div>
      {/* Read More Button - Shows on hover (desktop) and active/touch (mobile) */}
      <div className="absolute inset-0 bg-bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button
          onClick={onClick}
          className="bg-text-primary text-bg-primary font-sono px-5 py-2 rounded-lg shadow-lg pointer-events-auto hover:scale-105 transition-transform"
        >
          Read More
        </button>
      </div>
    </div>
  );
};
