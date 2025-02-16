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

        <p className='mt-4 text-lg text-blue-50 md:text-xl drop-shadow-md'>
          Ride the waves, embrace the thrill, and experience the ultimate
          freedom on the ocean. Join us today and make unforgettable memories.
        </p>

        {/* Button */}
        <div className='relative mt-6 group'>
  <a
    href='/book-ride'
    className='relative px-6 py-3 overflow-hidden text-lg font-semibold text-black transition duration-300 bg-white rounded-full shadow-lg hover:bg-yellow-400 hover:text-black'
  >
    Book Ride 🌊
    {/* Shiny Effect */}
    {/* <span className='absolute inset-0 transition duration-300 bg-white opacity-10 group-hover:opacity-30'></span> */}
    <span className='absolute w-20 h-40 transition-transform duration-700 rotate-45 bg-white rounded-md -left-16 -top-1 opacity-20 group-hover:translate-x-64'></span>
  </a>
</div>

      </div>
    </section>
  )
}
