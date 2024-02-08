'use client'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';


const ContactPage = () => {

  const text = "Say Hello"
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    setError(false);
    setSuccess(false);
    e.preventDefault();

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
          console.log('SUCCESS!');
        },
        (error) => {
          setError(true);
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* TEXT CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl'>
          <motion.div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1
                }}
              >{letter}</motion.span>
            ))}
            😊
          </motion.div>
        </div>
        {/* FORM CONTAINER */}
        <form ref={form} onSubmit={sendEmail} className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-4 justify-center p-20'>
          <span>Dear Bhanu Dev,</span>
          <textarea name='user_message' rows={6} className='bg-transparent border-b-2 border-b-black outline-none resize-none' />
          <span>My mail address is:</span>
          <input name='user_email' type="text" className='bg-transparent border-b-2 border-b-black outline-none' />
          <span>Regards</span>
          <button className='bg-purple-300 rounded font-semibold text-gray-600 p-4'>Send</button>
          {success && <span className='text-green-600 font-semibold'>Your message has been sent Successfully!</span>}
          {error && <span className='text-red-600 font-semibold'>Something went wrong!</span>}
        </form>
      </div>
    </motion.div>
  )
}

export default ContactPage
