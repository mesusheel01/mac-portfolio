import React from 'react';
import { motion } from 'motion/react';

export const Dock = () => {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'linear' }}
      className="
        fixed bottom-4 left-0 w-full flex justify-center text-center
        sm:w-full sm:flex-row
        md:w-auto md:left-1/2 md:-translate-x-1/2
        z-50
      "
    >
      <div
        className="
          h-16 min-w-fit w-11/12 max-w-md rounded-2xl
          bg-neutral-900/60 backdrop-blur-md border border-white/20 shadow-lg
          flex items-center justify-center
          sm:w-96
          md:w-[32rem]
          px-2
        "
      >
        
      </div>
    </motion.div>
  );
};
