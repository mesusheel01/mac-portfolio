'use client'
import Image from 'next/image'
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
      <motion.div
           layout
            className='w-full  h-[200px]  lg:h-[300px] relative'
           >
      <ElfCanvas />
      </motion.div>
      <div className='m-2 flex flex-col gap-2'>
        <h2 className='text-purple-400 font-share-mono text-2xl'>
          sush.eel
        </h2>
        <p className='text-neutral-400 font-sono'>
          is a developer, he builds cool interfaces and websites that could be
          useful in real world, till now he have created few projects that will
          be in the project section if you go through the link under it.
        </p>
      </div>
    </div>
  )
}
