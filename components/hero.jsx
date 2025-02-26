// // export default function HeroSection () {
// //   return (
// //     <section className='relative flex items-center justify-center text-center '>
// //       {/* Background Image */}

    

// //       <div className="absolute inset-0 bg-center bg-cover brightness-75 "></div>

// //       {/* Content */}
// //       <div className='relative z-10 max-w-3xl px-6 mt-28'>
// //         <h1 className='text-white lg:text-7xl sm:text-5xl font-title md:text-6xl drop-shadow-lg'>
// //           Ready For The Start of a{' '}
// //           <span className='text-yellow-300'>New Adventure?</span>
// //         </h1>

// //         <p className='mt-6 lg:text-2xl sm:text-lg font-body text-blue-50 md:text-xl drop-shadow-md'>
// //           Ride the waves, embrace the thrill, and experience the ultimate
// //           freedom on the ocean. Join us today and make unforgettable memories.
// //         </p>

// //         {/* Button */}




// //        <button className='relative inline-flex items-center justify-center gap-2 py-3 mt-8 overflow-hidden font-medium text-white transition-all duration-300 rounded-full shadow-lg font-montserrat whitespace-nowrap text-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-7 bg-gradient-to-b from-yellow-400 to-yellow-500 group'>
// //     Book Ride
// //   {/* Glossy Overlay */}
// //   <span className='absolute inset-0 transition-all duration-500 opacity-50 bg-white/20 group-hover:opacity-70'></span>
// //   {/* Shine Effect */}
// //   <span className='absolute left-[-150%] top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white to-transparent rotate-12 opacity-30 group-hover:translate-x-[150%] group-hover:opacity-70 transition-all duration-700 ease-in-out'></span>
// // </button>



        

        
// //       </div>
// //     </section>
// //   )
// // }





// export default function HeroSection () {
//   return (
//     <section className='relative flex items-center justify-center text-center min-h-[90vh]'>
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className='absolute top-0 left-0 object-cover w-full h-full'
//       >
//         <source src='/video/video.mp4' type='video/mp4' />
//         Your browser does not support the video tag.
//       </video>

//       {/* Dark Overlay (Optional for Better Readability) */}
//       <div className='absolute inset-0 bg-black bg-opacity-20'></div>

//       {/* Content */}
//       <div className='relative z-10 max-w-3xl px-6 mt-28'>
//         <h1 className='text-white lg:text-7xl sm:text-5xl font-title md:text-6xl drop-shadow-lg'>
//           Ready For The Start of a{' '}
//           <span className='text-yellow-300'>New Adventure?</span>
//         </h1>

//         <p className='mt-6 lg:text-2xl sm:text-xl font-body text-blue-50 md:text-xl drop-shadow-md'>
//           Ride the waves, embrace the thrill, and experience the ultimate
//           freedom on the ocean. Join us today and make unforgettable memories.
//         </p>

//         {/* Button */}
//         <button className='relative inline-flex items-center justify-center gap-2 py-3 mt-8 overflow-hidden font-medium text-white transition-all duration-300 rounded-full shadow-lg font-montserrat whitespace-nowrap text-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-7 bg-gradient-to-b from-yellow-400 to-yellow-500 group'>
//           Book Ride
//           {/* Glossy Overlay */}
//           <span className='absolute inset-0 transition-all duration-500 opacity-50 bg-white/20 group-hover:opacity-70'></span>
//           {/* Shine Effect */}
//           <span className='absolute left-[-150%] top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white to-transparent rotate-12 opacity-30 group-hover:translate-x-[150%] group-hover:opacity-70 transition-all duration-700 ease-in-out'></span>
//         </button>
//       </div>
//     </section>
//   )
// }



























'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  { image: '/lira.jpg', text: 'Experience the Thrill of Surfing' },
  { image: '/beach.jpeg', text: 'Ride the Waves Like Never Before' },
  { image: '/lira.jpg', text: 'Discover Your Surfing Adventure' }
]

export default function HeroSection () {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length)
  const prevSlide = () =>
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)

  return (
    <div className='relative w-full h-screen overflow-hidden'>


      

      {/* Slider */}
      <div
        className='absolute inset-0 transition-all duration-1000 ease-in-out'
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className='absolute inset-0 bg-black/30 backdrop-blur-sm'></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6'>
        <motion.h1
          key={currentSlide}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-6xl font-bold drop-shadow-lg'
        >
          {slides[currentSlide].text}
        </motion.h1>

        <p className='mt-4 text-lg max-w-2xl'>
          Embrace the ocean, master the waves, and unlock the true essence of
          adventure. Book your ride now and start your journey!
        </p>

        <Link href='/packages'>
          <button className='relative px-8 py-3 mt-6 text-lg font-semibold text-black uppercase transition-all duration-300 bg-yellow-500 rounded-sm shadow-lg hover:bg-yellow-600'>
            Book Now
          </button>
        </Link>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className='absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg hover:bg-white/40 transition-all'
      >
        <ChevronLeft size={32} className='text-white' />
      </button>
      <button
        onClick={()=>{console.log("bhrwa")}}
        className='absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg hover:bg-white/40 transition-all'
      >
        <ChevronRight size={32} className='text-white' />
      </button>
    </div>


    
    
   

  )
}
