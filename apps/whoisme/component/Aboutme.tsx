'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import ElfCanvas from './ElfHuMain'

export const Aboutme = () => {
  const [startSpin, setStartSpin] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setStartSpin(false), 1000) // 1 sec
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='flex flex-col justify-around'>
      {/* under dev */}
      <motion.div
        initial={{ rotateY: 0, opacity: 0 }}
        animate={{ rotateY: 150, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeIn' }}
        layout
        className='w-full  h-[200px]  lg:h-[300px] relative'
      >
        <ElfCanvas />
      </motion.div>
      <div className='m-2 flex flex-col gap-2'>
        <h2 className='text-purple-400 font-share-mono text-xl'>
          sushe.el
        </h2>
        <p className='text-neutral-400 font-sono'>
          is a developer who is passionate about creating web apps and tools for real-world use. I focus on solving problems and building effective solutions. Currently, I’m exploring <span className='font-semibold text-purple-900'>Machine Learning </span> and putting my hands inside <br /> <span className='text-purple-900 hover:text-2xl transition-all duration-300'>Python🐍</span>, looking forward to contributing to the AI-driven future..  </p>
      </div>
    </div>
  )
}
