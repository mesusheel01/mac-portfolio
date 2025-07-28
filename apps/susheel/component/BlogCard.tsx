import React from 'react'
import { blog } from '../../../packages/db/generated/prisma'

export const BlogCard = ({blog}:{blog: blog}) => {
  return (
    <div>
        <div className='bg-transparent border border-neutral-400 p-2 w-fit object-contain'>
          {blog.title}
        </div>
    </div>
  )
}
