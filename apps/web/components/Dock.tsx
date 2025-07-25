'use client'

import { motion } from 'motion/react';
import { TiHomeOutline } from 'react-icons/ti';
import { MdPersonPin } from 'react-icons/md';
import { GiFilmProjector } from 'react-icons/gi';
import { AiOutlineContacts } from 'react-icons/ai';
import { MotionIcon } from '@/subComponents/MotionDockIcon';
import { useRouter } from 'next/navigation';
import { useDockStore } from '@/store/useDockStore';
import { useStageStore } from '@/store/useStageStore';


export const Dock = () => {
  const {setActiveSelection} = useDockStore()
  const {stage, toggleStage} = useStageStore()
  const router = useRouter();
  const handleHomeClick = () => {
    console.log()
    router.refresh(); // or router.push('/') if you want to go to the home page
  };

  const handleAboutClick = () => {
    setActiveSelection('about')
    
  };
  const handleProjectsClick = () => setActiveSelection('projects');
  const handleContactClick = () => setActiveSelection('contact');

  const containerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
        staggerChildren: 0.1,
        delayChildren: 0.4
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: .9, ease: "easeInOut" as const }
    }
  };


  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'linear' }}
      className="
        fixed bottom-4 left-0 w-full flex justify-center text-center
        sm:w-full sm:flex-row
        md:w-auto md:left-1/2 md:-translate-x-1/2
        z-50
      "
    >
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
                  className="
            h-16 min-w-fit rounded-2xl
            bg-neutral-900/60 backdrop-blur-md border border-white/20 shadow-lg
            flex items-center justify-center
            w-auto px-4 py-2
            gap-6
            transition-all delay-75 duration-300
          "
      >
       <MotionIcon onClick={()=>{
        if(stage) toggleStage()
        handleHomeClick
      }} icon={<TiHomeOutline />} iconVariants={iconVariants} />
       <MotionIcon onClick={handleAboutClick} icon={<MdPersonPin />} iconVariants={iconVariants} />
       <MotionIcon onClick={()=>{
        handleProjectsClick()
        toggleStage()
        }} icon={<GiFilmProjector />} iconVariants={iconVariants} />
       <MotionIcon onClick={handleContactClick} icon={<AiOutlineContacts />} iconVariants={iconVariants} />
      
      </motion.div>
    </motion.div>
  );
};


