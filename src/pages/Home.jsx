import React from 'react'
import Section from '../components/Section'
import Experience from '../components/Experience'
import Certificates from '../components/Certificates'
import Skills from '../components/Skills'
import Positions from '../components/Positions'
import Education from '../components/Education'
import TeachingExperience from '../components/TeachingExperience'
import Awards from '../components/Awards'
import SocialLinks from '../components/SocialLinks'
import AdvisingHome from '../components/AdvisingHome'

export const Home = () => {
  return (
    <main className='flex flex-col px-2 sm:px-4 py-8 sm:py-8 gap-16 sm:gap-16'>
      <SocialLinks />

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
      <Section title='Advising'>
        <AdvisingHome />
      </Section>
      <Section title='Awards'>
        <Awards />
      </Section>
    </main>
  )
}
