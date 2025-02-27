// 'use client'
// import { motion } from 'framer-motion'
// import Image from 'next/image'

// // 🌊 Water Wave Animation Variant
// const waveVariants = {
//   initial: { opacity: 0, y: 50 },
//   animate: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
// }

// // 💦 Fade-In Effect
// const fadeIn = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } }
// }

// export default function AboutUs () {
//   return (
//     <div className='overflow-hidden text-white bg-blue-900'>
//       {/* 🌊 Hero Section */}
//       <section className="relative flex items-center justify-center h-[100vh] bg-[url('/kapa.jpg')] bg-cover bg-center">
//         <div className='absolute inset-0 bg-blue-800/20 backdrop-blur-sm'></div>
//         <motion.h1
//           className='relative z-10 text-6xl font-bold text-yellow-300'
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           About BreakAway Surfing 🏄‍♂️
//         </motion.h1>
//       </section>

//       {/* 🏄‍♂️ Who We Are Section */}
//       <motion.section
//         className='container px-6 mx-auto text-center py-36'
//         variants={waveVariants}
//         initial='initial'
//         animate='animate'
//       >
//         <h2 className='mb-4 text-4xl font-bold text-yellow-300'>Who We Are</h2>
//         <p className='max-w-2xl mx-auto text-lg text-gray-200'>
//           We are a passionate community of surfers, adventurers, and ocean
//           lovers. Founded by pro surfers, our goal is to teach, inspire, and
//           bring people together through the love of surfing.
//         </p>
//         <div className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-3'>
//           {/* Team Member Cards */}
//           {['John Doe', 'Sarah Waves', 'Jake Tides'].map((name, index) => (
//             <motion.div
//               key={index}
//               className='p-6 transition-all duration-300 shadow-lg bg-blue-800/80 rounded-xl hover:scale-105'
//               whileHover={{ scale: 1.1 }}
//             >
//                   <Image
//                       style={{borderRadius:'200px'}}
//                 src='/client.webp'
//                 alt={name}
//                 width={100}
//                 height={100}
//                 className='mx-auto rounded-full'
//               />
//               <h3 className='mt-4 text-xl font-semibold text-yellow-300'>
//                 {name}
//               </h3>
//               <p className='text-gray-300'>Professional Surf Coach</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* 🌟 Why Join Us */}
//       <motion.section
//         className='px-6 py-16 text-center text-blue-900 bg-yellow-300'
//         variants={fadeIn}
//         initial='initial'
//         animate='animate'
//       >
//         <h2 className='mb-4 text-4xl font-bold'>Why Join Us?</h2>
//         <p className='max-w-2xl mx-auto text-lg'>
//           Our surfing community provides access to expert coaching, surfing
//           camps, and global surf experiences.
//         </p>
//         <div className='flex flex-wrap justify-center gap-6 mt-8'>
//           {['🏄 Expert Trainers', '🌊 Best Surf Spots', '🏆 Competitions'].map(
//             (benefit, index) => (
//               <motion.div
//                 key={index}
//                 className='px-6 py-3 text-blue-900 transition-all bg-white rounded-lg shadow-md hover:bg-blue-500 hover:text-white'
//                 whileHover={{ scale: 1.1 }}
//               >
//                 {benefit}
//               </motion.div>
//             )
//           )}
//         </div>
//       </motion.section>

//       {/* 🤝 Community Section */}
//       <motion.section
//         className='container px-6 py-16 mx-auto text-center'
//         variants={waveVariants}
//         initial='initial'
//         animate='animate'
//       >
//         <h2 className='mb-4 text-4xl font-bold text-yellow-300'>
//           Our Community
//         </h2>
//         <p className='max-w-2xl mx-auto text-lg text-gray-200'>
//           Join our family of surfers, students, and ocean lovers who share a
//           passion for riding waves and making memories.
//         </p>
//       </motion.section>

//       {/* 🌍 Our Partnerships & Teachers */}
//       <motion.section
//         className='px-6 py-16 text-center bg-blue-800'
//         variants={fadeIn}
//         initial='initial'
//         animate='animate'
//       >
//         <h2 className='mb-4 text-4xl font-bold text-yellow-300'>
//           Our Partners & Teachers
//         </h2>
//         <p className='max-w-2xl mx-auto text-lg text-gray-200'>
//           We collaborate with the world’s best surfers and global organizations
//           to bring top-tier training and surf experiences.
//         </p>
//         <div className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4'>
//           {['Surfline', 'Red Bull Surf', 'Wave Masters', 'OceanX'].map(
//             (partner, index) => (
//               <motion.div
//                 key={index}
//                 className='px-6 py-3 text-blue-900 transition-all bg-yellow-300 rounded-lg shadow-md hover:bg-blue-500 hover:text-white'
//                 whileHover={{ scale: 1.1 }}
//               >
//                 {partner}
//               </motion.div>
//             )
//           )}
//         </div>
//       </motion.section>

//       {/* 🌊 Footer */}
//       <footer className='py-8 text-center bg-blue-900'>
//         <p className='text-gray-300'>
//           © 2024 BreakAway Surfing. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   )
// }




'use client'
import PartnersSection from '@/components/partnerSection'
import WhoWeAre from '@/components/whoweare'
import { motion } from 'framer-motion'
import Image from 'next/image'

// 🌊 Water Wave Animation Variant
const waveVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
}

// 💦 Fade-In Effect
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } }
}

// ✨ Floating Effect for Surf Elements
const floatEffect = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
  }
}

export default function AboutUs () {
  return (
    <div className='overflow-hidden text-white bg-blue-900'>
      {/* 🌊 Hero Section with Wave Effect */}
      <section className="relative flex items-center justify-center h-[100vh] bg-[url('/beautiful.jpg')] bg-cover bg-center">
        <div className='absolute inset-0 bg-black/20 '></div>
        <motion.h1
          className='relative z-10 font-bold text-transparent sm:text-5xl md:text-7xl bg-gradient-to-r text-white'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About BreakAway Surfing 
        </motion.h1>
      </section>

      {/* 🏄‍♂️ Who We Are Section */}
      <div className='h-[100vh] bg-[#1ea19f]'>
     <WhoWeAre /></div>

      {/* 🌟 Why Join Us Section with Floating Icons */}
      <motion.section
        className='px-6 py-16 text-center text-blue-900 bg-white'
        variants={fadeIn}
        initial='initial'
        animate='animate'
      >
        <h2 className='mb-4 text-4xl font-bold transition-all duration-300 hover:scale-105'>
          Why Join Us?
        </h2>
        <p className='max-w-2xl mx-auto text-lg'>
          Our surfing community provides access to expert coaching, surfing
          camps, and global surf experiences.
        </p>
        <div className='flex flex-wrap justify-center gap-6 mt-8'>
          {['🏄 Expert Trainers', '🌊 Best Surf Spots', '🏆 Competitions'].map(
            (benefit, index) => (
              <motion.div
                key={index}
                className='px-6 py-3 text-blue-900 transition-all bg-[#D7D7D8] rounded-lg shadow-md hover:bg-blue-500 hover:text-white'
                variants={floatEffect}
                initial='initial'
                animate='animate'
              >
                {benefit}
              </motion.div>
            )
          )}
        </div>
      </motion.section>

      {/* 🤝 Community Section with Background Water Effect */}
      <motion.section
        className='container px-6 py-16 mx-auto text-center relative bg-[url("/lira.jpg")] bg-[#82CEFF] bg-opacity-30'
        variants={waveVariants}
        initial='initial'
        animate='animate'
      >
        <h2 className='mb-4 text-4xl font-bold text-yellow-300 transition-all duration-300  hover:scale-105'>
          Our Community
        </h2>
        <p className='max-w-2xl mx-auto text-lg text-gray-200'>
          Join our family of surfers, students, and ocean lovers who share a
          passion for riding waves and making memories.
        </p>
      </motion.section>

      {/* 🌍 Our Partnerships & Teachers */}
      {/* <motion.section
        className='px-6 py-16 text-center bg-blue-800'
        variants={fadeIn}
        initial='initial'
        animate='animate'
      >
        <h2 className='mb-4 text-4xl font-bold text-yellow-300 transition-all duration-300 hover:scale-105'>
          Our Partners & Teachers
        </h2>
        <p className='max-w-2xl mx-auto text-lg text-gray-200'>
          We collaborate with the world’s best surfers and global organizations
          to bring top-tier training and surf experiences.
        </p>
        <div className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4'>
          {['Surfline', 'Red Bull Surf', 'Wave Masters', 'OceanX'].map(
            (partner, index) => (
              <motion.div
                key={index}
                className='px-6 py-3 text-blue-900 transition-all bg-yellow-300 rounded-lg shadow-md hover:bg-blue-500 hover:text-white'
                whileHover={{ scale: 1.1 }}
              >
                {partner}
              </motion.div>
            )
          )}
        </div>
      </motion.section> */}
          <PartnersSection />

      {/* 🌊 Footer */}
      
    </div>
  )
}
