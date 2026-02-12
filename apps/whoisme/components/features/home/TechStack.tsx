'use client'
import React from 'react'
import tech from '@/lib/techStack'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Variants } from 'motion'


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } },
}

export const Techstack = () => {
  return (
    <div>
      <h1 className='text-[#100f0f] dark:text-[#cecdc3] text-lg font-share-mono'>Tech stack:</h1>
      <motion.div
        className="flex items-center mt-5 justify-center flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {tech.map((tech, id) => (
          <ContainerTechStack key={id} name={tech.name} icon={tech.icon} />
        ))}
      </motion.div>
    </div>
  )
}

const ContainerTechStack = ({ name, icon }: { name: string, icon: string }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      whileTap={{
        rotateX: 180,
        rotateY: 180,
      }}
      transition={{
        duration: .3,
      }}

      className="flex flex-col items-center w-24"
      variants={itemVariants}
    >
      <div className="rounded-xl flex items-center justify-center p-1 mb-2">
        <Image
          src={icon}
          alt={name}
          width={40}
          height={40}
          className="object-contain w-8 h-8"
        />
      </div>
      <span className="text-center text-[12px] font-sono mb-2 text-neutral-500">{name}</span>
    </motion.div>
  );
};
