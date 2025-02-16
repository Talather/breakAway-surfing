export default function UpcomingTrips () {
  return (
    <section className='max-w-6xl px-6 py-16 mx-auto text-center'>
      <h2 className='mb-10 text-4xl font-bold text-gray-900'>
        🌍 Upcoming Trips
      </h2>

      <div className='grid gap-8 md:grid-cols-2'>
        {/* Canary Islands */}
        <div className='p-6 bg-white rounded-lg shadow-lg'>
          <h3 className='text-2xl font-semibold text-blue-600'>
            Canary Islands
          </h3>
          <p className='mt-2 text-gray-700'>
            A breathtaking surfing adventure in the Atlantic.
          </p>
          <div className='mt-4'>
            <img
              src='/canary-islands.jpg'
              alt='Canary Islands'
              className='object-cover w-full h-40 rounded-lg shadow-md'
            />
          </div>
        </div>

        {/* Morocco/Portugal */}
        <div className='p-6 bg-white rounded-lg shadow-lg'>
          <h3 className='text-2xl font-semibold text-green-600'>
            Morocco / Portugal
          </h3>
          <p className='mt-2 text-gray-700'>
            Experience the perfect waves in these iconic surf spots.
          </p>
          <div className='mt-4'>
            <img
              src='/morocco-portugal.jpg'
              alt='Morocco/Portugal'
              className='object-cover w-full h-40 rounded-lg shadow-md'
            />
          </div>
        </div>
      </div>

      {/* View All Packages Button */}
      <div className='mt-8'>
        <a
          href='/packages'
          className='px-6 py-3 text-lg font-semibold text-white transition duration-300 bg-blue-500 rounded-full shadow-md hover:bg-yellow-400'
        >
          View All Packages
        </a>
      </div>
    </section>
  )
}
