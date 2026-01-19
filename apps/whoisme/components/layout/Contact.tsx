'use client'
import Link from "next/link";

export const ContactSection = () => {
    return (
        <div className='flex mt-10 justify-center gap-2 font-sono'>
            <Link href={"https://github.com/mesusheel01"} target='_blank' className='text-neutral-400 hover:text-neutral-600 transtion-all duration-300'>Github</Link>
            <Link href={"https://x.com/SusheelRai58945"} target='_blank' className='text-neutral-400 hover:text-neutral-600 transtion-all duration-300'>Twitter</Link>
            <Link href={"https://www.linkedin.com/in/susheel-rai-3b7a51227/"} target='_blank' className='text-neutral-400 hover:text-neutral-600 transtion-all duration-300'>LinkedIn</Link>
            <Link href={"https://www.youtube.com/@TechWechDev"} target='_blank' className='text-neutral-400 hover:text-neutral-600 transtion-all duration-300'>Youtube</Link>
        </div>
    )
}