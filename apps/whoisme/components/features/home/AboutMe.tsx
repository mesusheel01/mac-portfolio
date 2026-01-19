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
        <div className='flex justify-between'>
          <h1 className='text-purple-400 font-share-mono text-xl'>
            sushe.el
          </h1> {/* contact section */}
          <div className='flex gap-2 font-sono'>
            <Link href={"https://github.com/mesusheel01"} target='_blank' className='text-neutral-700 hover:text-neutral-500 transtion-all duration-300'>Github</Link>
            <Link href={"https://x.com/SusheelRai58945"} target='_blank' className='text-neutral-700 hover:text-neutral-500 transtion-all duration-300'>Twitter</Link>
            <Link href={"https://x.com/SusheelRai58945"} target='_blank' className='text-neutral-700 hover:text-neutral-500 transtion-all duration-300'>LinkedIn</Link>
            <Link href={"https://www.youtube.com/@TechWechDev"} target='_blank' className='text-neutral-700 hover:text-neutral-500 transtion-all duration-300'>Youtube</Link>

          </div>
        </div>
        <p className='text-neutral-400 font-sono'>
          is a developer who is passionate about building things for real-world use. He focus on solving problems and building effective solutions. His recent tool is <Link href='https://daycraft-ai.vercel.app' className='font-semibold text-purple-500 hover:text-purple-800 active:text-purple-600 transition-colors'>DayCraft.ai</Link> its an AI day planner. Plan your day with just one prompt, hit the link and try yourself.</p>
      </div>
    </div>
  )
}
