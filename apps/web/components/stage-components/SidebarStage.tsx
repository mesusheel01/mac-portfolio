import React from 'react'
import { ProjectCard } from './ProjectCard'

export const SidebarStage = () => {
  return (
    <div className='flex flex-col gap-5'>
        <ProjectCard src="https://bolt-list.vercel.app"/>
        <ProjectCard src="https://bolt-list.vercel.app"/>
        <ProjectCard src="https://bolt-list.vercel.app"/>
        <ProjectCard src="https://bolt-list.vercel.app"/>
    </div>
  )
}
