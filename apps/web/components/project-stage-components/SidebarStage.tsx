import React from 'react'
import { MiniCard } from './MiniCard'

export const SidebarStage = () => {
  return (
    <div className='flex flex-col gap-5'>
        <MiniCard src="/projectIcons/bolt-list.png" alt='bolt-list'/>
        <MiniCard src="/projectIcons/cognito.png" alt='cognito' />
        <MiniCard src="/projectIcons/gosipy.png" alt='gosipy' />
        <MiniCard src="/projectIcons/learn-verse.png" alt='learnverse' />
    </div>
  )
}
