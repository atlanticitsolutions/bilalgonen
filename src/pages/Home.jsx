import React from 'react'
import Section from '../components/Section'
import Experience from '../components/Experience'
import Certificates from '../components/Certificates'
import Skills from '../components/Skills'
import Positions from '../components/Positions'
import Education from '../components/Education'
import TeachingExperience from '../components/TeachingExperience'
import Publications from '../components/Publications'
import Advising from '../components/Advising'

export const Home = () => {
  return (
    <main className='flex flex-col p-2 gap-8'>
      <Section title='Advising'>
        <Advising />
      </Section>

      <Section title='Publications'>
        <Publications />
      </Section>

      <Section title='Experience'>
        <Experience />
      </Section>
      <Section title='Certificates'>
        <Certificates />
      </Section>
      <Section title='Skills'>
        <Skills />
      </Section>
      <Section title='Academic Positions'>
        <Positions />
      </Section>
      <Section title='Education'>
        <Education />
      </Section>
      <Section title='Teaching Experience'>
        <TeachingExperience />
      </Section>
    </main>
  )
}
