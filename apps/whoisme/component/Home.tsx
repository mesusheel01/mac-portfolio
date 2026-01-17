'use client'
import React from 'react'
import { Techstack } from './Techstack'
import { Aboutme } from './layout/Aboutme'
import { Work } from './layout/Work'
import { motion } from 'motion/react'

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
      <Work />
      <Techstack />
    </motion.div>
  )
}
