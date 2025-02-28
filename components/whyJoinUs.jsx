'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// Fade-in animation effect
const fadeIn = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

// Floating effect for benefit items
const floatEffect = {
  initial: { y: 0 },
  animate: {
    y: [0, -5, 0],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
  }
}

// Benefits list with improved content
const benefits = [
  {
    icon: '🏄',
    title: 'Expert Trainers',
    description:
      'Learn from professional surfers with years of experience in top waves.'
  },
  {
    icon: '🌊',
    title: 'Best Surf Spots',
    description:
      'Access to breathtaking surf locations worldwide, from Bali to Hawaii.'
  },
  {
    icon: '🏆',
    title: 'Exciting Competitions',
    description:
      'Compete in thrilling events and showcase your skills on a global stage.'
  },
  {
    icon: '🔥',
    title: 'Community & Networking',
    description:
      'Join a vibrant community of surf enthusiasts and make lifelong connections.'
  },
  {
    icon: '💪',
    title: 'Fitness & Training',
    description:
      'Get exclusive fitness programs to enhance your endurance and performance.'
  },
  {
    icon: '🎉',
    title: 'Exclusive Surf Camps',
    description:
      'Enjoy surf retreats, camps, and private coaching sessions in paradise.'
  }
]

export default function WhyJoinUs () {
  return (
    <motion.section
      className='px-8 py-20 text-center bg-gray-400 text-blue-900 rounded-lg shadow-lg'
      variants={fadeIn}
      initial='initial'
      animate='animate'
    >
      <h2 className='mb-4 text-4xl font-bold transition-all duration-300 hover:scale-105 text-white drop-shadow-md'>
        Why Join Us?
      </h2>
      <p className='max-w-2xl mx-auto text-lg text-white'>
        Become part of an elite surfing community that offers expert coaching,
        world-class surf spots, and unforgettable experiences.
      </p>

      {/* Benefits Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className='p-6 bg-white rounded-xl shadow-md hover:bg-[#1ea19f] hover:text-white transition-all duration-300 transform hover:scale-105 flex flex-col items-center'
            variants={floatEffect}
            initial='initial'
            animate='animate'
          >
            <div className='text-4xl'>{benefit.icon}</div>
            <h3 className='mt-3 text-xl font-semibold'>{benefit.title}</h3>
            <p className='text-sm text-gray-600 hover:text-white text-center mt-2'>
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>

          {/* Call-to-Action Button */}
          <Link href={'/book-now'}>
      <motion.button
        className='mt-10 px-6 py-3 bg-[#1ea19f] text-white rounded-md text-lg font-medium shadow-md hovker:bg-blue-800 transition-all duration-300 transform hover:scale-105'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Join Now 🚀
      </motion.button></Link>
    </motion.section>
  )
}
