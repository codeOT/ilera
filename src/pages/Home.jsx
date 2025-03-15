
import Hero from '../components/Hero/Hero'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import Navbar from '../components/Navbar'
import { ScrollTrigger } from 'gsap/all'
import Button from '../components/Hero/components/Button'
import Works from '../components/Work/Works'
import Whoweare from '../components/Who_We_Are/Whoweare'
// import Achieved from '../components/Achieved/Achieved'
import Partner from '../components/Partner/Partner'
import WheelAnimation from '../components/wheel/WheelAnimation'
// import DribbleSection from '../components/Dribble/DribbleSection'
import Social from '../components/Social/Social'
import CallToAction from '../components/CallToAction/CallToAction'
import Footer from '../components/Footer/Footer'

const Home = () => {
    
  gsap.registerPlugin(ScrollTrigger)

  const handleCursor = (dets) => {
    gsap.to('#cursor', {
      x: dets.pageX, // Adjust to keep the custom cursor centered
      y: dets.pageY, // Adjust to keep the custom cursor centered
    });
  };

  useGSAP(() => {
    gsap.to('#coverDiv', {
      y: '-150%',
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      display: 'none'
    })

    gsap.to(['video', '#videoDiv'], {
      transform: 'translateY(2%)',
      scale: 1,
      duration: 0.5,
      delay: 0.5,
      ease: 'power4.inOut',
      scrollTrigger: {
        scroller: 'body',
        trigger: '.main_section',
        start: 'top 100%',
        end: 'top 0%',
        scrub: 2
      }
    }, 'g')
    gsap.fromTo('#videoDeskstop', {
      borderRadius: '100rem',
    },
      {
        borderRadius: '1.5rem',
        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          scroller: 'body',
          trigger: '.main_section',
          start: 'top 100%',
          end: 'top 0%',
          scrub: 2
        }
      }, 'g')
    gsap.from('#LionSvg', {
      opacity: 0,
      x: '40%',
      duration: 1,
      y: '-130%',
      scrollTrigger: {
        trigger: '.h3_Trigger',
        start: 'top 80%',
        scroller: 'body',
        end: 'bottom 100%',
        endTrigger: '.lion_end',
        scrub: 2,
      }
    })
    gsap.from('.about_us', {
      opacity: 0,
      transform: 'translateY(40%)',
      duration: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.about_animation_trigger',
        start: 'top 90%',
        end: 'top 40%',
        scrub: 1
      }
    })
  })

  const handleBlurDiv = () => {
    gsap.to('#cursor', {
      scale:15,
      transform: 'translate(-50% ,-50%)',
      duration: 0.3,
      filter: 'blur(10px)',
      zIndex:0
    })
  }
  const handleBlurDivLeave = () => {
    gsap.to('#cursor', {
      scale:1,
      duration: 0.2,
      filter: 'blur(0px)',
      zIndex:20
    })
  }

  const handleLight = ()=>{
    gsap.to('#cursor',{
      background:'',
      borderRadius:'0px',
      width:'73px',
      height:'70px',
      mixBlendMode:'unset',
      zIndex:0
    })

  }
  const handleOffLight = ()=>{
    gsap.to('#cursor',{
      background:'#c5fcfc',
      width:'20px',
      height:'20px',
      borderRadius:'100%',
      mixBlendMode:'difference',
      zIndex:20
    })
  }

    return (
        <div onMouseMove={handleCursor} className='overflow-x-hidden'>
          <div className='hidden md:flex w-[20px] h-[20px] rounded-full absolute bg-[#c5fcfc] mix-blend-difference z-20' id='cursor'></div>
          <svg viewBox="0 0 800 330" id='coverDiv' className='fixed z-10 '>
            <path id="curve" className=' w-full h-full bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-10 shadow-lg' d="M 800 300 Q 400 250 0 300 L 0 0 L 800 0 L 800 300 Z"></path>
          </svg>
          
          <div className='relative z-0 overflow-hidden'>
            {/* <Navbar /> */}
            <Hero />
            <div className='px-[1rem] md:px-16 h-auto md:h-[35vh] flex justify-center main_section relative z-0 '>
              <div className='' id='videoDiv'>
                {/* <video loop muted autoPlay id='videoDeskstop' className='hidden md:flex rounded-[1.5rem] w-full h-full md:scale-[0.14]'>
                  <source src='/intro-video.mp4' />
                </video> */}
                {/* <video loop muted autoPlay className='md:hidden rounded-[1.5rem] w-full h-full scale-1'>
                  <source src='/intro-video.mp4' />
                </video> */}
              </div>
            </div>
            <Works />
            <Whoweare />
            <div className='about_animation_trigger w-full flex flex-col items-end px-[1rem] md:pr-16 text-left font-[Syc] text-[1.099rem] text-[#c5fcfc]'>
              <p className='about_us w-full mb-5 md:w-[400px] text-[#801100]'>At Ilera On Point, we believe that true wellness is a lifestyle. Rooted in Africa’s rich natural heritage and advanced biohacking techniques, we provide premium wellness solutions designed to enhance your health, vitality, and longevity..</p>
              <div className='about_us w-full md:w-[400px]'>
                <Button>About us</Button>
              </div>
            </div>
            {/* <Achieved /> */}
            <Partner />
            <div className='py-[5rem]'>
              
            </div>
            {/* <DribbleSection/> */}
            <div className='py-[8rem]'>
              <WheelAnimation handleBlurDiv={handleBlurDiv} handleBlurDivLeave={handleBlurDivLeave}/>
            </div>
            <Social/>
            <CallToAction/>
            <Footer handleLight={handleLight} handleOffLight={handleOffLight}/>
          </div>
        </div>
      )
}

export default Home