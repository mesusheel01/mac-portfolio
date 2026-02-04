'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { CheckCircle, Copy } from 'geist-icons';

export const Aboutme = () => {
  const [startSpin, setStartSpin] = useState(true)
  const [isCopied, setIsCopied] = useState(false)
  const handleCopyClick = () => {
    console.log(process.env.NEXT_PUBLIC_USER_EMAIL)
    navigator.clipboard.writeText(process.env.NEXT_PUBLIC_USER_EMAIL as string || "test@example.com")
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000);
  }


  useEffect(() => {
    const timer = setTimeout(() => setStartSpin(false), 1000) // 1 sec
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='flex flex-col justify-around'>
      {/* under dev */}

      <div className='m-2 mt-5 flex flex-col gap-2'>
        <div className='text-[#cecdc3] flex justify-between font-share-mono text-lg'>
          <h1>Susheel</h1>
          <button onClick={handleCopyClick} className='mb-[2px] hover:text-neutral-500 transition-colors duration-300 text-[10px] font-sans flex items-center justify-center' >
            me.susheelrai@gmail.com &nbsp;
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isCopied ? 'check' : 'copy'}
                initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
                transition={{ duration: 0.15 }}
              >
                {isCopied ? (
                  <CheckCircle size={14} className='text-green-500' />
                ) : (
                  <Copy size={14} className='text-neutral-500 hover:text-neutral-300 transition-colors' />
                )}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
        <p className='text-neutral-500 text-sm md:text-md font-sono'>
          is a developer who is passionate about building things for real-world use. He focus on solving problems and building effective solutions. His recent creation is <Link href='https://daycraft-ai.vercel.app' className='font-semibold text-neutral-300 hover:text-neutral-500 active:text-purple-600 transition-colors duration-300'>DayCraft.ai</Link> its an AI day planner. Plan your day with just one prompt, hit the link and try yourself.</p>
      </div>
    </div>
  )
}
