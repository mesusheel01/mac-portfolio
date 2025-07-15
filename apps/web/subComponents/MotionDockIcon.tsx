import {motion} from 'motion/react'

export const MotionIcon = (props: {
    icon: React.ReactElement,
    onClick: ()=>void,
    iconVariants: import('motion/react').Variants
  })=>{
    const {icon, iconVariants, onClick} = props
    return(
      <motion.div 
      onClick={onClick}
      variants={iconVariants}
      className='text-neutral-300 py-2 px-4 rounded-xl border text-2xl border-transparent hover:border-purple-900 transition-colors duration-300 cursor-pointer'
      >
     {icon} 
    </motion.div>
    )
  }