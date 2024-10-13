import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/AboutMe/About'
import { Projects } from './components/Projects/Projects'

export const App = () => {
  return (
    <div>
      <Navbar> </Navbar>
      <Hero> </Hero>
      <About> </About>
      <Projects/>
    </div>
  )
}
