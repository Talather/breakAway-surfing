'use client'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function JoinCommunity () {
  return (
    <section className='py-16 text-center text-white bg-gradient-to-r from-[#04bade] to-blue-800'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='mb-6 text-4xl font-extrabold drop-shadow-lg'
      >
        Join The Surfing Community
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='mb-6 text-lg'
      >
        Stay updated on upcoming trips and connect with fellow surfers!
      </motion.p>

      {/* Social Icons */}
      <div className='flex justify-center gap-8 mt-6'>
        <motion.a
          href='#'
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className='text-4xl text-green-400 transition duration-300 hover:text-green-600'
        >
          <FaWhatsapp />
        </motion.a>
        <motion.a
          href='#'
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className='text-4xl text-yellow-400 transition duration-300 hover:text-yellow-600'
        >
          <FaFacebook />
        </motion.a>
        <motion.a
          href='#'
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className='text-4xl text-pink-400 transition duration-300 hover:text-pink-600'
        >
          <FaInstagram />
        </motion.a>
      </div>
    </section>
  )
}
