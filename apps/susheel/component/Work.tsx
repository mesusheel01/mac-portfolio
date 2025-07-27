'use client'
import React from 'react'

export const Work = () => {
  return (
    <div>
        <div className='m-2 flex flex-col gap-2'>
            <h1 className='text-purple-400 text-xl font-share-mono'>Work till now...</h1>
            <ul className='text-neutral-400 font-sono list-disc pl-5'>
                <li><a target='_blank' href='https://gosipy.vercel.app'>https://susheel-projects.el</a></li>
                <li><a target='_blank' href='https://github.com/mesusheel01'>https://susheel-github.com</a></li>
            </ul>
            <picture>
                <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/mesusheel01/mesusheel01/output/github-snake-dark.svg" />
                <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/mesusheel01/mesusheel01/output/github-snake.svg" />
                <img alt="github-snake" src="https://raw.githubusercontent.com/tobiasmeyhoefer/tobiasmeyhoefer/output/github-snake.svg" />
            </picture>
        </div>
    </div>
  )
}
