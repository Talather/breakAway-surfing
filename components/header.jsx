'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 z-50 w-full bg-primaryBg shadow-md backdrop-blur-md'>
      <div className='flex items-center justify-between px-6 py-4 mx-auto max-w-7xl'>
        {/* Logo with animation */}
        <Link href='/'>
          <motion.span
            className='text-2xl font-bold tracking-wide text-accent cursor-pointer relative'
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            🌊 BreakAway Surfing
          </motion.span>
        </Link>

        {/* Navigation Menu (Desktop) */}
        <nav className='hidden gap-8 md:flex '>
          {[ 'Surf Spots', 'Gallery', 'Blog', 'Contact'].map(
            (item, index) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
              >
                <motion.span
                  className='transition cursor-pointer text-accent hover:text-yellow-300 relative'
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.span>
              </Link>
            )
          )}
        </nav>

        {/* View Packages Button */}
        <div className=''>
        <Link href='/packages' className='lg:px-7 lg:py-3 relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full  text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-2 py-2 bg-gradient-to-b from-yellow-400 to-yellow-500 text-white shadow-lg overflow-hidden group'>
  View Packages
  {/* Glossy Overlay */}
  <span className='absolute inset-0 bg-white/20 opacity-50 group-hover:opacity-70 transition-all duration-500'></span>
  {/* Shine Effect */}
  <span className='absolute left-[-150%] top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white to-transparent rotate-12 opacity-30 group-hover:translate-x-[150%] group-hover:opacity-70 transition-all duration-700 ease-in-out'></span>
          </Link>
          </div>


        {/* Mobile Menu Button */}
        <button
          className='text-accent md:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Slide-in Animation */}
      {isOpen && (
        <motion.nav
          className='absolute left-0 w-full p-6 shadow-md md:hidden bg-white backdrop-blur-md top-16'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {['Home', 'Surf Spots', 'Gallery', 'Blog', 'Contact'].map(item => (
            <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`}>
              <span
                className='block py-2 text-center text-accent transition-all hover:bg-white/20 rounded'
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
