'use client'
import React from 'react'

export const Work = () => {
  return (
    <div>
      <div className='m-2 flex flex-col gap-2'>
        <h1 className='text-text-primary text-lg font-share-mono'>Work till now...</h1>
        <ul className='text-text-secondary font-sono list-disc pl-5 text-sm md:text-md'>
          <li>Click on the project icon in the dock at <a
            className='text-text-link font-semibold hover:text-text-secondary active:text-text-link transition-colors duration-300' href='https://susheelr.vercel.app'>sushe.el</a></li>
          <li>Checkout my work till now on <a className='text-text-link hover:text-text-secondary active:text-neutral-400 font-semibold transition-colors duration-300' target='_blank' href='https://github.com/mesusheel01'>Github.com </a> pr!</li>
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
