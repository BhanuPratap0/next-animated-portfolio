'use client'
import Brain from '@/components/brain'
import { motion, useInView, useScroll } from 'framer-motion'
import { useRef } from 'react'

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className='h-full overflow-y-scroll no-scrollbar lg:flex' ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-30 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-20 lg:w-2/3 lg:pr-0 xl:w-1/2' >
          {/* BIOGRAPHY */}
          <div className='flex flex-col gap-12 justify-center' >
            {/* BIOGRAPHY TITLE */}
            <h1 className='font-bold text-2xl' >BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className='text-lg'><b>I'm Bhanu</b><br />
              Full Stack Developer<br />

              I am a Full-Stack developer based in Ajmer, India. I am an Information Technology undergraduate from Engineering College Ajmer. I am very passionate about improving my coding skills & developing applications & websites.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className='italic'>
              Email: singh28986@gmail.com<br />
              Place: Ajmer, Rajasthan, India - 305001
            </span>
            {/* BIOGRAPHY SIGN SVG */}
            <div className='self-end' >
              <svg width="205" height="73" viewBox="0 0 205 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.49267 4.51448C8.02122 3.88235 6.85614 29.1259 6.76555 31.3905C6.60408 35.4274 6.92844 40.7563 6.00183 44.8103C5.84283 45.5059 2.49525 36.5776 2.43776 36.2274C0.524274 24.5726 5.7748 4.65063 20.9491 4.91453C28.0208 5.03752 26.2857 12.302 23.1312 15.7522C19.0245 20.2438 20.4245 17.7149 25.2042 20.1891C29.8864 22.6128 28.8439 26.7104 25.1314 29.7539C23.5744 31.0304 8.78247 36.2307 16.3303 31.3541C23.5119 26.7142 30.5857 23.0048 35.2054 15.3885C37.5807 11.4724 38.3302 8.35602 38.1148 4.00533C38.0746 3.19266 36.9947 1.18693 36.7692 1.96872C35.3656 6.83445 36.1931 13.6247 36.26 18.5525C36.303 21.7176 35.3157 25.4165 37.1329 28.0082C38.0043 29.2512 39.9144 26.769 41.2061 25.9716C46.5668 22.6626 49.9475 24.2327 54.9532 27.1354C60.22 30.1895 62.3828 28.3028 67.4638 26.1171C76.5505 22.2083 88.3561 31.2987 95.3581 22.2257C98.5289 18.1171 99.1006 13.9253 98.8858 8.87865C98.8536 8.1215 98.8177 7.34815 98.5949 6.62383C98.4665 6.20671 98.5796 7.49693 98.5949 7.93308C98.8185 14.3355 99.1094 20.7354 99.395 27.1354C99.9856 40.3725 100.483 53.6435 101.613 66.8493C101.69 67.7482 102.232 74.1038 102.232 68.8132C102.232 60.7223 101.694 61.7955 102.195 52.0839C102.762 41.1089 103.553 21.6688 115.542 16.0795C121.984 13.0768 125.043 19.669 118.961 22.9531C116.62 24.2174 108.481 24.8089 111.105 24.3714C115.075 23.7098 119.415 26.5233 123.689 26.0444C128.372 25.5195 132.364 23.7895 137.181 23.7895C141.308 23.7895 145.423 24.2492 149.546 24.4078C151.764 24.4931 153.991 24.3985 156.202 24.5896C157.228 24.6783 159.546 24.2675 159.22 25.2443C158.794 26.5235 156.789 26.4693 155.474 26.7717C145.706 29.0196 111.526 34.6328 106.814 35.4273C70.6125 41.531 64.2938 42.4678 28.9864 48.5198C28.4797 48.6067 -1.30868 53.5852 17.2759 50.8474C70.6791 42.9802 124.065 35.1548 177.659 28.6629C179.916 28.3894 196.371 26.4273 202.68 25.9716C202.856 25.9589 203.031 26.0382 203.189 26.1171" stroke="black" strokeWidth="3" strokeLinecap="round" />
              </svg>

            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILS CONTAINER */}
          <div className='flex flex-col gap-12 justify-center' ref={skillRef} >
            {/* SKILLS TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className='font-bold text-2xl'
            >
              SKILLS</motion.h1>
            {/* SKILL LIST */}
            <motion.div initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className='flex gap-4 flex-wrap'
            >
              <div className='rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black' >JavaScript</div>
              <div className='rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black' >React.ks</div>
              <div className='rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black' >Next.js</div>
              <div className='rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black' >Node.js</div>
              <div className='rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black' >Tailwing CSS</div>
              <div className='rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black' >MongoDB</div>
              <div className='rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black' >Bootstrap</div>
              <div className='rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black' >Material UI</div>
              <div className='rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black' >Chakra UI</div>
              <div className='rounded p-2 text-sm cursor-pointer text-white bg-black hover:bg-white hover:text-black' >Socket.io</div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE */}
          <div className='flex flex-col gap-12 justify-center pb-48' ref={experienceRef}>
            {/* EXPERIECE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}

              className='font-bold text-2xl' >EXPERIENCE</motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div className=''
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }} >
              {/* EXPERIENCE LIST ITEM*/}
              <div className='flex justify-between h-50 -mb-12' >
                {/* LEFT */}
                <div className='w-1/3'>
                  {/* JOB TITLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Full Stack Web Developer and R & D Intern</div>
                  {/* JOB DESC */}
                  <div className='p-3 text-sm italic'>Developed educational platform and researched autism for autistic children's benefit.</div>
                  {/* JOB DATE */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>June 2023 - Aug 2023</div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>MNIT Jaipur</div>
                </div>
                {/* CENTER */}
                <div className='w-1/6 flex justify-center'>
                  {/* LINE */}
                  <div className='h-100 w-1 bg-gray-600 rounded relative'>
                    {/* CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'></div>
              </div>
              {/* EXPERIENCE LIST ITEM 2*/}
              <div className='flex justify-between h-50 -mb-12' >
                {/* LEFT */}
                <div className='w-1/3'></div>
                {/* CENTER */}
                <div className='w-1/6 flex justify-center'>
                  {/* LINE */}
                  <div className='h-100 w-1 bg-gray-600 rounded relative'>
                    {/* CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'>
                  {/* JOB TITLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-e-lg'>Hackathon: All India Forensic Hackathon</div>
                  {/* JOB DESC */}
                  <div className='p-3 text-sm italic'>Finalist in top 15 teams for final round.</div>
                  {/* JOB DATE */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>Feb 2023</div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>NFSU Gandhinagar</div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM 3*/}
              <div className='flex justify-between h-50 -mb-12' >
                {/* LEFT */}
                <div className='w-1/3'>
                  {/* JOB TITLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Full Stack Web Developer</div>
                  {/* JOB DESC */}
                  <div className='p-3 text-sm italic'>Trainee at company, gained valuable knowledge working on significant projects.</div>
                  {/* JOB DATE */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>Aug 2023-October 2023</div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Technocracy Software Private Limited</div>
                </div>
                {/* CENTER */}
                <div className='w-1/6 flex justify-center'>
                  {/* LINE */}
                  <div className='h-100 w-1 bg-gray-600 rounded relative'>
                    {/* CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'></div>
              </div>
              {/* EXPERIENCE LIST ITEM 4*/}
              <div className='flex justify-between h-50 -mb-12' >
                {/* LEFT */}
                <div className='w-1/3'></div>
                {/* CENTER */}
                <div className='w-1/6 flex justify-center'>
                  {/* LINE */}
                  <div className='h-100 w-1 bg-gray-600 rounded relative'>
                    {/* CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'>
                  {/* JOB TITLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-e-lg'>Full Stack Web Developer</div>
                  {/* JOB DESC */}
                  <div className='p-3 text-sm italic'> Contributed to the development and redesigning of college website.</div>
                  {/* JOB DATE */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>Aug 2022 - Present</div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Government Engineering College, Ajmer</div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM 5*/}
              <div className='flex justify-between h-50 -mb-12' >
                {/* LEFT */}
                <div className='w-1/3'>
                  {/* JOB TITLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Full Stack Web Developer</div>
                  {/* JOB DESC */}
                  <div className='p-3 text-sm italic'>Contributed to the development and redesigning of TPO website.</div>
                  {/* JOB DATE */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>Aug 2022 - Present</div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Government Engineering College, Ajmer</div>
                </div>
                {/* CENTER */}
                <div className='w-1/6 flex justify-center'>
                  {/* LINE */}
                  <div className='h-100 w-1 bg-gray-600 rounded relative'>
                    {/* CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className='hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2 ' >
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage
