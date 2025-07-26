import React from 'react'
import { Blogs } from './Blogs'
import { Social } from './Social'
import { Techstack } from './Techstack'
import { Aboutme } from './Aboutme'
import { Work } from './Work'

export const Home = () => {
  return (
    <div className='bg-neutral-900 w-[800px] min-h-screen'>
      <Aboutme />
      <Work />
      <Techstack />
      <Blogs />
      <Social />
    </div>
  )
}
