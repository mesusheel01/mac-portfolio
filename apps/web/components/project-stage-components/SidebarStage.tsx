import React from 'react'
import { MiniCard } from './MiniCard'

export const SidebarStage = () => {
  return (
    <div className='flex flex-col gap-5'>
        <MiniCard id={1} name="Cognito" src="/projectIcons/cognito.png" alt='cognito' />
        <MiniCard id={2} name="Bolt-list" src="/projectIcons/bolt-list.png" alt='bolt-list'/>
        <MiniCard id={3} name="Gosipy" src="/projectIcons/gosipy.png" alt='gosipy' />
        <MiniCard id={4} name="Learnverse" src="/projectIcons/learn-verse.png" alt='learnverse' />
    </div>
  )
}
