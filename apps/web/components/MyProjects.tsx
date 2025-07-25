import { useStageStore } from '@/store/useStageStore'
import React from 'react'
import {motion} from 'motion/react'
import { SidebarStage } from './project-stage-components/SidebarStage'


export const MyProjects = () => {
  const {stage} = useStageStore()
  return (
   <div>
    {stage && <motion.div
      initial={{
        x:-40,
        opacity:0,
      }}
      animate={{
        x:20,
        opacity:1
      }}
      transition={{
        duration: 0.3,
        type:'spring',
        stiffness: 100,
        damping:9 //some popping looks cool with this value.
      }}
    className='min-h-screen backdrop-blur flex flex-col justify-center'>
        <SidebarStage /> 
      </motion.div>}
      
  </div>
  )
}
