import React from 'react'
import {motion} from 'motion/react'


export const ProjectCard = () => {
  return (
    <div className='rounded-xl'>
      <motion.div
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
      className='[prespective::1000px] [transform-style:preserve-3d] w-[150px] h-[100px]'>
          <iframe src='https://https://cognito-client-lilac.vercel.app/' height="110" width="130" style={{border:"none", borderRadius: "10px"}}/>
      </motion.div>
      </div>
  )
}
