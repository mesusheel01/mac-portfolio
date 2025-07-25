
import React from 'react'

type Project = {
  id: number,
  src: string,
  alt: string,
  name: string,
  url: string
}

export const ItsMaxCard = ({project}:{project:Project}) => {
  return (
    <div className='flex items-center justify-center bg-neutral-900 mb-10 rounded-lg shadow-lg' style={{ width: 1200, height: 800, overflow: 'hidden' }}>
      <iframe 
        src={project.url} 
        width="100%" 
        height="100%" 
        className='w-full h-full object-cover rounded-lg border-none'  
        style={{ minWidth: '100%', minHeight: '100%', border: 'none', objectFit: 'cover' }}
        allowFullScreen
      />
    </div>
  )
}
