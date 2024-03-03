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
import Awards from '../components/Awards'
import ProfessionalActivities from '../components/ProfessionalActivities'
import ServiceUniversity from '../components/ServiceUniversity'
import ServiceDepartment from '../components/ServiceDepartment'
import ServiceCommunity from '../components/ServiceCommunity'
import SocialLinks from '../components/SocialLinks'

export const AcademicCV = () => {
  return (
    <main className='flex flex-col px-2 sm:px-4 py-2 sm:py-8 gap-8 sm:gap-16'>
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
        <Advising />
      </Section>
      <Section title='Awards'>
        <Awards />
      </Section>
      <Section title='Service to University'>
        <ServiceUniversity />
      </Section>
      <Section title='Service to Department'>
        <ServiceDepartment />
      </Section>
      <Section title='Service to Community'>
        <ServiceCommunity />
      </Section>
      <Section title='Professional Activities'>
        <ProfessionalActivities />
      </Section>
      <Section title='Publications'>
        <Publications />
      </Section>
    </main>
  )
}
