import React from 'react'

const Navbar = () => {
  return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white'>
            <h1 className='w-full text-3xl font-bold text-[#aac5bd]'>LOGO</h1>
            <ul>
                <li className=''>Inicio</li>
                <li className=''>Conócenos</li>
                <li className=''>Servicios</li>
                <li className=''>Enlaces</li>
                <li className=''>Contáctenos</li>
            </ul>
        </div>
  )
}

export default Navbar

