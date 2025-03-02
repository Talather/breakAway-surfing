'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Image from 'next/image'

const TRUSTPILOT_URL = 'https://uk.trustpilot.com/review/breakawaysurf.co.uk'

const testimonials = [
  {
    name: 'Haven Carty',
    review:
      "Had a great journey and interesting conversation on the bus from the accommodation. Staff were friendly and got us from our rooms to the on the sea safely. The water was a bit choppy, but I'm sure BreakAway Surf chose the best location for beginners." ,   rating: 5,
    image: '/avatar.png'
  },
  {
    name: 'Leila',
    review:"It’s an incredible place to surf! The instructors are skilled and friendly, the waves are perfect for all levels, and the atmosphere is super welcoming. Great equipment, stunning location, and an overall amazing experience, I can’t wait to come back!",
        rating: 4.5,
    image: '/client.webp'
  },
  {
    name: 'Oreoluwa Akinjobi',
    review:"I enjoyed the fact that they are really patient with you and they are able to adapt to your learning process."
     ,  rating: 5,
    image: '/avatar.png'
  },
  {
    name: 'Sophia Martinez',
    review:
      'A dream come true! The vibes, the waves, and the people made this unforgettable. Five stars!',
    rating: 5,
    image: '/female.webp'
  },
  {
    name: 'Bilal Shakeel',
    review:
      "I had an incredible experience the team was welcoming and professional. The instructor was super professional They provided clear instructions, helpful tips, and great encouragement, which made catching waves so much easier and way more fun!",   rating: 4,
    image: '/avatar.png'
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

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className='relative w-full py-20 overflow-hidden text-center text-white bg-gradient-to-br from-[#3ce7c5] to-blue-600'>
      <h2 className='mb-6 text-4xl font-bold text-white md:text-5xl drop-shadow-lg'>
        What Our Customers Say
      </h2>
      <p className='max-w-2xl mx-auto mb-10 text-lg text-gray-200'>
        Read why our surfers love us! Experience the waves, the coaching, and
        the unforgettable moments.
      </p>

      <div className='relative flex items-center justify-center max-w-4xl mx-auto'>
        {/* Left Navigation Button */}
        <button
          onClick={prevTestimonial}
          className='absolute left-0 p-3 transition rounded-full bg-white/20 hover:bg-white/30'
        >
          <ChevronLeft size={32} className='text-white drop-shadow-lg' />
        </button>

        {/* Testimonial Slide */}
        <div className='w-full max-w-xl overflow-hidden'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={index}
              className='flex justify-center'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <div className='relative w-full p-8 text-gray-100 border shadow-xl bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl'>
                {/* User Info */}
                <div className='flex items-center gap-4'>
                  <Image
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    width={70}
                    height={70}
                    className='object-cover border-2 border-white rounded-full shadow-lg'
                  />
                  <div className='text-left'>
                    <h3 className='text-xl font-semibold text-white'>
                      {testimonials[index].name}
                    </h3>
                    {/* Star Ratings */}
                    <div className='flex gap-1 text-yellow-400'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill={
                            i < Math.floor(testimonials[index].rating)
                              ? 'currentColor'
                              : 'none'
                          }
                          className={
                            i < Math.floor(testimonials[index].rating)
                              ? 'text-yellow-400'
                              : 'text-gray-500'
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Review Text */}
                <p className='mt-4 text-lg italic text-gray-200'>
                  "{testimonials[index].review}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={nextTestimonial}
          className='absolute right-0 p-3 transition rounded-full bg-white/20 hover:bg-white/30'
        >
          <ChevronRight size={32} className='text-white drop-shadow-lg' />
        </button>
      </div>

      {/* Trustpilot Buttons */}
      <div className='flex flex-col justify-center gap-4 mt-8 md:flex-row'>
        <a
          href={TRUSTPILOT_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='relative px-4 py-3 overflow-hidden text-lg font-semibold text-blue-900 transition bg-white rounded-sm hover:bg-gray-100 glossy-btn hover:scale-105'
        >
          View All Reviews
        </a>
        <a
          href={`${TRUSTPILOT_URL}/#write-review`}
          target='_blank'
          rel='noopener noreferrer'
          className='relative px-6 py-3 overflow-hidden text-lg font-semibold text-gray-900 transition bg-yellow-400 rounded-sm hover:bg-yellow-500 glossy-btn hover:scale-105'
        >
          Leave a Review
        </a>
      </div>

      {/* Glossy Button Animation (CSS) */}
      <style jsx>{`
        .glossy-btn {
          position: relative;
          overflow: hidden;
        }
        .glossy-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 100%;
          background: rgba(255, 255, 255, 0.4);
          transform: skewX(-45deg);
          transition: left 0.6s ease-in-out;
        }
        .glossy-btn:hover::before {
          left: 100%;
        }
      `}</style>
    </section>
  )
}
