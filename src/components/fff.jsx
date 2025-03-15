import React from 'react'
import { FiSun } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
const Navbar = () => {
  return (
    <header className='z-10 px-[1rem] md:px-16 '>
      <div className='flex flex-row justify-between items-center py-10'>
        <div>
          {/* <img src="/logo.svg" alt="" /> */}
          <h1>Ilera On Point</h1>
        </div>
        {/* <div className='flex flex-row gap-4 '>
          <div className='bg-[#a6a9b033] h-[2rem] w-[2rem] rounded-full p-1 flex justify-center items-center'>
            <FiSun color='white' className='w-[1rem] h-[1rem]' />
          </div>
          <div className='bg-[#a6a9b033] h-[2rem] w-[2rem] rounded-full p-1 flex justify-center items-center'>
            <FiBarChart2 color='white' className='w-[1rem] h-[1rem]' />
          </div>
        </div> */}
        <div className='text-[#3c5007] flex flex-row items-center gap-4'>
          <p className='lowercase mt-[10px]'>
            Menu
          </p>
          <div className='bg-[#3c5007] h-[3rem] w-[3rem] rounded-full p-1 flex justify-center items-center'>
            <img src="/menu.svg" alt="Menu Icon" className='w-[2rem] h-[2rem] mt-1' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar