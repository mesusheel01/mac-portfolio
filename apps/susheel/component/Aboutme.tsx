import Image from 'next/image'
import React from 'react'

export const Aboutme = () => {
  return (
    <div className='flex justify-around'>
     
      <div className='m-2 mt-10 flex flex-col gap-2 ]'>
        <h2 className="text-purple-400 font-share-mono text-2xl">
          sushe.el
        </h2>
        <p className='text-neutral-400 font-sono w-[600px]'>
        is a developer, he builds cool interfaces and websites that could be useful like till now he have created few projects that will be in the project section if you click below and he likes  to use  
        </p>
      </div>
      <div className='m-2 flex justify-center h-[200px] w-[200px] rounded-full overflow-hidden border-1 border-purple-900 '>
        <Image src='/sus.jpeg' alt='me' height={200} width={200} className='object-cover w-full h-full' />
      </div>
    </div>
  )
}
