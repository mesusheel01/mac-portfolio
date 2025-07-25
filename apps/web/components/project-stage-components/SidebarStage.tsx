import React, { useState } from 'react'
import { MiniCard } from './MiniCard'
import { project } from '../utilities/projectDetails'
import { ItsMaxCard } from './ItsMaxCard'
import { motion } from 'motion/react'

type Project = {
  id: number,
  name: string,
  src: string,
  alt: string,
  url: string
}
export const SidebarStage = () => {
  const [active, setACtive] = useState<Project>(project[0]) 
  const [sidebarStack, setSidebarStack] = useState(project.slice(1))

  const handleProjectClick = (project: Project)=>{
  
  }

  return (
    <div className='flex gap-20 items-center'>
      
    <div className='flex flex-col gap-5'>
      {project.map((p) => (
          <MiniCard
            key={p.id}
            id={p.id}
            src={p.src}
            alt={p.alt}
            name={p.name}
            onClick={() => handleProjectClick(p)}
          />
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -100, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
        {selected && (
          <ItsMaxCard project={selected} />
        )}
    </motion.div>
    </div>
  );
}
