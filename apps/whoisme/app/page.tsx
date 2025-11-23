import { BlogSection } from '@/component/BlogSection';
import { Footer } from '@/component/Footer';
import { Home } from '@/component/Home';
import React from 'react'

const page = () => {
  return (
    <div className='bg-black flex items-center justify-center'>
      <div className='bg-neutral-950 w-[800px] min-h-screen'>
        <Home />
        <BlogSection />
        <Footer />
      </div>
    </div>
  )
}

export default page;