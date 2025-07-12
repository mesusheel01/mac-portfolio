'use client'
import React from 'react'
import ParticlesComponent from './utilities/particles.js'
import { Menubar } from './Menubar.tsx'
import { Hero } from './Hero.tsx'
import { Dock } from './Dock.tsx'
import {motion} from 'motion/react'


export const MyHome = () => {
  return (
    <div className='relative min-h-screen overflow-hidden'>
        {/* background as TsParticles */}
        <div className='fixed top-0 blur-[2px] left-0 w-full h-full z-[-1]'>
            <ParticlesComponent />
        </div>
        {/* Main window over here */}
        <div>
          <Menubar />
          <Hero />
          <Dock />
        </div>
    </div>
  )
}
