import { useStageStore } from '@/store/useStageStore'
import React from 'react'
import {motion} from 'motion/react'
import { SidebarStage } from './stage-components/SidebarStage'


export const ProjectStage = () => {
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
        ease:'linear'
      }}
    className='min-h-screen backdrop-blur flex flex-col justify-center'>
        <SidebarStage /> 
      </motion.div>}
      
  </div>
  )
}
