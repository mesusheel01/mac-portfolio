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
      className="flex items-center justify-between bg-[#1e1e2e] rounded-xl border border-purple-500 shadow-md p-4 w-full max-w-3xl cursor-pointer group"
    >
      {/* Text Content */}
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold text-purple-300 mb-2">{blog.title}</h2>
        <p className="text-gray-400 text-sm line-clamp-3">{blog.description}</p>
      </div>
      {/* Hover Read More Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-xl"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={onClick}
          className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow-lg"
        >
          Read More
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
