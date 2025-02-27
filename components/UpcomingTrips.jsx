'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

const trips = [
  {
    title: 'Malibu Surf Adventure',
    location: 'Malibu, California',
    date: 'March 15, 2025',
    image: '/beach.jpeg'
  },
  {
    title: 'Hawaii Wave Experience',
    location: 'Oahu, Hawaii',
    date: 'April 5, 2025',
    image: '/forest.jpg'
  },
  {
    title: 'Australian Gold Coast',
    location: 'Gold Coast, Australia',
    date: 'May 20, 2025',
    image: '/leSafari.jpg'
  }
]

export default function UpcomingTrips () {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const nextTrip = () => {
    setDirection(1)
    setIndex(prev => (prev + 1) % trips.length)
  }

  const prevTrip = () => {
    setDirection(-1)
    setIndex(prev => (prev - 1 + trips.length) % trips.length)
  }

  // Automatically move to the next trip every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(nextTrip, 3500)
    return () => clearInterval(interval) // Clear interval on component unmount
  }, [])

  return (
    <section className='relative w-full py-20 bg-[#1ea19f] text-white text-center'>
      <h2 className='text-5xl font-bold drop-shadow-lg'>Upcoming Surf Trips</h2>
      <p className='max-w-2xl mx-auto mt-4 text-lg'>
        Join us for an unforgettable surfing experience at the best locations
        around the world.
      </p>

      <div className='relative flex items-center justify-center max-w-5xl mx-auto mt-10 overflow-hidden'>
        <button
          onClick={prevTrip}
          className='absolute left-0 p-4 bg-white/40 rounded-full hover:bg-white/40 transition'
        >
          <ChevronLeft size={32} className='text-white' />
        </button>

        <div className='relative w-1/2 h-[500px]'>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              className='absolute w-full h-full'
              initial={{ x: direction > 0 ? '100%' : '-100%' }}
              animate={{ x: '0%' }}
              exit={{ x: direction > 0 ? '-100%' : '100%' }}
              transition={{ duration: .4, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className='relative w-full h-full p-6 bg-white rounded-lg shadow-2xl text-gray-900'>
                <Image
                  src={trips[index].image}
                  alt={trips[index].title}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg shadow-md'
                />
                <div className='absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-75 rounded-b-lg'>
                  <h3 className='text-2xl font-bold'>{trips[index].title}</h3>
                  <div className='flex items-center justify-center gap-2 mt-2 text-lg text-gray-700'>
                    <MapPin size={20} className='text-red-500' />{' '}
                    {trips[index].location}
                  </div>
                  <p className='mt-2 text-gray-600'>{trips[index].date}</p>

                  <Link href='/book-now'>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className='px-6 py-3 mt-4 text-lg font-semibold text-white uppercase bg-[#21b5b2] rounded-full shadow-lg transition-transform'
                    >
                      Book Now
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={nextTrip}
          className='absolute right-0 p-4 bg-white/20 rounded-full hover:bg-white/40 transition'
        >
          <ChevronRight size={32} className='text-white' />
        </button>
      </div>
    </section>
  )
}
