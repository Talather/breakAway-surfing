'use client'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const packages = [
  {
    name: 'Basic',
    price: '$49',
    description: 'Perfect for beginners looking to catch their first wave!',
    perks: ['1 Surf Lesson', 'Equipment Rental', 'Access to Surf Club'],
    bg: 'bg-gradient-to-b from-blue-300 to-blue-500'
  },
  {
    name: 'Standard',
    price: '$99',
    description: 'Ideal for those who want to enhance their surfing skills.',
    perks: ['3 Surf Lessons', 'Premium Equipment', 'Group Coaching'],
    bg: 'bg-gradient-to-b from-yellow-400 to-yellow-600'
  },
  {
    name: 'Premium',
    price: '$199',
    description: 'For true surf lovers who want a complete experience!',
    perks: [
      '5 Private Surf Lessons',
      'VIP Equipment & Suit',
      'Professional Coach',
      'Exclusive Beach Access'
    ],
    bg: 'bg-gradient-to-b from-red-500 to-red-700'
  }
]

export default function Packages () {
  return (
    <section className='relative  mt-20 py-16 bg-gray-100 text-center'>
      {/* Background Waves */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/waves.svg')] bg-cover opacity-10"></div>

      <h2 className='text-4xl font-bold text-gray-800 mb-6'>
        🏄‍♂️ Choose Your Surfing Package
      </h2>
      <p className='text-lg text-gray-600 mb-12 max-w-2xl mx-auto'>
        Pick the perfect package for your surfing adventure! Whether you're a
        beginner or a pro, we have something for you.
      </p>

      {/* Package Cards */}
      <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto px-6'>
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            className={`relative ${pkg.bg} text-white p-8 rounded-xl shadow-xl border border-white/20 backdrop-blur-lg overflow-hidden group`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Hover Shine Effect */}
            <span className='absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-30 transition-all duration-500'></span>

            <h3 className='text-3xl font-semibold mb-2'>{pkg.name}</h3>
            <p className='text-lg font-bold'>{pkg.price}</p>
            <p className='text-sm text-white/90 mt-2'>{pkg.description}</p>

            <ul className='mt-6 space-y-2 text-left'>
              {pkg.perks.map((perk, i) => (
                <li key={i} className='flex items-center gap-2 text-white/90'>
                  <CheckCircle className='text-green-200' size={20} />
                  {perk}
                </li>
              ))}
            </ul>

            {/* Book Now Button */}
            <button className='mt-6 w-full py-3 rounded-lg bg-white text-gray-800 font-semibold hover:bg-gray-200 transition-all duration-300'>
              Book Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
