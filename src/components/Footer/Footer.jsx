import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
// import { IoArrowDownCircleOutline } from 'react-icons/io5'

const Footer = ({ handleLight, handleOffLight }) => {
    return (
        <>
            <div className='h-[auto] px-[1rem] md:px-16 relative z-0 mt-[4rem] overflow-hidden'>
                <div className='flex flex-row justify-between w-full md:px-[4rem] '>
                    <div className='opacity-[0.7] text-[#3c5007]'>
                        <p>©2025 ILERA ON POINT<sup>®</sup></p>
                    </div>
                    {/* <div>
                        <IoArrowDownCircleOutline size={'30px'} color='#425152' />
                    </div> */}
                </div>
            </div>
            <div className='relative pt-[3rem] mt-[3rem]'  onMouseEnter={handleLight} onMouseLeave={handleOffLight}>
                <div className='absolute w-full h-full bg-transparent z-40'></div>
                
            </div>

        </>
    )
}

export default Footer