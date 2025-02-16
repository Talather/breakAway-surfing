import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'


export default function Footer () {
  return (
    <footer className='w-full px-8 py-6 bg-secondaryBg text-textColor'>
      <div className='container flex flex-col items-center justify-between mx-auto md:flex-row'>
        <p className='text-lg font-body'>
          © 2024 Breakaway Surf Co. All rights reserved.
        </p>
        <nav className='flex gap-6 mt-4 md:mt-0'>
          <Link href='/about' className='hover:text-accent'>
            About
          </Link>
          <Link href='/packages' className='hover:text-accent'>
            Packages
          </Link>
          <Link href='/trips' className='hover:text-accent'>
            Trips
          </Link>
          <Link href='/contact' className='hover:text-accent'>
            Contact
          </Link>
        </nav>
        <div className='flex gap-4 mt-4 md:mt-0'>
          <a
            href='https://facebook.com'
            target='_blank'
            className='text-2xl text-accent hover:opacity-80'
          >
            <FaFacebook />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            className='text-2xl text-accent hover:opacity-80'
          >
            <FaInstagram />
          </a>
          <a
            href='https://wa.me'
            target='_blank'
            className='text-2xl text-accent hover:opacity-80'
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  )
}
