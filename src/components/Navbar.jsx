import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change navbar after scrolling 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        height: "100vh",
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.fromTo(
        linksRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: "power2.out" }
      );
    } else {
      gsap.to(menuRef.current, { height: 0, duration: 0.5, ease: "power2.in" });
    }
  }, [isOpen]);

  return (
    <header className="z-10 px-[1rem] md:px-16 ">
      <nav
        className={`fixed top-0 left-0 w-full p-4 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/20 backdrop-blur-lg shadow-md" // Glassmorphism effect when scrolled
            : "bg-transparent"
        }`}
      >
        {/* Top Navbar with Open Button */}
        <div className="flex justify-between items-center">
          <h1>Ilera On Point</h1>
          <button onClick={() => setIsOpen(true)}>
            <Menu size={38} />
          </button>
        </div>

        {/* Animated Mobile Menu */}
        <div
          ref={menuRef}
          className="absolute top-0 left-0 w-full bg-[#fbe2df] overflow-hidden h-0 flex flex-col justify-center items-center transition-all"
        >
          {/* Close Button inside the menu */}
          <button
            className="absolute top-5 right-5"
            onClick={() => setIsOpen(false)}
          >
            <X size={52} />
          </button>

          {/* Menu Items */}
          <ul ref={linksRef} className="space-y-6 text-xl mt-16">
          <li><Link to="/" className="text-[3rem] md:text-[8rem] text-[#3c5007] hover:text-[#801100] leading-5 md:leading-[7rem]" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="text-[3rem] md:text-[8rem] text-[#3c5007] hover:text-[#801100] leading-5 md:leading-[7rem]" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" className="text-[3rem] md:text-[8rem] text-[#3c5007] hover:text-[#801100] leading-5 md:leading-[7rem]" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/contact" className="text-[3rem] md:text-[8rem] text-[#3c5007] hover:text-[#801100] leading-5 md:leading-[7rem]" onClick={() => setIsOpen(false)}>Contact</Link></li>
           
           
          </ul>
        </div>
      </nav>
    </header>
  );
}
