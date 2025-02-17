






// import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'
// import { motion } from 'framer-motion'
// import { useState } from 'react'
// import { FaArrowRight } from 'react-icons/fa'

// export default function UpcomingTrips () {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const trips = [
//     {
//       title: 'Canary Islands',
//       description: 'A breathtaking surfing adventure in the Atlantic.',
//       img: '/leSafari.jpg',
//       color: 'text-blue-600'
//     },
//     {
//       title: 'Morocco / Portugal',
//       description: 'Experience the perfect waves in these iconic surf spots.',
//       img: 'https://www.travelawaits.com/wp-content/uploads/2021/07/shutterstock_1713189472.jpg?w=1000',
//       color: 'text-green-600'
//     },
//     {
//       title: 'Bali, Indonesia',
//       description: 'Catch the best waves in the tropical paradise of Bali.',
//       img: '/forest.jpg',
//       color: 'text-yellow-600'
//     }
//   ]

//   const nextSlide = () => {
//     setCurrentIndex(prevIndex => (prevIndex + 1) % trips.length)
//   }

//   return (
//     <section className='relative max-w-6xl px-6 mt-5 py-16 mx-auto text-center'>
//       <h2 className='mb-16 text-4xl lg:text-6xl font-bold text-yellow-300 '>
//         🌍 Upcoming Trips
//       </h2>

//       <div className='relative grid grid-cols-1 gap-6 overflow-hidden md:grid-cols-2'>
//         {[0, 1].map(offset => {
//           const index = (currentIndex + offset) % trips.length
//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className='p-6 bg-white rounded-lg shadow-lg'
//             >
//               <h3 className={`text-2xl font-semibold ${trips[index].color}`}>
//                 {trips[index].title}
//               </h3>
//               <p className='mt-2 text-gray-700'>{trips[index].description}</p>
//               <div className='mt-4'>
//                 <img
//                   src={trips[index].img}
//                   alt={trips[index].title}
//                   className='object-cover w-full h-96 rounded-lg shadow-md'
//                 />
//               </div>
//             </motion.div>
//           )
//         })}
//       </div>

//       {/* Navigation Button */}
//       <div className='absolute transform -translate-y-1/2 -right-20 top-1/2'>
//         <button
//           onClick={nextSlide}
//           className='p-4 transition duration-300 bg-yellow-400 rounded-full shadow-lg hover:bg-blue-500'
//         >
//           <FaArrowRight className='text-2xl text-white' />
//         </button>
//       </div>

//       {/* View All Packages Button */}
//       <div className='mt-24'>
//       <button className='relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full  text-lg font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-7 py-3 bg-gradient-to-b from-yellow-300 to-yellow-400 text-white shadow-lg overflow-hidden group'>
//   View Packages
//   {/* Glossy Overlay */}
//   <span className='absolute inset-0 bg-white/20 opacity-50 group-hover:opacity-70 transition-all duration-500'></span>
//   {/* Shine Effect */}
//   <span className='absolute left-[-150%] top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white to-transparent rotate-12 opacity-30 group-hover:translate-x-[150%] group-hover:opacity-70 transition-all duration-700 ease-in-out'></span>
//         </button>
//         </div>

//     </section>
//   )
// }




























'use client'
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaArrowRight,
  FaArrowLeft
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function UpcomingTrips () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('right') // To track sliding direction

  const trips = [
    {
      title: 'Canary Islands',
      description: 'A breathtaking surfing adventure in the Atlantic.',
      img: '/leSafari.jpg',
      color: 'text-blue-600'
    },
    {
      title: 'Morocco / Portugal',
      description: 'Experience the perfect waves in these iconic surf spots.',
      img: 'https://www.travelawaits.com/wp-content/uploads/2021/07/shutterstock_1713189472.jpg?w=1000',
      color: 'text-green-600'
    },
    {
      title: 'Bali, Indonesia',
      description: 'Catch the best waves in the tropical paradise of Bali.',
      img: '/forest.jpg',
      color: 'text-yellow-600'
    }
  ]

  const nextSlide = () => {
    setDirection('right')
    setCurrentIndex(prevIndex => (prevIndex + 1) % trips.length)
  }

  const prevSlide = () => {
    setDirection('left')
    setCurrentIndex(prevIndex => (prevIndex - 1 + trips.length) % trips.length)
  }

  return (
    <section className='relative max-w-7xl px-6 mt-5 py-16 mx-auto text-center'>
      <h2 className='mb-16 text-4xl lg:text-6xl font-bold text-yellow-300 drop-shadow-lg'>
        🌍 Upcoming Surf Trips
      </h2>

      <div className='relative grid grid-cols-1 gap-6 overflow-hidden md:grid-cols-2'>
        {[0, 1].map(offset => {
          const index = (currentIndex + offset) % trips.length
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: direction === 'right' ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className='p-6 bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-lg hover:scale-105 transition-all duration-500'
            >
              <h3
                className={`text-2xl font-semibold ${trips[index].color} drop-shadow-md`}
              >
                {trips[index].title}
              </h3>
              <p className='mt-2 text-white/80'>{trips[index].description}</p>
              <div className='mt-4'>
                <img
                  src={trips[index].img}
                  alt={trips[index].title}
                  className='object-cover w-full h-96 rounded-lg shadow-lg transition-all duration-500 hover:scale-105'
                />
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Navigation Buttons */}
      <div className='absolute transform -translate-y-1/2 left-5 top-1/2'>
        <button
          onClick={prevSlide}
          className='p-4 transition duration-300 bg-yellow-400 rounded-full shadow-lg hover:bg-blue-500 hover:scale-110'
        >
          <FaArrowLeft className='text-2xl text-white' />
        </button>
      </div>
      <div className='absolute transform -translate-y-1/2 right-5 top-1/2'>
        <button
          onClick={nextSlide}
          className='p-4 transition duration-300 bg-yellow-400 rounded-full shadow-lg hover:bg-blue-500 hover:scale-110'
        >
          <FaArrowRight className='text-2xl text-white' />
        </button>
      </div>

      {/* View All Packages Button */}
      <div className='mt-16'>
        <button className='relative inline-flex items-center justify-center gap-2 rounded-full text-lg font-medium px-7 py-3 bg-gradient-to-b from-yellow-300 to-yellow-400 text-white shadow-lg overflow-hidden group hover:scale-105 transition-all duration-500'>
          View Packages
          {/* Glossy Overlay */}
          <span className='absolute inset-0 bg-white/20 opacity-50 group-hover:opacity-70 transition-all duration-500'></span>
          {/* Shine Effect */}
          <span className='absolute left-[-150%] top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white to-transparent rotate-12 opacity-30 group-hover:translate-x-[150%] group-hover:opacity-70 transition-all duration-700 ease-in-out'></span>
        </button>
      </div>

      {/* Social Media Links */}
      <div className='mt-12 flex justify-center gap-6'>
        <a
          href='#'
          className='text-white text-2xl hover:text-blue-400 transition-all duration-300'
        >
          <FaFacebook />
        </a>
        <a
          href='#'
          className='text-white text-2xl hover:text-green-400 transition-all duration-300'
        >
          <FaWhatsapp />
        </a>
        <a
          href='#'
          className='text-white text-2xl hover:text-pink-400 transition-all duration-300'
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  )
}
