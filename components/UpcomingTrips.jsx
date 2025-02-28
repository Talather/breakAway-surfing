// // 'use client'

// // import { useState, useEffect } from 'react'
// // import { motion, AnimatePresence } from 'framer-motion'
// // import Image from 'next/image'
// // import Link from 'next/link'
// // import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

// // const trips = [
// //   {
// //     title: 'Morocco Surf Adventure',
// //     location: 'Morocco',
// //     date: 'April 15, 2025',
// //     image: '/beach.jpeg'
// //   },
// //   // {
// //   //   title: 'Hawaii Wave Experience',
// //   //   location: 'Oahu, Hawaii',
// //   //   date: 'April 5, 2025',
// //   //   image: '/forest.jpg'
// //   // },
// //   // {
// //   //   title: 'Australian Gold Coast',
// //   //   location: 'Gold Coast, Australia',
// //   //   date: 'May 20, 2025',
// //   //   image: '/leSafari.jpg'
// //   // }
// // ]

// // export default function UpcomingTrips () {
// //   const [index, setIndex] = useState(0)
// //   const [direction, setDirection] = useState(1)

// //   const nextTrip = () => {
// //     setDirection(1)
// //     setIndex(prev => (prev + 1) % trips.length)
// //   }

// //   const prevTrip = () => {
// //     setDirection(-1)
// //     setIndex(prev => (prev - 1 + trips.length) % trips.length)
// //   }

// //   // Automatically move to the next trip every 4 seconds
// //   useEffect(() => {
// //     const interval = setInterval(nextTrip, 4000)
// //     return () => clearInterval(interval)
// //   }, [])

// //   return (
// //     <section className='relative w-full py-20 bg-[#1ea19f] text-white text-center'>
// //       <h2 className='text-5xl font-bold drop-shadow-lg'>Upcoming Surf Trips</h2>
// //       <p className='max-w-2xl mx-auto mt-4 text-lg'>
// //         Join us for an unforgettable surfing experience at the best locations
// //         around the world.
// //       </p>

// //       <div className='relative flex items-center justify-center max-w-5xl mx-auto mt-10 overflow-hidden'>
// //         {/* Left Navigation Button */}
// //         <button
// //           onClick={prevTrip}
// //           className='absolute left-0 p-4 bg-white/30 rounded-full hover:bg-white/50 transition'
// //         >
// //           <ChevronLeft size={32} className='text-white' />
// //         </button>

// //         {/* Trip Card Slider */}
// //         <div className='relative w-3/4 max-w-lg h-[500px] overflow-hidden'>
// //           <AnimatePresence mode='wait' custom={direction}>
// //             <motion.div
// //               key={index}
// //               className='absolute w-full h-full'
// //               initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
// //               animate={{ x: 0, opacity: 1 }}
// //               exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
// //               transition={{ duration: 0.6, ease: 'easeInOut' }}
// //             >
// //               <div className='relative w-full h-full p-6 bg-white rounded-lg shadow-2xl text-gray-900 overflow-hidden'>
// //                 <Image
// //                   src={trips[index].image}
// //                   alt={trips[index].title}
// //                   layout='fill'
// //                   objectFit='cover'
// //                   className='rounded-lg shadow-md'
// //                 />
// //                 <div className='absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-80 rounded-b-lg'>
// //                   <h3 className='text-2xl font-bold'>{trips[index].title}</h3>
// //                   <div className='flex items-center justify-center gap-2 mt-2 text-lg text-gray-700'>
// //                     <MapPin size={20} className='text-red-500' />{' '}
// //                     {trips[index].location}
// //                   </div>
// //                   <p className='mt-2 text-gray-600'>{trips[index].date}</p>

// //                   <Link href='/book-now'>
// //                     <motion.button
// //                       whileHover={{ scale: 1.05 }}
// //                       whileTap={{ scale: 0.95 }}
// //                       className='px-6 py-3 mt-4 text-lg font-semibold text-white uppercase bg-[#21b5b2] rounded-full shadow-lg transition-transform'
// //                     >
// //                       Book Now
// //                     </motion.button>
// //                   </Link>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </AnimatePresence>
// //         </div>

// //         {/* Right Navigation Button */}
// //         <button
// //           onClick={nextTrip}
// //           className='absolute right-0 p-4 bg-white/30 rounded-full hover:bg-white/50 transition'
// //         >
// //           <ChevronRight size={32} className='text-white' />
// //         </button>
// //       </div>
// //     </section>
// //   )
// // }



























'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

const trip = {
  title: 'Morocco Surf Adventure',
  location: 'Morocco',
  date: 'April 15, 2025',
  image: '/sigmas.jpg'
}

export default function UpcomingTrip () {
  return (
    <section className='relative w-full py-16 px-4 sm:px-6 md:px-10 bg-[#1ea19f] text-white text-center'>
      <motion.h2
        className='text-4xl sm:text-5xl font-bold drop-shadow-lg'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Upcoming Surf Trip
      </motion.h2>
      <motion.p
        className='max-w-lg md:max-w-2xl mx-auto mt-4 text-base sm:text-lg'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Join us for an unforgettable surfing experience in{' '}
        <strong>{trip.location}</strong> with expert instructors and perfect
        waves.
      </motion.p>

      <motion.div
        className='relative max-w-sm sm:max-w-lg mx-auto mt-10 bg-white rounded-lg shadow-2xl text-gray-900 overflow-hidden'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Trip Image */}
        <div className='relative w-full h-[320px] sm:h-[450px] overflow-hidden rounded-t-lg'>
          <Image
            src={trip.image}
            alt={trip.title}
            layout='fill'
            objectFit='cover'
            className='rounded-t-lg shadow-md'
          />
        </div>

        {/* Trip Details */}
        <div className='p-4 sm:p-6'>
          <h3 className='text-2xl sm:text-3xl font-bold text-center'>
            {trip.title}
          </h3>
          <div className='flex items-center justify-center gap-2 mt-3 text-base sm:text-lg text-gray-700'>
            <MapPin size={22} className='text-red-500' />
            {trip.location}
          </div>
          <p className='mt-2 text-gray-600 text-center text-sm sm:text-lg'>
            {trip.date}
          </p>

          {/* Book Now Button */}
          <Link href='/book-now'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-4 sm:px-6 py-3 mt-6 w-full text-base sm:text-lg font-semibold text-white uppercase bg-[#21b5b2] rounded-full shadow-lg transition-all hover:bg-[#1a8e8b]'
            >
              Book Now
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
