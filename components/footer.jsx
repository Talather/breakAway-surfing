// // 'use client'
// // import Link from 'next/link'
// // import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'


// // export default function Footer() {
    
// //   return (
// //     <footer className='w-full px-8 py-6 bg-secondaryBg text-textColor'>
// //       <div className='container flex flex-col items-center justify-between mx-auto md:flex-row'>
// //         <p className='text-lg font-body'>
// //           © 2024 Breakaway Surf Co. All rights reserved.
// //         </p>
// //         <nav className='flex gap-6 mt-4 md:mt-0'>
// //           <Link href='/about' className='hover:text-accent'>
// //             About
// //           </Link>
// //           <Link href='/packages' className='hover:text-accent'>
// //             Packages
// //           </Link>
// //           <Link href='/trips' className='hover:text-accent'>
// //             Trips
// //           </Link>
// //           <Link href='/contact' className='hover:text-accent'>
// //             Contact
// //           </Link>
// //         </nav>
// //         <div className='flex gap-4 mt-4 md:mt-0'>
// //           <a
// //             href='https://facebook.com'
// //             target='_blank'
// //             className='text-2xl text-accent hover:opacity-80'
// //           >
// //             <FaFacebook />
// //           </a>
// //           <a
// //             href='https://instagram.com'
// //             target='_blank'
// //             className='text-2xl text-accent hover:opacity-80'
// //           >
// //             <FaInstagram />
// //           </a>
// //           <a
// //             href='https://wa.me'
// //             target='_blank'
// //             className='text-2xl text-accent hover:opacity-80'
// //           >
// //             <FaWhatsapp />
// //           </a>
// //         </div>
// //       </div>
// //     </footer>
// //   )
// // }









// 'use client'
// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react'

// export default function Footer () {
//   return (
//     <footer className='relative bg-[#1ea19f] text-white py-20 overflow-hidden'>
//       {/* Wave Effect */}
//       {/* <div className='absolute top-0 left-0 w-full overflow-hidden leading-none'>
//         <svg
//           className='relative block w-full h-32'
//           viewBox='0 0 1200 120'
//           preserveAspectRatio='none'
//         >
//           <path
//             d='M0,40 C300,120 900,-40 1200,40 V120 H0 Z'
//             className='fill-white'
//           ></path>
//         </svg>
//       </div> */}

//       <div className='relative z-10 flex flex-col items-center px-6 text-center max-w-7xl mx-auto'>
//         {/* Logo */}
//         {/* <Image
//           src='/logo/logo.png'
//           alt='Logo'
//           width={160}
//           height={80}
//           className='mb-8 rounded-lg' */}
//         {/* /> */}

//         {/* Subscription Form */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className='w-full max-w-2xl px-6 py-4 bg-white rounded-md shadow-lg flex items-center justify-between'
//         >
//           <input
//             type='email'
//             placeholder='Enter your email...'
//             className='flex-1 px-4 py-3 text-gray-800 rounded-l-md focus:outline-none'
//           />
//           <button className='px-6 py-3 text-lg font-semibold text-white uppercase bg-yellow-400 rounded-md shadow-lg hover:bg-yellow-600 transition-all'>
//             Subscribe
//           </button>
//         </motion.div>

//         {/* Contact Info */}
//         <div className='mt-8 flex flex-wrap justify-center gap-6 text-lg'>
//           <div className='flex items-center gap-2'>
//             <Mail size={22} />
//             <span>hello@surfshop.com</span>
//           </div>
//           <div className='flex items-center gap-2'>
//             <Phone size={22} />
//             <span>1-800-239-1472</span>
//           </div>
//         </div>

//         {/* Social Media Icons */}
//         <div className='mt-8 flex gap-6'>
//           <Link href='#' className='hover:text-yellow-400 transition-all'>
//             <Facebook size={32} />
//           </Link>
//           <Link href='#' className='hover:text-yellow-400 transition-all'>
//             <Twitter size={32} />
//           </Link>
//           <Link href='#' className='hover:text-yellow-400 transition-all'>
//             <Instagram size={32} />
//           </Link>
//         </div>

//         {/* Footer Links */}
//         <div className='mt-6 text-sm opacity-80 flex gap-8'>
//           <Link href='#' className='hover:text-yellow-400 transition-all'>
//             Terms of Use
//           </Link>
//           <Link href='#' className='hover:text-yellow-400 transition-all'>
//             Privacy Policy
//           </Link>
//         </div>
//       </div>
//     </footer>
//   )
// }


'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer () {
  return (
    <footer className='relative bg-gradient-to-r from-[#1ea19f] to-[#16a085] text-white py-10 overflow-hidden'>
      <div className='relative z-10 flex flex-col items-center px-6 text-center max-w-7xl mx-auto'>
        {/* Logo with Animation */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src='/logo/logo.png'
            alt='Logo'
            width={160}
            height={80}
            className='mb-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
          />
        </motion.div> */}

        {/* Footer Content Box with Glassmorphism Effect */}
        <div className='w-full max-w-6xl p-10 bg-gray-900/10 backdrop-blur-lg rounded-lg shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8 border border-gray-700'>
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
              className='flex-1 px-4 py-3 text-gray-800 rounded-full focus:outline-none focus:ring-2 '
            />
            <button className='px-6 py-3 text-lg font-semibold text-white uppercase bg-yellow-400 rounded-full shadow-lg h transition-all hover:scale-105'>
              Subscribe
            </button>
          </motion.div>

          {/* Contact Info with Hover Effect */}
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

        {/* Social Media Icons with Floating Effect */}
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

        {/* Footer Links with Underline Animation */}
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
    </footer>
  )
}
