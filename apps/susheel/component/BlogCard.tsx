'use client'
import React from 'react'
import {motion} from 'motion/react'

type Blog = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

export const BlogCard = ({blog}:{blog: Blog}) => {
  return (
    <div>
        <motion.div

        transition={{
          duration:0.3,
          
        }}
        whileHover={{
          opacity:0.7,
          scale:1.04,
        }}
        className='bg-transparent font-sono flex gap-2 justify-start overflow-hidden w-[700px] rounded-lg border border-purple-400 p-2 object-contain'>
          <span className='text-purple-300'>{"↦"}</span> 
          <span>{blog.title}</span>
        </motion.div>
    </div>
  )
}
