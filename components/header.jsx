// import { Button } from '@/components/ui/button'
// import Link from 'next/link'

// export default function Header () {
//   return (
//     <header className='flex items-center justify-between w-full px-8 py-4 bg-white shadow-md'>
//       <Link href='/' className='text-3xl text-accent font-title'>
//         Breakaway Surf Co.
//       </Link>
//       <nav className='flex gap-6'>
//         <Link href='/about' className='text-textColor hover:text-accent'>
//           About
//         </Link>
//         <Link href='/packages' className='text-textColor hover:text-accent'>
//           Packages
//         </Link>
//         <Link href='/trips' className='text-textColor hover:text-accent'>
//           Trips
//         </Link>
//         <Link href='/contact' className='text-textColor hover:text-accent'>
//           Contact
//         </Link>
//       </nav>
//       <Button className='px-6 py-2 rounded-md text-accent bg-accent hover:opacity-80'>
//         Book Now
//       </Button>
//     </header>
//   )
// }









'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Header () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 z-50 w-full shadow-md bg-primaryBg backdrop-blur-md'>
      <div className='flex items-center justify-between px-6 py-4 mx-auto max-w-7xl'>
        {/* Logo */}
        <Link href='/'>
          <span className='text-2xl font-bold tracking-wide text-accent'>
            🌊 BreakAway Surfing
          </span>
        </Link>

        {/* Navigation Menu (Desktop) */}
        <nav className='hidden gap-8 md:flex'>
          {['Home', 'Surf Spots', 'Gallery', 'Blog', 'Contact'].map(item => (
            <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`}>
              <span className='transition duration-300 cursor-pointer text-accent hover:text-yellow-300'>
                {item}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className='text-accent md:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className='absolute left-0 w-full p-6 shadow-md md:hidden bg-white/10 backdrop-blur-md top-16'>
          {['Home', 'Surf Spots', 'Gallery', 'Blog', 'Contact'].map(item => (
            <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`}>
              <span
                className='block py-2 text-center transition rounded text-accent hover:bg-white/20'
                onClick={() => setIsOpen(false)}
              >
                {item}
              </span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
