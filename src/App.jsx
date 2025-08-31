import React, { useEffect, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Education from './components/Education'
import About from './components/About'
import Skill from './components/Skill'
import Projects from './components/Projects'

const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },[])
  return (
    <div className='min-h-screen bg-[#000209] overflow-x-hidden font-["Sour_Gummy"]'>
    {loading
    ? <div className='flex justify-center items-center h-screen'>
        <div className='loader'></div>
      </div>
    : <>
        <Navbar/>
        <Home/>
        <About/>
        <Education/>
        <Skill/>
        <Projects/>
      </>
    }
    </div>
  )
}

export default App
