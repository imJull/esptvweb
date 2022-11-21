import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Nav/Navbar'

const Home = () => {

  const navigate = useNavigate()

  const handleClick = () =>{
    navigate("/about")
  }

  return (
    <>
        <Navbar />
        <button onClick={handleClick} className='border bg-slate-400'>Ir a about</button>
    </>
    
  )
}

export default Home