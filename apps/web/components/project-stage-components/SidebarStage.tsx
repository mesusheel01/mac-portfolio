import React, { useEffect, useState } from 'react'
import { MiniCard } from './MiniCard'
import { project } from '../utilities/projectDetails'
import { ItsMaxCard } from './ItsMaxCard'
import { AnimatePresence, motion } from 'motion/react'

type Project = {
  id: number,
  name: string,
  src: string,
  alt: string,
  url: string
}
export const SidebarStage = () => {
  const [active, setActive] = useState<Project>(project[0]) 
  const [sidebarStack, setSidebarStack] = useState(project.slice(1))

  const handleProjectClick = (currProject: Project) => {
    setSidebarStack(prev => {
      const clickedIndex = prev.findIndex(project => project.id === currProject.id);
      if (clickedIndex === -1) return prev; // safety check
      const newStack = [...prev];
      newStack[clickedIndex] = active;
      return newStack;
    });
    setActive(currProject);
  }
useEffect(()=>{

},[active])

  return (
    <div className='flex flex-col lg:flex-row gap-8 lg:gap-20 items-center w-full'>
      {/* left section small stage manager */}
      <div className='flex flex-row lg:flex-col gap-3 lg:gap-5 order-2 lg:order-1'>
        {sidebarStack.map((p) => (
           <motion.div
           key={p.id}
           layout
           transition={{type:'spring', stiffness:500, damping:30}}
           >
             <MiniCard
              key={p.id}
              id={p.id}
              src={p.src}
              alt={p.alt}
              name={p.name}
              onClick={() => handleProjectClick(p)}
            />
          </motion.div>
        ))}
      </div>
        {/* right section -> project window */}
    <AnimatePresence mode='wait'>
      <motion.div 
    key={active.id}
    initial={{ x: 100, opacity: 0, scale: 0.95 }}
    animate={{ x: 0, opacity: 1, scale: 1 }}
    exit={{ x: -100, scale: 0.95 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
      className='order-1 lg:order-2 w-full lg:w-auto'>
        <ItsMaxCard project={active} />
      </motion.div>
    </AnimatePresence>
    </div>
  );
}
