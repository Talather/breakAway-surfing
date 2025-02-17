export default function HeroSection () {
  return (
    <section className='relative flex items-center justify-center text-center '>
      {/* Background Image */}
      <div className="absolute inset-0  bg-cover bg-center brightness-75"></div>

      {/* Content */}
      <div className='relative z-10 max-w-3xl px-6 mt-28'>
        <h1 className='text-5xl font-bold text-white md:text-6xl drop-shadow-lg'>
          Ready For The Start of a{' '}
          <span className='text-yellow-300'>New Adventure?</span>
        </h1>

        <p className='mt-4 text-lg text-blue-50 md:text-xl drop-shadow-md'>
          Ride the waves, embrace the thrill, and experience the ultimate
          freedom on the ocean. Join us today and make unforgettable memories.
        </p>

        {/* Button */}




       <button className='relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full mt-6 text-md font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-7 py-3 bg-gradient-to-b from-yellow-400 to-yellow-500 text-white shadow-lg overflow-hidden group'>
    Book Ride 🌊
  {/* Glossy Overlay */}
  <span className='absolute inset-0 bg-white/20 opacity-50 group-hover:opacity-70 transition-all duration-500'></span>
  {/* Shine Effect */}
  <span className='absolute left-[-150%] top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white to-transparent rotate-12 opacity-30 group-hover:translate-x-[150%] group-hover:opacity-70 transition-all duration-700 ease-in-out'></span>
</button>



        

        
      </div>
    </section>
  )
}
