import { BlogSection } from '@/components/features/blog/BlogSection';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/components/Home';
import React from 'react'
import { ContactSection } from '@/components/layout/Contact';

const page = () => {
  return (
    <div className='bg-black flex items-center justify-center'>
      <div className='bg-neutral-950 p-4 w-[800px] min-h-screen'>
        <Home />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}

export default page;