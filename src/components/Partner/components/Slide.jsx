import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Slide = () => {
    const madamRef = useRef(null);
    const textRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "50% 50%",
            scrub: true,
          },
        });
        tl.to(
          madamRef.current,
          {
            y: -100,
            scaleX: 1.4,
          },
          "a"
        );
        tl.to(
          textRef.current,
          {
            y: 100,
            
          },
          "a"
        );


    
    });
  return (
    <div ref={containerRef}>
      <div className="flex flex-row gap-4 justify-center mt-20 px-[1rem] md:p-0">
        <div className="py-8  w-fit rounded-2xl flex md:flex flex-col  md:px-20 justify-center items-center gap-4">
          <img
          ref={madamRef}
            src="/madam.jpg"
            alt=""
            className=" h-[400px] md:h-[600px] rounded-sm img "
          />
          <div className=" text-[#801100] leading-[1.65rem] flex flex-col gap-6 ">
            <p ref={textRef} className="z-20 md:text-[2rem]  md:leading-10 text-left para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam
              eligendi maiores tempore dolorem aut, reiciendis cumque doloribus
              ducimus. Provident. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Voluptatibus ut cupiditate quaerat officiis fuga
              quibusdam cum inventore incidunt deserunt aut?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
