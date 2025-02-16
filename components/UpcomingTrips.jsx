'use client'


//
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
//     }
//   ]

//   const nextSlide = () => {
//     setCurrentIndex(prevIndex => (prevIndex + 1) % trips.length)
//   }

//   return (
//     <section className='relative max-w-6xl px-6 py-16 mx-auto text-center'>
//       <h2 className='mb-10 text-4xl font-bold text-yellow-400 drop-shadow-lg'>
//         🌍 Upcoming Trips
//       </h2>

//       <div className='relative overflow-hidden'>
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className='max-w-lg p-6 mx-auto bg-white rounded-lg shadow-lg'
//         >
//           <h3 className={`text-2xl font-semibold ${trips[currentIndex].color}`}>
//             {trips[currentIndex].title}
//           </h3>
//           <p className='mt-2 text-gray-700'>
//             {trips[currentIndex].description}
//           </p>
//           <div className='mt-4'>
//             <img
//               src={trips[currentIndex].img}
//               alt={trips[currentIndex].title}
//               className='object-cover w-full h-40 rounded-lg shadow-md'
//             />
//           </div>
//         </motion.div>
//       </div>

//       {/* Navigation Button */}
//       <div className='absolute right-0 transform -translate-y-1/2 top-1/2'>
//         <button
//           onClick={nextSlide}
//           className='p-4 transition duration-300 bg-yellow-400 rounded-full shadow-lg hover:bg-blue-500'
//         >
//           <FaArrowRight className='text-2xl text-white' />
//         </button>
//       </div>

//       {/* View All Packages Button */}
//       <div className='mt-24'>
//         <a
//           href='/packages'
//           className='px-6 py-5 text-lg font-semibold text-white transition duration-300 bg-blue-500 rounded-full shadow-md hover:bg-yellow-400'
//         >
//           View All Packages
//         </a>
//       </div>
//     </section>
//   )
// }












import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function UpcomingTrips () {
  const [currentIndex, setCurrentIndex] = useState(0)

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
    setCurrentIndex(prevIndex => (prevIndex + 1) % trips.length)
  }

  return (
    <section className='relative max-w-6xl px-6 py-16 mx-auto text-center'>
      <h2 className='mb-10 text-4xl font-bold text-yellow-400 drop-shadow-lg'>
        🌍 Upcoming Trips
      </h2>

      <div className='relative grid grid-cols-1 gap-6 overflow-hidden md:grid-cols-2'>
        {[0, 1].map(offset => {
          const index = (currentIndex + offset) % trips.length
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='p-6 bg-white rounded-lg shadow-lg'
            >
              <h3 className={`text-2xl font-semibold ${trips[index].color}`}>
                {trips[index].title}
              </h3>
              <p className='mt-2 text-gray-700'>{trips[index].description}</p>
              <div className='mt-4'>
                <img
                  src={trips[index].img}
                  alt={trips[index].title}
                  className='object-cover w-full h-40 rounded-lg shadow-md'
                />
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Navigation Button */}
      <div className='absolute transform -translate-y-1/2 -right-20 top-1/2'>
        <button
          onClick={nextSlide}
          className='p-4 transition duration-300 bg-yellow-400 rounded-full shadow-lg hover:bg-blue-500'
        >
          <FaArrowRight className='text-2xl text-white' />
        </button>
      </div>

      {/* View All Packages Button */}
      <div className='mt-24'>
        <a
          href='/packages'
          className='px-6 py-5 text-lg font-semibold text-white transition duration-300 rounded-full shadow-md bg-accent hover:bg-yellow-400'
        >
          View All Packages
        </a>
      </div>
    </section>
  )
}

