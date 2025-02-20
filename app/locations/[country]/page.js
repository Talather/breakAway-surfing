'use client'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

// 🌊 Country Data
const countryData = {
  hawaii: {
    name: 'Hawaii',
    flag: '/flags/hawaii.png',
    description:
      'Hawaii is a surfer’s paradise with its crystal-clear waters and legendary waves.',
    culture:
      'Hawaiian culture is deeply rooted in traditions, music, and Hula dance.',
    beaches: ['Pipeline Beach', 'Waikiki Beach', 'Sunset Beach'],
    food: ['Poke Bowls', 'Loco Moco', 'Shave Ice'],
    clubs: ['Tiki Surf Club', 'Big Wave Nights']
  },
  australia: {
    name: 'Australia',
    flag: '/flags/australia.png',
    description:
      'Australia is home to some of the world’s best surf beaches, including the Gold Coast.',
    culture:
      'Aussie culture is vibrant with a mix of surf lifestyle and indigenous heritage.',
    beaches: ['Bondi Beach', 'Snapper Rocks', 'Bells Beach'],
    food: ['Vegemite Toast', 'Barramundi', 'Meat Pies'],
    clubs: ['Sydney Surf Lounge', 'Gold Coast Wave Club']
    },
  
  
  uk: {
    name: 'uk',
    flag: '/flags/uk.png',
    description:
      'uk is home to some of the world’s best surf beaches, including the Gold Coast.',
    culture:
      'uk culture is vibrant with a mix of surf lifestyle and indigenous heritage.',
    beaches: ['Bondi Beach', 'Snapper Rocks', 'Bells Beach'],
    food: ['Vegemite Toast', 'Barramundi', 'Meat Pies'],
    clubs: ['Sydney Surf Lounge', 'Gold Coast Wave Club']
  },
  morroco: {
    name: 'Bali',
    flag: '/flags/morroco.jpg',
    description:
      'Bali offers warm waters and world-class surfing in a tropical paradise.',
    culture:
      'Balinese culture is rich with temples, traditions, and spirituality.',
    beaches: ['Uluwatu', 'Padang Padang', 'Canggu'],
    food: ['Nasi Goreng', 'Babi Guling', 'Sate Lilit'],
    clubs: ['Morroco Beach Club', 'Kuta Surf Club']
  },
  brazil: {
    name: 'Brazil',
    flag: '/flags/brazil.png',
    description:
      'Brazil’s coastline has consistent waves and a strong surfing community.',
    culture:
      'Brazilian culture is filled with samba, festivals, and beach vibes.',
    beaches: ['Florianópolis', 'Itacaré', 'Saquarema'],
    food: ['Feijoada', 'Pão de Queijo', 'Açaí Bowls'],
    clubs: ['Rio Surf Club', 'Florianópolis Night Waves']
  }
}

export default function CountryDetailPage () {
  const { country } = useParams()
  const countryInfo = countryData[country] || {}

  return (
    <motion.section
      className='px-6 py-16 mt-20 text-white bg-blue-900'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
    >
      {/* Country Banner */}
      <div
  className="relative flex items-center justify-center h-[60vh] bg-blue-700 rounded-lg shadow-lg"
  style={{ backgroundImage: `url(${countryInfo.flag})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>
        <div className='absolute inset-0 bg-blue-900/20'></div>
        <motion.h1
          className='relative z-10 text-5xl font-bold text-yellow-300'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {countryInfo.name} 🌍
        </motion.h1>
      </div>

      {/* Country Details */}
      <div className='max-w-4xl mx-auto mt-12 text-center'>
        <p className='text-lg text-gray-300'>{countryInfo.description}</p>

        {/* Sections */}
        {['culture', 'beaches', 'food', 'clubs'].map(key => (
          <motion.div
            key={key}
            className='p-6 mt-12 transition-all duration-300 bg-blue-800 rounded-lg shadow-lg hover:bg-blue-700'
            whileHover={{ scale: 1.05 }}
          >
            <h2 className='text-3xl font-bold text-yellow-300 capitalize'>
              {key}
            </h2>
            <ul className='mt-2 text-gray-300'>
              {Array.isArray(countryInfo[key])
                ? countryInfo[key].map((item, index) => (
                    <li key={index}>🏄 {item}</li>
                  ))
                : countryInfo[key]}
            </ul>
          </motion.div>
        ))}

        {/* Back Button */}
        <Link href='/locations'>
          <motion.button
            className='px-6 py-3 mt-12 font-bold text-blue-900 transition-all bg-yellow-300 rounded-full hover:bg-yellow-400'
            whileHover={{ scale: 1.1 }}
          >
            Back to Destinations
          </motion.button>
        </Link>
      </div>
    </motion.section>
  )
}
