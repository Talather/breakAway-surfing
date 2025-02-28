// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'

// const teamMembers = [
//   {
//     name: 'Shayaan',
//     role: 'Marketing Manager',
//     image: '/pic.jpg', // Uploaded image
//     description:
//       'Shayaan is a marketer and business consultant focusing on luxury markets.'
//   },
//   {
//     name: 'Khizar Asim',
//     role: 'Media And Tech Lead',
//     image: '/avatar.png',
//     description:
//       'Expert in media and technology, leading innovation in digital platforms.'
//   },
//   {
//     name: 'Fareha',
//     role: 'Outreach Associate',
//     image: '/female.webp',
//     description:
//       'Connecting people and building meaningful relationships with our clients.'
//   },
//   {
//     name: 'Anika',
//     role: 'Booking Advisor',
//     image: '/female.webp',
//     description:
//       'Helping clients with seamless bookings and customer experience.'
//   },
//   {
//     name: 'Azzaam',
//     role: 'Graphic Designer',
//     image: '/avatar.png',
//     description:
//       'Creating stunning visuals and branding materials for our campaigns.'
//   }
// ]

// export default function WhoWeAre () {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex(prevIndex => (prevIndex + 1) % teamMembers.length)
//     }, 3000) // Change slide every 3 seconds
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className='container px-6 mx-auto text-center py-36'>
//       <h2 className='mb-4 text-4xl font-bold text-white'>Who We Are</h2>
//       <p className='max-w-2xl mx-auto text-lg text-gray-200'>
//         We are a passionate community of marketers, designers, and tech
//         innovators.
//       </p>

//       <div className='relative mt-8 h-[300px] flex justify-center items-center'>
//         <AnimatePresence mode='wait'>
//           {teamMembers.map(
//             (member, index) =>
//               index === currentIndex && (
//                 <motion.div
//                   key={member.name}
//                   className='absolute flex flex-col items-center py-4 px-6 bg-white/10 rounded-xl shadow-md'
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -100 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <Image
//                     src={member.image}
//                     alt={member.name}
//                     width={150}
//                     height={150}
//                     className='object-cover border-4 border-white rounded-full'
//                   />
//                   <h3 className='mt-4 text-2xl font-semibold text-white'>
//                     {member.name}
//                   </h3>
//                   <p className='text-lg text-gray-300'>{member.role}</p>
//                   <p className='mt-4 text-gray-200 max-w-md text-center'>
//                     {member.description}
//                   </p>
//                 </motion.div>
//               )
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   )
// }




// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'

// const banners = [
//   {
//     image: '/logo/pic.jpg', // First banner image
//     alt: 'Marketing Manager Banner'
//   },
//   {
//     image: '/logo/pic.jpg', // Second banner image (Change to real banner)
//     alt: 'Tech and Media Banner'
//   },
//   {
//     image: '/logo/pic.jpg', // Third banner image (Change to real banner)
//     alt: 'Outreach Associate Banner'
//   }
// ]

// export default function WhoWeAre () {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length)
//     }, 3000) // Change slide every 3 seconds
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className='container px-6 mx-auto text-center py-36'>
//       <h2 className='mb-4 text-4xl font-bold text-white'>Who We Are</h2>
//       <p className='max-w-2xl mx-auto text-lg text-gray-200'>
//         We are a passionate community of marketers, designers, and tech
//         innovators.
//       </p>

//       {/* Banner Slideshow */}
//       <div className='mt-8 flex justify-center items-center'>
//         <AnimatePresence mode='wait'>
//           {banners.map(
//             (banner, index) =>
//               index === currentIndex && (
//                 <motion.div
//                   key={banner.alt}
//                   className='w-full max-w-3xl flex justify-center'
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -100 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <Image
//                     src={banner.image}
//                     alt={banner.alt}
//                     width={700}
//                     height={400}
//                     className='rounded-2xl shadow-lg border border-white'
//                   />
//                 </motion.div>
//               )
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   )
// }





'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react' // Icon library

const banners = [
  {
    image: '/about/1.jpg', // First banner image
    alt: 'Marketing Manager Banner'
  },
  {
    image: '/about/2.jpg', // Second banner image (Change to real banner)
    alt: 'Tech and Media Banner'
  },
  {
    image: '/about/3.jpg', // Third banner image (Change to real banner)
    alt: 'Outreach Associate Banner'
  },
  {
    image: '/about/4.jpg', // Third banner image (Change to real banner)
    alt: 'Outreach Associate Banner'
  },
  {
    image: '/about/5.jpg', // Third banner image (Change to real banner)
    alt: 'Outreach Associate Banner'
  },
  {
    image: '/about/6.jpg', // Third banner image (Change to real banner)
    alt: 'Outreach Associate Banner'
  }
]

export default function WhoWeAre () {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length)
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + banners.length) % banners.length
    )
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length)
  }

  return (
    <section className='container px-6 mx-auto text-center py-36'>
      <h2 className='mb-4 text-4xl font-bold text-white'>Who We Are</h2>
      <p className='max-w-2xl mx-auto text-lg text-gray-200'>
        We are a passionate community of marketers, designers, and tech
        innovators.
      </p>

      {/* Banner Slideshow with Navigation Buttons */}
      <div className='relative mt-8 flex justify-center items-center max-w-8xl mx-auto'>
        {/* Left Navigation Button */}
        <button
          onClick={handlePrev}
          className='absolute left-0 bg-white/20 hover:bg-white/30 transition-all p-3 rounded-full shadow-md text-white z-10'
        >
          <ChevronLeft size={30} />
        </button>

        {/* Banner Images */}
        <div className='overflow-hidden w-full flex justify-center items-center'>
          <AnimatePresence mode='wait'>
            {banners.map(
              (banner, index) =>
                index === currentIndex && (
                  <motion.div
                    key={banner.alt}
                    className=' w-full flex justify-center'
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src={banner.image}
                      alt={banner.alt}
                      width={800}
                      height={400}
                      className='rounded-2xl shadow-lg border border-white'
                    />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={handleNext}
          className='absolute right-0 bg-white/20 hover:bg-white/30 transition-all p-3 rounded-full shadow-md text-white z-10'
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Dots for Slide Indicators */}
      <div className='mt-6 flex justify-center space-x-2'>
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  )
}
