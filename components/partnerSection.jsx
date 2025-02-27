// 'use client'
// import { motion } from 'framer-motion'

// // Flip animation for the coins
// const flipVariants = {
//   initial: { rotateY: 0 },
//   hover: { rotateY: 180, transition: { duration: 0.6 } }
// }

// export default function PartnersSection () {
//   return (
//     <motion.section
//       className='px-6 py-16 text-center bg-blue-600'
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 1.2 } }}
//     >
//       <h2 className='mb-4 text-4xl font-bold text-yellow-300 transition-all duration-300 hover:scale-105'>
//         Our Partners & Teachers
//       </h2>
//       <p className='max-w-2xl mx-auto text-lg text-gray-200'>
//         We collaborate with the world’s best surfers and global organizations to
//         bring top-tier training and surf experiences.
//       </p>

//       {/* 🟡 Partner Coins Grid */}
//       <div className='grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4'>
//         {['Surfline', 'Red Bull Surf', 'Wave Masters', 'OceanX'].map(
//           (partner, index) => (
//             <motion.div
//               key={index}
//               className='relative w-40 h-40 mx-auto cursor-pointer'
//               variants={flipVariants}
//               initial='initial'
//               whileHover='hover'
//             >
//               {/* Front Side of Coin */}
//               <motion.div
//                 className='absolute inset-0 flex items-center justify-center w-full h-full text-xl font-bold text-blue-900 bg-yellow-300 rounded-full shadow-lg'
//                 style={{ backfaceVisibility: 'hidden' }}
//               >
//                 {partner}
//               </motion.div>

//               {/* Back Side of Coin (Flipped Content) */}
//               <motion.div
//                 className='absolute inset-0 flex items-center justify-center w-full h-full text-lg text-white bg-blue-500 rounded-full shadow-lg'
//                 style={{
//                   transform: 'rotateY(180deg)',
//                   backfaceVisibility: 'hidden'
//                 }}
//               >
//                 🏄 {partner} Partner
//               </motion.div>
//             </motion.div>
//           )
//         )}
//       </div>
//     </motion.section>
//   )
// }













'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Flip animation for the coins
const flipVariants = {
  initial: { rotateY: 0 },
  hover: { rotateY: 180, transition: { duration: 0.6 } }
}

// Partner Data (Logos & Names)
const partners = [
  { name: 'Surfline', logo: '/logo/images.jpeg' },
  { name: 'Red Bull Surf', logo: '/logo/red.png' },
  { name: 'Wave Masters', logo: '/logo/images.png' },
  { name: 'OceanX', logo: '/logo/wave.png' }
]

export default function PartnersSection () {
  return (
    <motion.section
      className='px-6 py-16 text-center bg-[#fff]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
    >
      <h2 className='mb-4 text-4xl font-bold text-black transition-all duration-300 hover:scale-105'>
        Our Partners & Teachers
      </h2>
      <p className='max-w-2xl mx-auto text-lg text-gray-800'>
        We collaborate with the world’s best surfers and global organizations to
        bring top-tier training and surf experiences.
      </p>

      {/* 🟡 Partner Coins Grid */}
      <div className='grid grid-cols-3 gap-1 mt-12 md:grid-cols-4 md:gap-3'>
              {partners.map((partner, index) => (
            
                  
                  
          <motion.div
            key={index}
            className='relative w-40 h-40 mx-auto cursor-pointer'
            variants={flipVariants}
            initial='initial'
            whileHover='hover'
          >
            {/* Front Side of Coin (Logo) */}
            <motion.div
              className='absolute inset-0 flex flex-col items-center justify-center w-full h-full text-lg font-bold text-white bg-[#1a9b98] border-2 border-[#1a9b98] rounded-full shadow-lg'
              style={{ backfaceVisibility: 'hidden' }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={60}
                height={60}
                className='mb-2 rounded-full'
              />
              {partner.name}
            </motion.div>

            {/* Back Side of Coin (Text) */}
            <motion.div
              className='absolute inset-0 flex flex-col items-center justify-center w-full h-full text-sm text-white bg-blue-500 border-4 border-blue-400 rounded-full shadow-lg'
              style={{
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden'
              }}
            >
              <p className='text-center'>🏄 Official Partner</p>
              <p className='text-xs opacity-80'>Leading Surf Experts</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
