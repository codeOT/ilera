import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import Slide from './components/Slide'

const Partner = () => {

    useGSAP(() => {
        gsap.from('.partner_h3', {
            backgroundPositionX: '100%',
            duration: 1,
            scrollTrigger: {
                trigger: '.partner_trigger',
                start: 'top 50%',
                end: 'top 0%',
                scrub: 5,
            }
        })
        gsap.from('.love_h3', {
            backgroundPositionX: '100%',
            transform: 'translateX(20%)',
            duration: 1,
            scrollTrigger: {
                trigger: '.partner_trigger',
                start: 'top 50%',
                end: 'top 0%',
                scrub: 5,
            }
        })
        gsap.from('.para_partner span', {
            transform: 'translateY(50%)',
            duration: 0.4,
            opacity: 0,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.partner_trigger',
                start: 'top 30%',
                end: 'top 0%',
                scrub: 5,
            }
        })
    })
    return (
        <div>
             <Slide />
        </div>
    )
}

export default Partner