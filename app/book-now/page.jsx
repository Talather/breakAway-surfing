'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function EventPage () {
  const [selectedDate, setSelectedDate] = useState('February 1st')

  return (
    <section className='container mx-auto px-6 py-24 bg-white mt-28 '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        {/* Left Section: Text & Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900'>
            Join the Ultimate BreakAway Surf Adventure – Reserve Your Spot Now!
          </h1>
          <p className='text-lg text-gray-700 leading-relaxed'>
            Imagine waking up to the sound of crashing waves, feeling the ocean
            breeze on your skin, and spending your days surfing the best swells
            with an amazing crew of adventure-seekers. This is your chance to
            experience like never before! Learn from expert surf
            coaches and ride the waves with confidence Explore scenic coastal
            trails and hidden beachside gems Unwind at sunset gatherings with a
            vibrant community of like-minded souls Soak in the energy of 
            surf culture with music, bonfires, and unforgettable vibes Spots are
            limited – secure yours today and make your dream surf escape a
            reality!
          </p>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg'
          >
            <Image
              src='/client.webp'
              alt='Jords Media'
              width={100}
              height={100}
              className='object-cover'
            />
          </motion.div> */}
        </motion.div>

        {/* Right Section: Booking Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='bg-white shadow-lg rounded-xl p-6 md:p-8 border border-gray-200 text-center'
        >
          <h2 className='text-xl font-semibold text-gray-900'>Surf Retreat Tour with the Team </h2>
          <h2 className='text-xl font-semibold text-gray-900'>205€ Advance</h2>
          <h2 className='text-xl font-semibold text-gray-900'>Final Price 680€</h2>

          <p className='text-md font-normal text-blue-400 mt-2'>Pay 30% in advance to save your spot</p>

          <select
            className='w-full mt-4 p-3 text-black border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
            value={selectedDate}
            onChange={e => setSelectedDate(e.target.value)}
          >
            <option>April 17th-23rd</option>
            <option>March 10th</option>
            <option>April 15th</option>
          </select>
          <Link href='https://buy.stripe.com/6oE3cf6JG2LF1Zm288'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='w-full mt-4 px-6 py-3 bg-orange-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-500 transition-all'
            >
              Save my spot
            </motion.button>
          </Link>

          {/* <p className='mt-4 text-blue-500 hover:underline cursor-pointer'>
            Chat with the team
          </p> */}

          <div className='flex items-center justify-center text-gray-600 text-sm mt-4'>
            <span className='mr-2'>👥</span> Only 5 spots left
          </div>
        </motion.div>
      </div>
    </section>
  )
}
