// App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/AboutMe/About'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'
import { Community } from './components/Community/Community'
// import { Contact } from './components/Contact/Contact'
// import { Experience } from './components/Experience/Experience'

export const App = () => {
  return (
      <div>
        {/* Fixed Navbar */}
        <Navbar/>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Community />
        {/* <Experience /> */}
        {/* <Contact /> */}
      </div>
  )
}
