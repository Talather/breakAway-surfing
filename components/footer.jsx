
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  CheckCircle
} from 'lucide-react'

// Subscription Toast Animation
const toastVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.4 } }
}

export default function Footer () {
  const [showToast, setShowToast] = useState(false)

  const handleSubscribe = () => {
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  return (
    <footer className='relative bg-gradient-to-r from-[#1ea19f] to-[#16a085] text-white py-6 overflow-hidden'>
      {/* Shiny Effect Animation */}
      <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_70%)] opacity-20 pointer-events-none'></div>

      <div className='relative z-10 flex flex-col items-center px-6 text-center max-w-7xl mx-auto'>
        {/* Footer Content Box with Glassmorphism */}
        <div className='w-full max-w-6xl p-10 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8 border border-white/20'>
          {/* Subscription Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='w-full md:w-2/3 flex flex-col md:flex-row items-center gap-4 bg-white p-2 rounded-full shadow-lg border-2'
          >
            <input
              type='email'
              placeholder='Enter your email...'
              className='flex-1 px-4 py-3 text-gray-800 rounded-full focus:outline-none focus:ring-2 transition-all'
            />
            <button
              onClick={handleSubscribe}
              className='px-6 py-3 text-lg font-semibold text-white uppercase bg-yellow-400 rounded-full shadow-lg transition-all hover:scale-105 hover:bg-yellow-500'
            >
              Subscribe
            </button>
          </motion.div>

          {/* Contact Info */}
          <div className='flex flex-col items-center text-white text-lg space-y-2'>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='flex items-center gap-2 cursor-pointer'
            >
              <Mail size={22} />
              <span className='hover:text-yellow-400 transition-all'>
                hello@surfshop.com
              </span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='flex items-center gap-2 cursor-pointer'
            >
              <Phone size={22} />
              <span className='hover:text-yellow-400 transition-all'>
                1-800-239-1472
              </span>
            </motion.div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className='mt-8 flex gap-6'>
          {[Facebook, Twitter, Instagram].map((Icon, index) => (
            <motion.a
              key={index}
              href='#'
              whileHover={{ scale: 1.2, y: -5 }}
              className='hover:text-yellow-400 transition-all'
            >
              <Icon size={32} />
            </motion.a>
          ))}
        </div>

        {/* Footer Links */}
        <div className='mt-6 text-sm opacity-80 flex gap-8'>
          {['Terms of Use', 'Privacy Policy'].map((link, index) => (
            <motion.a
              key={index}
              href='#'
              whileHover={{ scale: 1.1 }}
              className='hover:text-yellow-400 transition-all cursor-pointer relative after:content-[""] after:block after:h-[2px] after:bg-yellow-400 after:w-0 after:hover:w-full after:transition-all after:duration-300'
            >
              {link}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className='fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg flex items-center gap-3 shadow-lg'
            variants={toastVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <CheckCircle size={24} />
            Subscribed Successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}

