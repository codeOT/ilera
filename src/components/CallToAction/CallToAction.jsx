import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import Button from '../Hero/components/Button'
import { MdArrowForwardIos } from 'react-icons/md'

const CallToAction = () => {
    useGSAP(() => {
        gsap.from('.time_h3', {
            backgroundPositionX: '100%',
            transform: 'translateX(-50%)',
            duration: 1,
            scrollTrigger: {
                trigger: '.call_trigger',
                start: 'top 90%',
                end: 'top 20%',
                scrub: 5,

            }
        })
        gsap.from('.roar_h3', {
            backgroundPositionX: '100%',
            transform: 'translateX(10%)',
            duration: 1,
            scrollTrigger: {
                trigger: '.call_trigger',
                start: 'top 90%',
                end: 'top 20%',
                scrub: 5,
            }
        })
        gsap.from('.connect_button', {
            transform: 'translateY(150%)',
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: '.roar_h3',
                start: 'top 90%',
                end: 'top 30%',
                scrub: 2,
            }
        })
        gsap.from('.contact_animation', {
            transform: 'translateY(200%)',
            duration: 1,
            scrollTrigger: {
                trigger: '.connect_button',
                start: 'top 90%',
                end: 'top 30%',
                scrub: 2,
            }
        })
    })
    return (
        <div className='h-[auto] px-[1rem] md:px-16 relative z-0  overflow-hidden'>
            <div className='flex flex-col text-left call_trigger pb-[5rem]'>
                <h3 className='time_h3 mb-[-9rem] md:mb-[-1.8rem] text-[6rem] md:text-[11rem] pt-5 font-normal -tracking-[4px] md:-tracking-[6px] leading-[12rem] text-transparent bg-[linear-gradient(90deg,_#3c5007_50%,_#801100_50%)] bg-clip-text bg-[length:200%_100%]'>Contact</h3>
                <div className='flex flex-row justify-between items-end'>
                    <h3 className='roar_h3 mb-[-9rem] text-[6rem] md:text-[11rem] pt-5 font-normal -tracking-[4px] md:-tracking-[6px] leading-[12rem]  text-transparent bg-[linear-gradient(90deg,_#3c5007_50%,_#801100_50%)] bg-clip-text bg-[length:200%_100%] md:mb-[-2rem]'>Us.</h3>
                   
                </div>
            </div>
            <div className='w-full'>
                <div className='contact_animation flex flex-row items-center text-[#3c5007]'>
                    <div className='w-full h-[1px] bg-[#3c5007]'></div>
                    <MdArrowForwardIos fill='#3c5007' className='ml-[-11px]' />
                </div>
            </div>
            <div className='py-[2rem] text-[#3c5007]  flex  flex-col md:flex-row justify-between gap-[2.5rem] md:gap-0'>
                <div className='contact_animation text-left flex flex-col md:flex-row gap-10'>
                    <div>
                        <span>Email</span>
                        <h4 className='text-[1.5rem]'>hello@ileraonpoint.com</h4>
                    </div>
                    <div>
                        <span>Call</span>
                        <h4 className='text-[1.5rem]'>+234 00 000 0000</h4>
                    </div>
                    <div>
                        <span>Headquarters</span>
                        <h4 className='text-[1.5rem]'>Lagos, Nigeria</h4>
                    </div>
                </div>
            
            </div>
            <div className='w-full '>
                <div className='contact_animation flex flex-row items-center text-[#3c5007]'>
                    <div className='w-full h-[1px] bg-[#3c5007]'></div>
                    <MdArrowForwardIos fill='#3c5007' className='ml-[-11px]' />
                </div>
            </div>
        </div>
    )
}

export default CallToAction