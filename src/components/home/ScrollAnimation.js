import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);


const ScrollAnimation = ({ children, identifier, side, divName }) => {
    useEffect(() => {
    gsap.to('.' + identifier, {
      transform: "translate(0, 0)", // Moves the section horizontally
      ease: "none",
      scrollTrigger: {
        trigger: '.' + identifier,
        start: "top bottom",     // starts when top of section hits bottom of viewport
        end: "bottom 70%",       // ends when bottom hits top
        scrub: true,         
      }
    });
  }, []);

  return (
    <div className={`${divName} ${side} ${identifier}`}>
      { children }
    </div>
  )
 }

 export default ScrollAnimation;