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
        <div>
          <h1 className='text-purple-400 font-share-mono text-xl'>
            sushe.el
          </h1>
          {/* contact section */}
          <div className='flex'>

          </div>
        </div>
        <p className='text-neutral-400 font-sono'>
          is a developer who is passionate about building things for real-world use. He focus on solving problems and building effective solutions. Currently, he is developing <Link href='https://daycraft-ai.vercel.app' className='font-semibold text-purple-400 hover:text-purple-600 active:text-purple-700 transition-colors'>DayCraft.ai</Link> its an AI day planner.<br />Also touching some <span className='text-purple-900 '>Machine learning</span> looking forward to contributing to the AI-driven future..  </p>
      </div>
    </div>
  )
}
