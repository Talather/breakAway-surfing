'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// 🌊 Countries Data (Flags & Names)
const countries = [
  { name: 'Hawaii', flag: '/flags/hawaii.png' },
  { name: 'Australia', flag: '/flags/australia.png' },
  { name: 'Uk', flag: '/flags/uk.png' },
    { name: 'Brazil', flag: '/flags/brazil.png' },
   { name: 'Morroco', flag: '/flags/morroco.jpg' }
]

export default function DestinationsPage () {
  const router = useRouter()

  return (
    <motion.section
      className='px-6 py-16 text-center text-white bg-blue-700'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
    >
      <h2 className='mt-20 mb-4 text-5xl font-bold text-yellow-300 transition-all duration-300 hover:scale-105'>
        Surfing Destinations 🌍🏄‍♂️
      </h2>
      <p className='max-w-2xl mx-auto text-lg text-gray-300'>
        Explore the best surfing locations worldwide! Click a country to learn
        more.
      </p>

      {/* 🌍 Countries Grid */}
      <div className='grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4'>
        {countries.map((country, index) => (
          <motion.div
            key={index}
            onClick={() =>
              router.push(`/locations/${country.name.toLowerCase()}`)
            }
            className='relative w-64 h-64 mx-auto transition-all transform cursor-pointer group hover:scale-105'
            whileHover={{ scale: 1.1 }}
          >
            {/* Country Card */}
            <div className='absolute inset-0 flex flex-col items-center justify-center w-full h-full transition-all bg-[#FF2800] rounded-xl shadow-full group-hover:bg-blue-800'>
              <Image
                src={country.flag}
                alt={country.name}
                width={100}
                height={100}
                className='mb-4'
              />
              <h3 className='text-2xl font-semibold text-yellow-300'>
                {country.name}
              </h3>
              <p className='mt-2 text-sm text-white'>
                🏄 Best Surfing Spots
              </p>
              <motion.button
                className='px-5 py-2 mt-4 font-semibold text-blue-900 transition-all bg-yellow-300 rounded-full hover:bg-yellow-400'
                whileHover={{ scale: 1.1 }}
              >
                Read More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
