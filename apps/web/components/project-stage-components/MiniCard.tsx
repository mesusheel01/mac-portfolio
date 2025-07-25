import React from 'react'
import { motion } from 'motion/react' 
import Image from 'next/image'

export const MiniCard = ({ src, alt, name, id }: { src: string; alt: string, name:string, id: number }) => {


  const handleClick =(k:number)=>{
    console.log(k)
  }
  return (
    <div className="[perspective::1000px] [transform-style:preserve-3d] flex flex-col ">
      <motion.div
        suppressHydrationWarning
        initial={{
          rotateX: 20,
          rotateY: 15,
          translateZ: 100,
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
        className="w-[150px] h-[100px] border border-neutral-700 overflow-hidden rounded-lg "
      >
        <div key={id} onClick={()=>handleClick(id)} className="w-full relative h-full rounded-lg overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      </motion.div>
        <motion.div
         initial={{
          rotateX: 20,
          rotateY: 15,
          translateZ: 100,
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
        className="bg-neutral-800
         px-2 max-w-fit rounded-xl">
          <span className="text-neutral-300 text-[12px]">{name}</span>
        </motion.div>
    </div>
  )
}
