import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Nav/Navbar'

const AboutUs = () => {

    const navigate = useNavigate()
    

  return (

    <>
        <Navbar />
        <section style={{height:"50%", width:"100%"}} className="bg-slate-500 py-6">
            hola
        </section>
        <section style={{height:"50%", width:"100%"}} className="bg-slate-500">
            hola 2
        </section>
        <button onClick={() => navigate(-1)} className='bg-red-400 border'>Regresar</button>
    </>
  )
}

export default AboutUs