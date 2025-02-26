



// 'use client'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import Link from 'next/link'

// export default function OurStory () {
//   return (
//     <section className='relative flex items-center justify-center py-16 w-full bg-white'>
//       {/* Background Image */}
//       <div className='absolute inset-0 w-full h-full overflow-hidden'>
//         <Image
//           src='/beach.jpeg'
//           alt='Our Story Background'
//           layout='fill'
//           objectFit='cover'
//           className='opacity-100'
//         />
//       </div>

//       <div className='relative z-10 flex flex-col items-center w-full px-6 lg:flex-row'>
//         {/* Left Side - Scenic Image */}
//         <motion.div
//           className='w-full lg:w-1/2 max-w-full'
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <Image
//             src='/beach.jpeg'
//             alt='Scenic View'
//             width={800}
//             height={500}
//             className='rounded-lg shadow-lg w-full'
//           />
//         </motion.div>

//         {/* Right Side - Text Content */}
//         <motion.div
//           className='w-full p-10 lg:w-1/2 bg-white shadow-xl rounded-lg relative mt-8 lg:mt-0 lg:ml-12 max-w-full'
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className='absolute top-0 left-0 w-20 h-1 bg-yellow-400'></div>
//           <h2 className='text-3xl font-bold text-gray-900 uppercase tracking-widest flex items-center'>
//             <span className='text-yellow-500 mr-2'>02</span> OUR STORY
//           </h2>
//           <p className='mt-4 text-gray-700 leading-relaxed'>
//             Established in 1992, our{' '}
//             <span className='text-blue-500 font-semibold'>Cali Surf Shop</span>{' '}
//             has every aspect of beach life covered. The selection of leading
//             brands, hardware designs, and apparel make our offerings unbeatable.
//             Our deep-rooted passion for surfing drives us to bring you the best
//             products the surf industry has to offer.
//           </p>
//           <blockquote className='mt-4 italic text-lg text-gray-600'>
//             "Surfing is the most blissful experience you can have on this
//             planet, a taste of heaven..."
//           </blockquote>

//           {/* Button */}
//           <Link href='/about'>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className='relative px-6 py-3 mt-6 text-lg font-semibold text-white uppercase transition-all duration-300 bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-600'
//             >
//               More About Us
//             </motion.button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   )
// }



'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function OurStory () {
  return (
    <section className='relative flex items-center justify-end py-28 w-full bg-white'>
      {/* Background Image */}
      <div className='absolute inset-0 w-full h-full overflow-hidden'>
        <Image
          src='/beach.jpeg'
          alt='Our Story Background'
          layout='fill'
          objectFit='cover'
          className='opacity-100'
        />
      </div>

      {/* Content Box */}
      <motion.div
        className='relative z-10 w-full max-w-3xl px-10 py-28 bg-white shadow-2xl rounded-lg border-4 border-yellow-400 mr-16'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className='absolute top-0 left-0 w-20 h-1 bg-yellow-400'></div>
        <h2 className='text-3xl font-bold text-gray-900 uppercase tracking-widest flex items-center'>
          <span className='text-yellow-500 mr-2'>02</span> OUR STORY
        </h2>
        <p className='mt-4 text-gray-700 leading-relaxed'>
          Established in 1992, our{' '}
          <span className='text-blue-500 font-semibold'>Cali Surf Shop</span>{' '}
          has every aspect of beach life covered. The selection of leading
          brands, hardware designs, and apparel make our offerings unbeatable.
          Our deep-rooted passion for surfing drives us to bring you the best
          products the surf industry has to offer.
        </p>
        <blockquote className='mt-4 italic text-lg text-gray-600'>
          "Surfing is the most blissful experience you can have on this planet,
          a taste of heaven..."
        </blockquote>

        {/* Button */}
        <Link href='/about-us'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='relative px-6 py-3 mt-6 text-lg font-semibold text-white uppercase transition-all duration-300 bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-600'
          >
            More About Us
          </motion.button>
        </Link>
      </motion.div>
    </section>
  )
}

