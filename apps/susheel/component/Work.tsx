'use client'
import React from 'react'

export const Work = () => {
  return (
    <div>
        <div className='m-2 flex flex-col gap-2'>
            <h1 className='text-purple-400 text-xl font-share-mono'>Work till now...</h1>
            <ul className='text-neutral-400 font-sono list-disc pl-5'>
                <li>Click on the project icon in the dock at <a
                className='text-purple-400 hover:text-purple-600 transition-colors duration-300' href='https://susheelr.vercel.app'>sushe.el</a></li>
                <li>Janiye mere baare me <a className='text-purple-400 hover:text-purple-600 transition-colors duration-300' target='_blank' href='https://github.com/mesusheel01'>Github.com </a> pr!</li>
            </ul>
            <picture>
                <source media="(prefers-color-scheme: dark)" srcSet="https://raw.githubusercontent.com/mesusheel01/mesusheel01/output/github-snake-dark.svg" />
                <source media="(prefers-color-scheme: light)" srcSet="https://raw.githubusercontent.com/mesusheel01/mesusheel01/output/github-snake.svg" />
                <img alt="github-snake" src="https://raw.githubusercontent.com/tobiasmeyhoefer/tobiasmeyhoefer/output/github-snake.svg" />
            </picture>
        </div>
    </div>
  )
}
