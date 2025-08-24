import React from 'react'
import { AddBlog } from './BlogComponents/AddBlog'
import Blogs from './BlogComponents/Blogs'

export const BlogSection = () => {
  return (
    <div>
        <AddBlog />
        <Blogs />
    </div>
  )
}
