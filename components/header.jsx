'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Header () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 z-50 w-full bg-transparent backdrop-blur-lg shadow-none'>
      <div className='flex items-center justify-between px-10 py-6 mx-auto max-w-7xl'>
        {/* Navigation Menu (Desktop) */}
        <nav className='hidden gap-10 md:flex'>
          {['About-us', 'Contact'].map(item => (
            <Link
              key={item}
              href={`/${item
                .toLowerCase()
                .replace(/ & /g, '-')
                .replace(' ', '-')}`}
            >
              <motion.span
                className='relative transition-all font-montserrat text-white hover:text-yellow-400 cursor-pointer text-lg uppercase tracking-widest'
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {item}
              </motion.span>
            </Link>
          ))}
        </nav>

        {/* Centered Logo */}
        <Link href='/'>
          <Image
            src='/logo/logo.png'
            alt='Cali Surf'
            width={160}
            height={80}
            className='transition-transform duration-300 ease-in-out rounded-lg scale-125 hover:scale-150'
          />
        </Link>

        {/* View Packages Button */}
        <div className='hidden md:flex'>
          <Link
            href='/book-now'
            className='px-6 py-2 text-black bg-yellow-400 rounded-sm shadow-xl hover:scale-105 font-montserrat text-sm lg:text-base uppercase tracking-widest'
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='text-white md:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          className='absolute left-0 w-full  p-6 bg-white/90 backdrop-blur-xl shadow-lg md:hidden top-16 rounded-lg'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {['About-us', 'Contact'].map(item => (
            <Link
              key={item}
              href={`/${item
                .toLowerCase()
                .replace(/ & /g, '-')
                .replace(' ', '-')}`}
            >
              <span
                className='block py-3 text-center text-lg text-black hover:text-yellow-400 uppercase tracking-widest'
                onClick={() => setIsOpen(false)}
              >
                {item}
              </span>
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  )
}
