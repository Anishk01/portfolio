import React from 'react'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

const App = () => {
  return (
    <>
      <div className='bg-white dark:bg-black text-black dark:text-white transition-all duration-300'>

        <Navbar />

        {/* 👇 yaha padding-top add kiya */}
        <div className=' min-h-screen w-full bg-white dark:bg-black'>
          <Hero />
        </div>
        <About/>
        <Skills />
        <Projects />
        <Contact/>
        <Footer/>
      </div>
    </>
  )
} 

export default App