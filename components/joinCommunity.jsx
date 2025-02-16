import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function JoinCommunity () {
  return (
    <section className='py-12 text-center bg-gray-100'>
      <h2 className='mb-6 text-3xl font-bold text-gray-900'>
        Join The Community
      </h2>
      <p className='mb-4 text-gray-600'>
        Follow us on social media and stay updated on upcoming trips!
      </p>

      {/* Social Icons */}
      <div className='flex justify-center gap-6 mt-4'>
        <a
          href='#'
          className='text-3xl text-green-500 transition duration-300 hover:text-green-700'
        >
          <FaWhatsapp />
        </a>
        <a
          href='#'
          className='text-3xl text-blue-500 transition duration-300 hover:text-blue-700'
        >
          <FaFacebook />
        </a>
        <a
          href='#'
          className='text-3xl text-pink-500 transition duration-300 hover:text-pink-700'
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  )
}
