
// 'use client'
// import { motion } from 'framer-motion'
// import Image from 'next/image'

// // Flip animation for the coins
// const flipVariants = {
//   initial: { rotateY: 0 },
//   hover: { rotateY: 180, transition: { duration: 0.6 } }
// }

// // Partner Data (Logos & Names)
// const partners = [
//   { name: 'Calima Surf School', logo: '/logo/logo.png' },
//   // { name: 'Red Bull Surf', logo: '/logo/red.png' },
//   // { name: 'Wave Masters', logo: '/logo/images.png' },
//   // { name: 'OceanX', logo: '/logo/wave.png' }
// ]

// export default function PartnersSection () {
//   return (
//     <motion.section
//       className='px-6 py-16 text-center bg-[#fff]'
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 1.2 } }}
//     >
//       <h2 className='mb-4 text-4xl font-bold text-black transition-all duration-300 hover:scale-105'>
//         Our Partners & Teachers
//       </h2>
//       <p className='max-w-2xl mx-auto text-lg text-gray-800'>
//         We collaborate with the world’s best surfers and global organizations to
//         bring top-tier training and surf experiences.
//       </p>

//       {/* 🟡 Partner Coins Grid */}
//       <div className='grid grid-cols-3 gap-1 mt-12 md:grid-cols-4 md:gap-3'>
//               {partners.map((partner, index) => (
            
                  
                  
//           <motion.div
//             key={index}
//             className='relative w-40 h-40 mx-auto cursor-pointer'
//             variants={flipVariants}
//             initial='initial'
//             whileHover='hover'
//           >
//             {/* Front Side of Coin (Logo) */}
//             <motion.div
//               className='absolute inset-0 flex flex-col items-center justify-center w-full h-full text-lg font-bold text-white bg-[#1a9b98] border-2 border-[#1a9b98] rounded-full shadow-lg'
//               style={{ backfaceVisibility: 'hidden' }}
//             >
//               <Image
//                 src={partner.logo}
//                 alt={partner.name}
//                 width={60}
//                 height={60}
//                 className='mb-2 rounded-full'
//               />
//               {partner.name}
//             </motion.div>

//             {/* Back Side of Coin (Text) */}
//             <motion.div
//               className='absolute inset-0 flex flex-col items-center justify-center w-full h-full text-sm text-white bg-blue-500 border-4 border-blue-400 rounded-full shadow-lg'
//               style={{
//                 transform: 'rotateY(180deg)',
//                 backfaceVisibility: 'hidden'
//               }}
//             >
//               <p className='text-center'>🏄 Official Partner</p>
//               <p className='text-xs opacity-80'>Leading Surf Experts</p>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   )
// }





'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Animation Variants
const flipVariants = {
  initial: { rotateY: 0 },
  hover: { rotateY: 180, transition: { duration: 0.8 } }
}

// Partner Data
const partner = {
  name: 'Calima Surf School',
  logo: '/logo/wave.png',
  description:
    'Based In Canary Island,Spain'
}

export default function PartnerShowcase () {
  return (
    <motion.section
      className='px-6 py-20 text-center bg-gradient-to-r from-blue-100 to-white rounded-lg shadow-xl'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
    >
      <h2 className='mb-4 text-4xl font-bold text-black transition-all duration-300 hover:scale-105'>
        Our Trusted Partner
      </h2>
      <p className='max-w-2xl mx-auto text-lg text-gray-800'>
        We collaborate with {partner.name} to bring world-class surf
        training and experiences to our community.
      </p>

      {/* Partner Circle */}
      <div className='mt-10 flex justify-center'>
        <motion.div
          className='relative w-80 h-80 cursor-pointer'
          variants={flipVariants}
          initial='initial'
          whileHover='hover'
        >
          {/* Front Side (Logo & Name) */}
          <motion.div
            className='absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-[#1a9b98] text-white border-4 border-white rounded-full shadow-2xl'
            style={{ backfaceVisibility: 'hidden' }}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={100}
              height={100}
              className='mb-4 rounded-full shadow-md'
            />
            <h3 className='text-2xl font-semibold'>{partner.name}</h3>
            <p className='px-6 text-center text-sm font-medium'>{partner.description}</p>

          </motion.div>

          {/* Back Side (Description)
          <motion.div
            className='absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-blue-500 text-white border-4 border-white rounded-full shadow-2xl'
            style={{
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden'
            }}
          >
            <p className='px-6 text-center text-lg font-medium'>
              {partner.description}
            </p>
          </motion.div> */}
        </motion.div>
      </div>
    </motion.section>
  )
}
