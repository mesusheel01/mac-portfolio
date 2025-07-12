import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export const Menubar = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    const day = days[date.getDay()]
    const dateNum = date.getDate()
    const month = months[date.getMonth()]
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    const displayHours = hours % 12 || 12
    
    return `${day} ${dateNum} ${month} ${displayHours}:${minutes.toString().padStart(2, '0')} ${ampm}`
  }

  return (
    <div className='fixed h-6 w-full backdrop:blur-md bg-neutral-900/70'>
        <div className='flex justify-between' >
        {/* left section of the menubar */}
          <div>
            </div>  
          {/* right section of the menubar */}
          <div className='flex pr-5'> 
            <Image src="/apple-icons/search.png" alt='Search icon' width={40} height={40}/>
            <Image src="/apple-icons/search.png" alt='Search icon' width={40} height={40}/>
            <Image src="/apple-icons/search.png" alt='Search icon' width={40} height={40}/>
            <Image src="/apple-icons/search.png" alt='Search icon' width={40} height={40}/>
            <Image src="/apple-icons/search.png" alt='Search icon' width={40} height={40}/>
            {/* date time section */}
            <div className='flex items-center pl-4'>
              <span className='text-white text-xs font-medium'>
                {formatTime(currentTime)}
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}
