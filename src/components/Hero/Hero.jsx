import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React, { useRef } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Button from "./components/Button";
import { use } from "react";

const Hero = () => {
  const textRef = useRef(null);
  const wordRef = useRef(null);
  const arrowRef = useRef(null);
  const containerRef = useRef(null);
  const girlRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "50% 50%",
        scrub: true,
      },
    });
    tl.to(
      textRef.current,
      {
        y: -200,
      },
      "a"
    )
    tl.to(
      wordRef.current,
      {
        y: -100,
      },
      "a"
    )
    tl.to(
      arrowRef.current,
      {
        y: -900,
      },
      "a"
    )
      .to(
        girlRef.current,
        {
          scale: 1.2,
        },
        "a"
      )
      .to(
        containerRef.current,
        {
          y: 200,
        },
        "a"
      );
  });

  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.from(".heading", {
      // y: 50,
      rotateX: "90deg",
      opacity: 0,
      duration: 1,
      stagger: 0.45,
    }).from([".para", ".arrow"], {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
    });
  });
  return (
    <div
      ref={containerRef}
      className="relative px-[1rem] md:px-16  flex flex-col justify-center items-center text-center min-h-[80vh] text-[#3c5007] mt-20 pb-24"
    >
      <div
        
        className="flex flex-col"
        style={{ perspective: "800px" }}
      >
        <h1 ref={textRef} className="text-[4rem] md:text-[6rem] font-bold -tracking-[2px] leading-[3rem] md:leading-[4.5rem] heading">
          Welcome to <span className="text-[#801100]">Ilera-On-Point.</span>
        </h1>
        <h1 ref={wordRef} className="text-[3rem] md:text-[2rem] font-normal mt-8 md:mt-0 -tracking-[2px] leading-[3rem] md:leading-[4.5rem] heading">
          – Your Path to Premium Wellness & Longevity
        </h1>
      </div>
      <div className="px-1 sm:px-0 mt-4 mb-8 sm:mb-4 w-full para">
        <p className="flex flex-col font-[Syc] uppercase text-[.7rem] md:text-[0.85rem] md:font-bold "></p>
      </div>
      <div className="arrow">
        <IoArrowDownCircleOutline ref={arrowRef} size={"24px"} color="#425152" className="-mt-8" />
        <div className="md:hidden">
        {/* <Button>Explore Products</Button> */}
        </div>
      </div>
      <div className="absolute transform translate-x-1 translate-y-1 -bottom-60 md:-bottom-80 ">
        <img
          ref={girlRef}
          src="/Ilera1.png"
          alt="ilera"
          height={500}
          srcset=""
          className="h-[400px] md:h-[500px] "
        />
      </div>
      <div className="px-[1rem] md:px-16  w-full text-[0.9rem] flex flex-row justify-between gap-4 md:gap-0 p-4 font-[Syc] absolute bottom-9 text-[#c5fcfc] font-bold">
        <div className="hidden md:block">
          <Button>Explore Products</Button>
        </div>

        <div className="hidden md:block">
          <Button>Get in touch</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
