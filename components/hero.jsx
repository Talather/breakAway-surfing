export default function HeroSection () {
  return (
    <section className='relative flex items-center justify-center text-center mt-28'>
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/surfing-bg.jpg')] bg-cover bg-center brightness-75"></div>

      {/* Content */}
      <div className='relative z-10 max-w-3xl px-6'>
        <h1 className='text-5xl font-bold text-white md:text-6xl drop-shadow-lg'>
          Ready For The Start of a{' '}
          <span className='text-yellow-300'>New Adventure?</span>
        </h1>

        <p className='mt-4 text-lg text-textColor md:text-xl drop-shadow-md'>
          Ride the waves, embrace the thrill, and experience the ultimate
          freedom on the ocean. Join us today and make unforgettable memories.
        </p>

        {/* Button */}
        <div className='mt-6'>
          <a
            href='/book-ride'
            className='px-6 py-3 text-lg font-semibold text-white transition duration-300 bg-blue-500 rounded-full shadow-lg hover:bg-yellow-400'
          >
            Book Ride 🌊
          </a>
        </div>
      </div>
    </section>
  )
}
