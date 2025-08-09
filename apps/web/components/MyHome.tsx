'use client'
import React from 'react'
import ParticlesComponent from './utilities/particles.js'
import { Menubar } from './Menubar'
import { Hero } from './Hero'
import { Dock } from './Dock'
import { MyProjects } from './MyProjects'
import { useStageStore } from '@/store/useStageStore'
import { useContact } from '@/store/useContactStore'
import { Social } from './Social'


export const MyHome = () => {
  const {stage} = useStageStore()
  const {contact} = useContact()

  return (
    <div className='transtion-all duration-300 relative min-h-screen overflow-hidden'>
        {/* background as TsParticles */}
        <div className='fixed top-0 blur-[2px] left-0 w-full h-full z-[-1]'>
            <ParticlesComponent />
        </div>
        {/* Main window over hsjere */}
        <div>
          <Menubar />
          {stage ? <MyProjects />: contact ? <Social  /> : <Hero />}
          <Dock />
        </div>
    </div>
  )
}
