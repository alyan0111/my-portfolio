import React from 'react'
import Home from '../home/home'
import About from '../about/about'
import Resume from '../resume/resume'
import Skills from '../skills/skills'
import Services from '../services/services'
import Contact from '../contact/contact'

export default function Main() {
  return (
    <div className='bg-black '>
      <div className='mx-auto sm:mx-3 md:mx-12 lg:mx-16'>
      <Home/>
      <About/>
      <Resume/>
      <Skills/>
      <Services/>
      <Contact/>
      </div>
    </div>
  )
}
