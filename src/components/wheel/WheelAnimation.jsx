import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const WheelAnimation = ({ handleBlurDiv, handleBlurDivLeave }) => {

    useGSAP(() => {


        // gsap.to('.marque_2', {
        //     transform: 'translateX(-100%)', // Moves towards the center
        //     duration: 8,
        //     repeat: -1,
        //     ease: 'none'
        // });
        gsap.to('.marque', {
            transform: 'translateX(-200%)',
            duration: 8,
            repeat: -1,
            ease: 'none'
        })

        gsap.from('.marque_2', {
            transform: 'translateX(-100%)',
            duration: 8,
            repeat: -1,
            ease: 'none'
        })

        // window.document.addEventListener('wheel', (dets) => {
        //     if (dets.deltaY > 0) {


        //     }
        //     else {
        //         gsap.to('.marque', {
        //             transform: 'translateX(0%)',
        //             duration: 8,
        //             repeat: -1,
        //             ease: 'none'
        //         })
        //         gsap.to('.marque_2', {
        //             transform: 'translateX(-200%)',
        //             duration: 8,
        //             repeat: -1,
        //             ease: 'none'
        //         })
        //     }
        // })
    })
    return (
        // onMouseLeave={handleBlurDivLeave} onMouseEnter={handleBlurDiv}
        <div className='relative' onMouseLeave={handleBlurDivLeave} onMouseEnter={handleBlurDiv}>
            <div className='absolute w-full h-full bg-transparent z-40'></div>
            <div>
                <div className='move text-[6rem] md:text-[11rem] flex flex-row overflow-hidden text-white mb-[-4.4rem] md:mb-[-7.5rem]'>
                    <div className='marque flex flex-row items-center flex-shrink-0 gap-2 px-2 transform -translate-x-[100%]'>
                        <h1>Ilera On Point</h1>
                        <h1>—</h1>
                    </div>
                    <div className='marque flex flex-row items-center flex-shrink-0 gap-2 px-2 transform -translate-x-[100%]'>
                    <h1>Ilera On Point</h1>
                        <h1>—</h1>
                    </div>
                    <div className='marque flex flex-row items-center flex-shrink-0 gap-2  px-2 transform -translate-x-[100%]'>
                    <h1>Ilera On Point</h1>
                        <h1>—</h1>
                    </div>
                    <div className='marque flex flex-row items-center flex-shrink-0 gap-2  px-2 transform -translate-x-[100%]'>
                    <h1>Ilera On Point</h1>
                        <h1>—</h1>
                    </div>
                    <div className='marque flex flex-row items-center flex-shrink-0 gap-2  px-2 transform -translate-x-[100%]'>
                    <h1>Ilera On Point</h1>
                        <h1>—</h1>
                    </div>
                </div>
                <div className='move text-[6rem] md:text-[11rem] flex flex-row overflow-hidden text-white'>
                    <div className='marque_2 flex flex-row items-center flex-shrink-0 gap-2 px-2'>
                    <h1>Ilera On Point</h1>
                        <h1>—</h1>
                    </div>
                    <div className='marque_2 flex flex-row items-center flex-shrink-0 gap-2 px-2'>
                    <h1>Ilera On Point</h1>
                        <h1>—</h1>
                    </div>
                    <div className='marque_2 flex flex-row items-center flex-shrink-0 gap-2 px-2'>
                    <h1>Ilera On Point</h1>
                        <h1>—</h1>
                    </div>
                    <div className='marque_2 flex flex-row items-center flex-shrink-0 gap-2 px-2'>
                    <h1>Ilera On Point</h1>
                        <h1>—</h1>
                    </div>
                    <div className='marque_2 flex flex-row items-center flex-shrink-0 gap-2 px-2'>
                    <h1>Ilera On Point</h1>
                        <h1>—</h1>
                    </div>
                    <div className='marque_2 flex flex-row items-center flex-shrink-0 gap-2 px-2'>
                    <h1>Ilera On Point</h1>
                        <h1>—</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WheelAnimation