import React from 'react'

export default function SocialLinks() {
  return (
    <section className='flex flex-row w-full max-w-screen-xl mx-auto rounded-lg shadow-xl shadow-gray-600 bg-stone-200 text-gray-800 border-black'>
      <img
        alt='img'
        src='/Bilal_2018_09_27_UC_300px.jpg'
        className='object-cover object-center max-w-[300px] h-72 dark:bg-gray-500 rounded-l-lg '
      />
      <div className='flex flex-col justify-between px-1 sm:px-6 py-4 gap-y-3'>
        <p className='text-3xl font-semibold '>Bilal Gonen</p>
        <p>
          Web : <a href='https://bilalgonen.com'>https://bilalgonen.com</a>
        </p>
        <a
          href='https://drive.google.com/drive/folders/106QUtzCVyLrC4cnHQTABRk3Y6_QZ-iAv?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
        >
          Resume-PDF
        </a>
        <a
          href='https://github.com/bilalgonen'
          target='_blank'
          rel='noopener noreferrer'
        >
          github
        </a>
        <a
          href='https://www.youtube.com/channel/UCsdvZGMO59NmfT57KPkcy_w'
          target='_blank'
          rel='noopener noreferrer'
        >
          Youtube-channel
        </a>
        <a
          href='https://www.linkedin.com/in/bilalgonen/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Linkedin
        </a>
      </div>
    </section>
  )
}
