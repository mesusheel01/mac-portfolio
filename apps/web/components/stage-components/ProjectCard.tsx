'use client'
import React from 'react'
import {motion} from 'motion/react'


export const ProjectCard = ({src}: {src: string}) => {
  return (
    <div className='rounded-xl'>
      <motion.div suppressHydrationWarning // this will disable the flicker that comes before rendering the loading of the project
      initial={{
        rotateX:20,
        rotateY:15,
        translateZ:10,
        y:0,
        scale:1,
        opacity:2
      }}
      whileHover={{
        scale:1.1
      }}
      style={{
      }}
      whileTap={{
        y:5
      }}

      transition={{
        duration:0.3,
        ease:"easeInOut"
      }}
      className='[prespective::1000px] [transform-style:preserve-3d] w-[150px] h-[100px] overflow-hidden'>
          <div style={{ width: 150, height: 100, overflow: "hidden", position: "relative" }}>
            <iframe
              src={src}
              style={{
                width: 750, 
                height: 500,
                transform: "scale(0.2)",
                transformOrigin: "top left",
                border: "none",
                borderRadius: 10,
                pointerEvents: "none" 
              }}
            />
          </div>
      </motion.div>
      </div>
  )
}
