'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'

export const Aboutme = () => {
  const [startSpin, setStartSpin] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setStartSpin(false), 1000) // 1 sec
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='flex flex-col justify-around'>
      {/* under dev */}

      <div className='m-2 mt-5 flex flex-col gap-2'>
        <h1 className='text-[#cecdc3] font-share-mono text-xl'>
          sushe.el
        </h1>
        <p className='text-neutral-500 font-sono'>
          is a developer who is passionate about building things for real-world use. He focus on solving problems and building effective solutions. His recent creation is <Link href='https://daycraft-ai.vercel.app' className='font-semibold text-neutral-300 hover:text-neutral-500 active:text-purple-600 transition-colors duration-300'>DayCraft.ai</Link> its an AI day planner. Plan your day with just one prompt, hit the link and try yourself.</p>
      </div>
    </div>
  )
}
