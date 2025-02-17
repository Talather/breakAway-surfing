'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Jake Parker',
    review:
      'Amazing experience! The instructors were super friendly, and the waves were perfect. Will definitely come back!',
    rating: 5,
    image: '/client.webp'
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
    image: '/client.webp'
  }
]

export default function Testimonials () {
  const [index, setIndex] = useState(0)

  const nextTestimonial = () => {
    console.log('Next Testimonial Clicked ✅')
    setIndex(prev => (prev + 1) % testimonials.length)
  }

  return (
    <section className='relative lg:min-w-[99vw] py-16 bg-gradient-to-b from-blue-500 to-blue-700 text-white text-center overflow-hidden'>
      {/* ✅ Fix 1: Ensure Background Doesn't Block Clicks */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/lira.jpg')] bg-cover opacity-10 pointer-events-none"></div>

      <h2 className='text-4xl font-bold mb-6'>
        🌊 Hear from Our Happy Surfers
      </h2>
      <p className='text-lg mb-10 max-w-2xl mx-auto'>
        Our clients love riding the waves with us! Check out their experiences
        below.
      </p>

      {/* ✅ Fix 2: Ensure Key is On Parent to Prevent Remounting */}
      <div key={index}>
        <motion.div
          className='relative max-w-xl mx-auto bg-white text-gray-800 p-8 rounded-xl shadow-xl border border-gray-300'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex items-center gap-4'>
            {/* Client Image */}
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className='w-16 h-16 rounded-full object-cover shadow-md'
            />
            <div className='text-left'>
              <h3 className='text-xl font-semibold'>
                {testimonials[index].name}
              </h3>
              {/* Star Rating */}
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
      </div>

      {/* ✅ Fix 3: Ensure Clicks Register */}
      <div>
        <button
          className='mt-10 px-6 py-3 bg-yellow-400 hover:bg-yellow-600 text-white font-semibold rounded-full shadow-lg transition-all cursor-pointer'
          onClick={e => {
            e.stopPropagation() // Stops click interference
            nextTestimonial()
          }}
        >
          Next Review
        </button>
      </div>
    </section>
  )
}
