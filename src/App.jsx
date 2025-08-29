import React, { useEffect, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },[])
  return (
    <div className='min-h-screen bg-[#000209] overflow-x-hidden'>
    {loading
    ? <div className='flex justify-center items-center h-screen'>
        <div className='loader'></div>
      </div>
    : <>
        <Navbar />
        <Home/>
      </>
    }
    </div>
  )
}

export default App
