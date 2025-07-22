import React from 'react'
import { motion } from 'motion/react' // use correct import
import Image from 'next/image'

export const MiniCard = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="rounded-xl">
      <motion.div
        suppressHydrationWarning
        initial={{
          rotateX: 20,
          rotateY: 15,
          translateZ: 10,
          y: 0,
          scale: 1,
        }}
        whileHover={{
          scale: 1.1,
          translateZ:100
        }}
        whileTap={{
          y: -8,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className="w-[150px] h-[100px] border border-neutral-700 overflow-hidden rounded-xl [perspective::1000px] [transform-style:preserve-3d]"
      >
        <div className="w-full h-full relative rounded-xl overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      </motion.div>
    </div>
  )
}
