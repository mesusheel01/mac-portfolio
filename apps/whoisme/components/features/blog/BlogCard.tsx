'use client';
import React from 'react';
import { motion } from 'motion/react';
import { on } from 'events';

type Blog = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
};

export const BlogCard = ({ blog, onClick }: { blog: Blog; onClick: () => void }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative flex items-center justify-between bg-[#1e1e2e] rounded-xl border border-purple-500 shadow-md p-4 w-full max-w-3xl cursor-pointer group"
    >
      {/* Text Content */}
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold text-purple-300 mb-2">{blog.title}</h2>
        <p className="text-gray-400 text-sm line-clamp-3">{blog.description}</p>
      </div>
      {/* Read More Button - Shows on hover (desktop) and active/touch (mobile) */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button
          onClick={onClick}
          className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow-lg hover:scale-110 transition-transform pointer-events-auto"
        >
          Read More
        </button>
      </div>
    </motion.div>
  );
};
