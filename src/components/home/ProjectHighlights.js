import { useState, useEffect, useRef } from "react";
import { HiOutlineExternalLink, HiOutlineX } from "react-icons/hi";
import { useLocation, Link } from "react-router";


const ProjectHighlights = ({ images, stars, projectBody }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialOn, setTestimonialOn] = useState(true);
  const pauseUntilRef = useRef(null);
  const intervalRef = useRef(null);
  const scrollRef  = useRef(null);
  const { pathname } = useLocation();

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    delayAutoScroll();
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    delayAutoScroll();
  };

  const delayAutoScroll = () => {
    pauseUntilRef.current = Date.now() + 10000; // pause auto-scroll for 10s
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const now = Date.now();
      if (!pauseUntilRef.current || now >= pauseUntilRef.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 10000); // advance every 5s
    
    if (scrollRef.current) {
        const { scrollWidth, clientWidth } = scrollRef.current;
        const middleScrollPosition = (scrollWidth - clientWidth) / 2;
        scrollRef.current.scrollLeft = middleScrollPosition;
      }

    return () => clearInterval(intervalRef.current); // cleanup
  }, []);

  return (
    <div className="slideshow-container">
      <div ref={scrollRef} className="slideshow-image">
        <img src={images[currentIndex]} />
      </div>

      <button className="prev" onClick={() => goToPrevSlide()}>
        &#10094;
      </button>
      <button className="next" onClick={() => goToNextSlide()}>
        &#10095;
      </button>

      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}>{index+1}</span>
        ))}
      </div>

      <div className={testimonialOn ? "testimonial" : "testimonial testimonial-hidden"}>
        <button className="close-testimonial" onClick={() => setTestimonialOn(!testimonialOn)}><HiOutlineX /></button>
        {stars ? <div>{stars}<br/><br/></div> : null}
        {projectBody}
      </div>
      <Link to='/projects'><button className={pathname === '/' ? "full-project" : "hidden"}>Visit Projects</button></Link>
      
      <button className={testimonialOn ? "hidden" : "open-testimonial"} onClick={() => setTestimonialOn(!testimonialOn)}><HiOutlineExternalLink /></button>
    </div>
  );
};

export default ProjectHighlights;
