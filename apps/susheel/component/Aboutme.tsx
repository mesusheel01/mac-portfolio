'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'

export const Aboutme = () => {
  const [startSpin, setStartSpin] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setStartSpin(false), 1000) // 1 sec
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='flex flex-col justify-around'>
      <div className='flex justify-center items-center'>
                  <motion.div
            className='m-2 flex justify-center items-center h-[200px] w-[200px] rounded-full overflow-hidden border-1 border-purple-900'
            animate={{ rotateY: startSpin ? 720 : 360 }}
            transition={
              startSpin
                ? { duration: 1, ease: 'easeIn' }
                : { duration: 20, repeat: Infinity, ease: 'linear' }
            }
          >
          <Image
            src='/sus.jpeg'
            alt='me'
            height={200}
            width={200}
            className='object-cover w-full h-full'
          />
        </motion.div>
      </div>

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
