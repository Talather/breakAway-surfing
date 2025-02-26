'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Header () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 z-50 w-full bg-white shadow-md backdrop-blur-md'>
      <div className='flex items-center justify-between px-6 py-4 mx-auto max-w-7xl'>
        {/* Logo with animation */}
        <Link href='/'>
          <Image src={'/logo/logo.png'} alt='nonce' width={100} height={100} className = 'transition-transform duration-300 ease-in-out scale-150  animate-[zoom-in-out_3s_ease-in-out_infinite]'
 />
        </Link>


 {/* <div className='flex items-center'>
  <Image
    src='/logo/logo.png'
    alt='Logo'
    width={100}
    height={50}
    className='transition-transform duration-300 ease-in-out hover:scale-110'
  />
</div> */}




        {/* Navigation Menu (Desktop) */}
        <nav className='hidden gap-8 md:flex '>
          {[ 'Locations','About-Us', 'Contact'].map(
            (item, index) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
              >
                <motion.span
                  className='relative transition cursor-pointer font-montserrat text-accent hover:text-yellow-300'
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  // transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.span>
              </Link>
            )
          )}
        </nav>

        {/* View Packages Button */}
        <div className=''>
        <Link href='/packages' className='relative inline-flex items-center justify-center gap-2 px-2 py-2 overflow-hidden text-sm text-white transition-all duration-300 rounded-full shadow-lg font-montserrat lg:px-7 lg:py-3 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-yellow-400 to-yellow-500 group'>
  View Packages
  {/* Glossy Overlay */}
  <span className='absolute inset-0 transition-all duration-500 opacity-50 bg-white/20 group-hover:opacity-70'></span>
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
          className='absolute left-0 w-full p-6 bg-white shadow-md md:hidden backdrop-blur-md top-16'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {['Home', 'Locations', 'Gallery', 'Blog', 'Contact'].map(item => (
            <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`}>
              <span
                className='block py-2 text-center transition-all rounded text-accent hover:bg-white/20'
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
