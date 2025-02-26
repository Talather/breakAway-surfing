// export default function HeroSection () {
//   return (
//     <section className='relative flex items-center justify-center text-center '>
//       {/* Background Image */}

    

//       <div className="absolute inset-0 bg-center bg-cover brightness-75 "></div>

//       {/* Content */}
//       <div className='relative z-10 max-w-3xl px-6 mt-28'>
//         <h1 className='text-white lg:text-7xl sm:text-5xl font-title md:text-6xl drop-shadow-lg'>
//           Ready For The Start of a{' '}
//           <span className='text-yellow-300'>New Adventure?</span>
//         </h1>

//         <p className='mt-6 lg:text-2xl sm:text-lg font-body text-blue-50 md:text-xl drop-shadow-md'>
//           Ride the waves, embrace the thrill, and experience the ultimate
//           freedom on the ocean. Join us today and make unforgettable memories.
//         </p>

//         {/* Button */}




//        <button className='relative inline-flex items-center justify-center gap-2 py-3 mt-8 overflow-hidden font-medium text-white transition-all duration-300 rounded-full shadow-lg font-montserrat whitespace-nowrap text-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-7 bg-gradient-to-b from-yellow-400 to-yellow-500 group'>
//     Book Ride
//   {/* Glossy Overlay */}
//   <span className='absolute inset-0 transition-all duration-500 opacity-50 bg-white/20 group-hover:opacity-70'></span>
//   {/* Shine Effect */}
//   <span className='absolute left-[-150%] top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white to-transparent rotate-12 opacity-30 group-hover:translate-x-[150%] group-hover:opacity-70 transition-all duration-700 ease-in-out'></span>
// </button>



        

        
//       </div>
//     </section>
//   )
// }





export default function HeroSection () {
  return (
    <section className='relative flex items-center justify-center text-center min-h-[90vh]'>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 object-cover w-full h-full'
      >
        <source src='/video/video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay (Optional for Better Readability) */}
      <div className='absolute inset-0 bg-black bg-opacity-20'></div>

      {/* Content */}
      <div className='relative z-10 max-w-3xl px-6 mt-28'>
        <h1 className='text-white lg:text-7xl sm:text-5xl font-title md:text-6xl drop-shadow-lg'>
          Ready For The Start of a{' '}
          <span className='text-yellow-300'>New Adventure?</span>
        </h1>

        <p className='mt-6 lg:text-2xl sm:text-xl font-body text-blue-50 md:text-xl drop-shadow-md'>
          Ride the waves, embrace the thrill, and experience the ultimate
          freedom on the ocean. Join us today and make unforgettable memories.
        </p>

        {/* Button */}
        <button className='relative inline-flex items-center justify-center gap-2 py-3 mt-8 overflow-hidden font-medium text-white transition-all duration-300 rounded-full shadow-lg font-montserrat whitespace-nowrap text-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-7 bg-gradient-to-b from-yellow-400 to-yellow-500 group'>
          Book Ride
          {/* Glossy Overlay */}
          <span className='absolute inset-0 transition-all duration-500 opacity-50 bg-white/20 group-hover:opacity-70'></span>
          {/* Shine Effect */}
          <span className='absolute left-[-150%] top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white to-transparent rotate-12 opacity-30 group-hover:translate-x-[150%] group-hover:opacity-70 transition-all duration-700 ease-in-out'></span>
        </button>
      </div>
    </section>
  )
}
