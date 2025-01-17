'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';


const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Social Media App MERN",
    desc: "A full-stack social media app built using the MERN stack, featuring comprehensive functionality such as following, liking, messaging, posting, and other features.",
    img1: "/social_media_1.JPG",
    img2: "/social_media.JPG",
    live: "https://sociosync.netlify.app/",
    git: "https://github.com/BhanuPratap0/social-media-app",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Chat-App MERN",
    desc: "Full-Stack Chat-App Built Using MERN Stack And Realtime Chat With The Help Of Socket.IO",
    img1: "/chat_app2.JPG",
    img2: "/chat_app.JPG",
    live: "https://talk-a-tive-ihk6.onrender.com/",
    git: "https://github.com/BhanuPratap0/Chat-app-final-new",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Promptopia-Next.js CRUD",
    desc: "Full-Stack Notes-App Built Using MERN Stack. Easy To Use And Useful For Day-To-Day Note Making",
    img1: "/promtopia.JPG",
    img2: "/promtopia2.JPG",
    live: "https://promptopia-share-ai.netlify.app/",
    git: "https://github.com/BhanuPratap0/Promptopia--Share-AI-Prompt",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Notes-App MERN",
    desc: "Full-Stack Notes-App Built Using MERN Stack. Easy To Use And Useful For Day-To-Day Note Making",
    img1: "/inotebook.JPG",
    img2: "/inotebook2.JPG",
    live: "https://bhanu-inotebook.netlify.app/",
    git: "https://github.com/BhanuPratap0/inotebook",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='h-[600vh] mb-40' ref={ref} >
        <div className='w-[98vw] h-[calc(100vh-6rem)] flex items-center justify-center text-7xl text-center'>
          My Works
        </div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex'>
            <div className='h-screen w-[98vw] flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' />
            {items.map((item) => (
              <div className={`h-screen w-[100vw] lg:w-[75vw]  flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                <div className='flex flex-col gap-8 text-white'>
                  <h1 className='text-xl font-bold md:text-4xl lg:text-4xl xl:text-6xl'>{item.title}</h1>
                  <div className='flex gap-2'>
                    <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[400px] xl:h-[250px]'>
                      <Image src={item.img1} alt='' fill />
                    </div>
                    <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[400px] xl:h-[250px]'>
                      <Image src={item.img2} alt='' fill className='hidden lg:block' />
                    </div>
                  </div>
                  <p className='w-[300px] md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]'>{item.desc}</p>
                  <Link href={item.live} className='flex  lg:justify-end'>
                    <button className='p-2 text-sm md:p-4 md:text-md lg:p-5 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded'>See Demo</button>
                    <Link href={item.git} className='flex justify-end'>
                      <button className='p-2 text-sm md:p-4 md:text-md lg:p-5 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded'>See Code</button>
                    </Link>
                  </Link>

                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className='w-[98vw] h-screen mt-50 flex flex-col gap-16 items-center justify-center text-center'>
        <h1 className='text-6xl'>Do you have a project?</h1>
        <div className='relative'>
          <motion.svg
            animate={{ rotate: 360 }} transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className='w-64 h-64 md:w-[500px] md:h-[500px] '
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill='#000'>
              <textPath xlinkHref='#circlePath' className='text-xl'>Front-end Developer and UI Designer</textPath>
            </text>
          </motion.svg>
          <Link href={"/contact"} className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center'>Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioPage
