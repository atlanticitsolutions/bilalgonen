import React from 'react'

export default function Rent() {
  return (
    <main className='max-w-screen-xl mx-auto flex flex-col px-2 sm:px-4 py-8 space-y-8'>
      <h1 className='text-3xl sm:text-4xl font-bold text-center'>
        Rooms for Rent
      </h1>

      <section className='flex flex-col lg:flex-row mx-auto gap-4'>
        <div className='border border-gray-600'>
          <img src='/rent/roomsForRent_floor-1.png' />
        </div>
        <div className='border border-gray-600'>
          <img src='/rent/roomsForRent_floor-2.png' />
        </div>
      </section>
      <section>
        <h1 className='text-xl sm:text-2xl font-bold py-2'>Floor-1</h1>
        <p> $1100: 1-bedroom with private bathroom.</p>
      </section>
      <section>
        <div className='text-xl sm:text-2xl font-bold py-2'>Floor-2</div>
        <ul className='list-disc ps-4 space-y-4'>
          <li>
            <p>$800: 1-bedroom with shared bathroom (with next room).</p>
            <p>Room name: Bedroom-4</p>
          </li>
          <li>
            <p>$850: 1-bedroom with shared bathroom (with next room).</p>
            <p>Room name: Bedroom-3</p>
          </li>
          <li>
            <p>$1000: 1-bedroom with private bathroom.</p>
            <p>Room name: Bedroom-2</p>
          </li>
        </ul>
      </section>
      <section>
        <h1 className='text-xl sm:text-2xl font-bold py-2'>Utilities</h1>
        <p>
          $120: Flat-rate for utilities. (Utilities include gas, electric,
          water, wi-fi internet, trash, pest control, lawn care)
        </p>
      </section>
      <section>
        <h1 className='text-xl sm:text-2xl font-bold py-2'>Furnitures</h1>
        <ul className='list-disc ps-4 space-y-4'>
          <li>
            All 3 bedrooms on floor-2 have full-size bed with mattress (53"x75")
          </li>
          <li>Floor-1 bedroom has a queen-size bed with mattress (60"x80")</li>
          <li>All 3 bedrooms on floor-2 have desk and office chair.</li>
        </ul>
      </section>
      <section>
        <h1 className='text-xl sm:text-2xl font-bold py-2'>Address</h1>
        <a
          href='https://maps.app.goo.gl/okEfgqWhgnPHu1zm8'
          target='_blank'
          rel='noopener noreferrer'
        >
          6110 Haystack Ct, Cumming, GA 30040
        </a>{' '}
        <iframe
          src='https://www.google.com/maps/embed?pb=!4v1714920018914!6m8!1m7!1snbzridj1Ge_EF1FxbqT95w!2m2!1d34.19635018044933!2d-84.24353266125237!3f342.8838933784295!4f3.7731303977644757!5f1.432882216987343'
          width='100%'
          height='600'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </section>
    </main>
  )
}
