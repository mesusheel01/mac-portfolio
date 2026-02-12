import { BlogSection } from '@/components/features/blog/BlogSection';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/components/Home';
import React from 'react'
import { ContactSection } from '@/components/layout/Contact';

const page = () => {
  return (
    <div className='bg-bg-primary/95 dark:bg-bg-primary flex items-center justify-center'>
      <div className='p-4 w-[700px] min-h-screen'>
        <Home />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}

export default page;