import { BlogSection } from '@/component/BlogSection';
import { Footer } from '@/component/Footer';
import { Home } from '@/component/Home';
import React from 'react'

const page= () => {
  return (
    <div className='bg-neutral-950 flex items-center justify-center'>
      <div  className='bg-neutral-900 w-[800px] min-h-screen'>
      <Home />
      <BlogSection />
      <Footer />
      </div>
    </div>
  )
}

export default page;