'use client'
import React from 'react'
import { Blogs } from './Blogs'
import { Techstack } from './Techstack'
import { Aboutme } from './Aboutme'
import { Work } from './Work'
import {motion } from 'motion/react' 

export const Home = () => {
  return (
    <motion.div
    initial={{
      y: 20,
      opacity : 0,
    }}
    animate={{
      y: 0,
      opacity : 1,
    }}
    transition={{
      duration: 0.3,
      ease :"easeIn"
    }}
   >
      <Aboutme />
      <Work />
      <Techstack />
      <Blogs />
    </motion.div>
  )
}
