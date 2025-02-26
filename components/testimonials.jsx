


'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Jake Parker',
    review:
      'Amazing experience! The instructors were super friendly, and the waves were perfect. Will definitely come back!',
    rating: 5,
    image: '/lira.jpg'
  },
  {
    name: 'Samantha Lee',
    review:
      'Had the best time of my life! The energy here is just incredible. Highly recommend for beginners and pros alike!',
    rating: 4.5,
    image: '/client.webp'
  },
  {
    name: 'Michael Smith',
    review:
      'A truly unforgettable experience. The lessons were well-structured, and I felt so confident on the board!',
    rating: 5,
    image: '/beach.jpeg'
  }
]

export default function Testimonials () {
  const [index, setIndex] = useState(0)

  const nextTestimonial = () => {
    setIndex(prev => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className='relative w-full py-20 bg-gradient-to-b from-blue-500 to-blue-700 text-white text-center overflow-hidden'>
      <h2 className='mb-6 text-5xl font-title'>Hear from Our Happy Surfers</h2>
      <p className='max-w-2xl mx-auto mb-10 text-lg'>
        Our clients love riding the waves with us! Check out their experiences
        below.
      </p>

      <div className='relative flex items-center justify-center max-w-4xl mx-auto'>
        <button
          onClick={prevTestimonial}
          className='absolute left-0 p-3 bg-white/20 rounded-full hover:bg-white/40 transition'
        >
          <ChevronLeft size={32} className='text-white' />
        </button>

        <motion.div
          key={index}
          className='relative w-full max-w-xl p-8 text-gray-800 bg-white border border-gray-300 shadow-xl rounded-xl'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex items-center gap-4'>
            <Image
              src={testimonials[index].image}
              alt={testimonials[index].name}
              width={64}
              height={64}
              className='object-cover rounded-full shadow-md'
            />
            <div className='text-left'>
              <h3 className='text-xl font-semibold'>
                {testimonials[index].name}
              </h3>
              <div className='flex gap-1 text-yellow-400'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < testimonials[index].rating ? 'yellow' : 'none'}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className='mt-4 text-lg italic'>"{testimonials[index].review}"</p>
        </motion.div>

        <button
          onClick={nextTestimonial}
          className='absolute right-0 p-3 bg-white/20 rounded-full hover:bg-white/40 transition'
        >
          <ChevronRight size={32} className='text-white' />
        </button>
      </div>
    </section>
  )
}
