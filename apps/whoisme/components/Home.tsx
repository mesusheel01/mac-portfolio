'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Aboutme } from './features/home/AboutMe'
import { Work } from './features/home/Work'
import { Techstack } from './features/home/TechStack'
import Experience from './features/home/Experience'

export const Home = () => {
  return (
    <motion.div
      initial={{
        y: 20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeIn"
      }}
    >
      <Aboutme />
      <Experience />
      <Work />
      <Techstack />
    </motion.div>
  )
}
