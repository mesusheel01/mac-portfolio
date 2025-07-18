'use client'
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "motion/react";

const workProfiles = [
  {
    title: 'Full Stack Developer',
    tagline: 'I build scalable web applications from scratch.'
  },
  {
    title: 'Tech Enthusiast',
    tagline: 'Always exploring the latest in technology.'
  },
  {
    title: 'Tool Creator',
    tagline: 'I love making tools that help others.'
  },
  {
    title: 'Passionate Coder',
    tagline: 'Coding is not just a job, it’s my passion.'
  },
  {
    title: 'Problem Solver',
    tagline: 'I enjoy tackling complex challenges.'
  }
];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % workProfiles.length);
    }, 2500); // Change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  const { title, tagline } = workProfiles[index];

  return (
    <section className="w-full flex flex-col gap-10 md:flex-row items-center justify-between py-10 px-4 md:px-16 min-h-[60vh]">
      {/* Left: About Me */}
      <motion.div 
        initial={{
          x:-20,
          opacity:0,
        }}
        animate={{
          x:0,
          opacity:1
        }}
        transition={{
          delay:.3,
          duration: 0.4,
          ease:'easeIn'
        }}
      className="flex-1 flex flex-col gap-5 m-20 items-start justify-center mb-8 md:mb-0 md:mr-8">
        <h1 className="text-4xl md:text-5xl font-bold mr-4 text-neutral-900 dark:text-neutral-100">
          Hi, I'm Susheel Rai and I am a{" "}
          <span className="text-purple-700 dark:text-purple-300">
            <AnimatePresence mode="wait">
              <motion.span
                key={title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {title}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
        <strong className="text-lg md:text-xl text-purple-700 dark:text-purple-300 font-semibold transition-all duration-500">{tagline}</strong>
        <p className="text-lg md:text-xl text-[--secondary] dark:text-neutral-300 max-w-xl">
          I create amazing tools, web apps, and digital experiences. Passionate about building products that make a difference. Let's build something great together!
        </p>
      </motion.div>
      {/* Right: Image Placeholder */}
      <motion.div
       initial={{
        x:20,
        opacity:0,
      }}
      animate={{
        x:0,
        opacity:1
      }}
      transition={{
        delay:.3,
        duration: 0.4,
        ease:'easeIn'
      }}
      className="flex-1 flex items-center translate-y-20 justify-center">
        {/* Replace src with your image later */}
        <img
          src="/image.png"
          alt="About me"
          className="h-[400px] w-auto object-fill rounded-2xl shadow-lg border-2 border-gray-300"
        />
      </motion.div>
    </section>
  );
};
