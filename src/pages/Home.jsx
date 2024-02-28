import React from 'react'
import Section from '../components/Section'
import Experience from '../components/Experience'

export const Home = () => {
  return (
    <main className='flex flex-col p-2'>
      <Section title='Experience'>
        <Experience />
      </Section>
    </main>
  )
}
