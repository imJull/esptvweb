import React from 'react'

const Navbar = () => {
  return (
        <div className='flex justify-between items-center h-24 w-full mx-auto text-white bg-slate-600 px-4'>
            <h1 className='w-full text-3xl font-bold text-[#aac5bd]'>EL LOGO</h1>
            <ul className='flex justify-between items-center'>
                <li className='p-4'>Inicio</li>
                <li className='p-4'>Conócenos</li>
                <li className='p-4'>Servicios</li>
                <li className='p-4'>Enlaces</li>
                <li className='p-4'>Contáctenos</li>
            </ul>
        </div>
  )
}

export default Navbar

