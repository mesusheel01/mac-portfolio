import { useStageStore } from '@/store/useStageStore'
import React from 'react'
import { Card } from './stage-components/Card'
import {motion} from 'motion/react'


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
        x:10,
        opacity:1
      }}
      transition={{
        duration: 0.3,
        ease:'linear'
      }}
    className='min-h-screen flex flex-col justify-center'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </motion.div>}
      
  </div>
  )
}
