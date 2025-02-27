'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Khizar Asim',
    role: 'Media And Tech lead',
    image: '/avatar.png',
    description:
      ''
  },
  {
    name: 'Fareha',
    role: 'Outreach Associate',
    image: '/female.webp',
    description:
      ''  },
  {
    name: 'Anika',
    role: 'Booking Advisor',
    image: '/female.webp',
    description:
      '' }
  , {
    name: 'Azzaam',
    role: 'Graphic Designer',
    image: '/avatar.png',
    description:
      '' }
]

export default function WhoWeAre () {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % teamMembers.length)
    }, 1800) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className='container px-6 mx-auto text-center py-36'>
      <h2 className='mb-4 text-4xl font-bold text-white transition-all duration-300'>
        Who We Are
      </h2>
      <p className='max-w-2xl mx-auto text-lg text-gray-200'>
        We are a passionate community of surfers, adventurers, and ocean lovers.
        Founded by pro surfers, our goal is to teach, inspire, and bring people
        together through the love of surfing.
      </p>
      <div className='relative mt-8 '>
        <AnimatePresence>
          {teamMembers.map(
            (member, index) =>
              index === currentIndex && (
                <motion.div
                  key={member.name}
                  className='absolute inset-0 flex flex-col items-center py-4 transition-all duration-300 shadow-sm  rounded-xl'
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className='object-cover border-4 border-white rounded-full'
                  />
                  <h3 className='mt-4 text-2xl font-semibold text-white'>
                    {member.name}
                  </h3>
                  <p className='text-lg text-gray-300'>{member.role}</p>
                  <p className='mt-4 text-gray-200 max-w-md'>
                    {member.description}
                  </p>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
