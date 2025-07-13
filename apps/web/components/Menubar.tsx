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
        <div className='flex justify-between'>
          {/* left section of the menubar */}
          <div className='flex mx-4'>
            <div className='text-neutral-200'>
              {"< "}<span className='text-neutral-300'>sushe</span>.<span className='text-purple-700'>el</span>{" />"}
            </div>
          </div>
          {/* right section of the menubar */}
          <div className='menu-right mt-1 mx-3'>
            <span className="menu-icon">
              <Image src="/apple-icons/battery.png" alt='battery' fill style={{objectFit: "contain"}} />
            </span>
            <span className="menu-icon">
              <Image src="/apple-icons/menu.png" alt='menu' fill style={{objectFit: "contain", }} />
            </span>
            <span className="menu-icon">
              <Image src="/apple-icons/search.png" alt='Search icon' fill style={{objectFit: "contain"}} />
            </span>
            <span className="menu-icon">
              <Image src="/apple-icons/wifi.png" alt='wifi icon' fill style={{objectFit: "contain"}} />
            </span>
            {/* date time section */}
            <div className='flex items-center mb-1'>
              <span className='text-white text-[15px] font-medium'>
                {formatTime(currentTime)}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
}
