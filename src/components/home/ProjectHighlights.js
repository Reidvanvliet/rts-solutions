import { useState, useEffect, useRef } from "react";

const ProjectHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pauseUntilRef = useRef(null);
  const intervalRef = useRef(null);

  const images = [
    require("../../media/images/homeInterior1.jpg"),
    require("../../media/images/homeInterior2.jpg"),
    require("../../media/images/homeInterior3.jpg"),
    require("../../media/images/homeInterior4.jpg"),
  ];

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
    }, 5000); // advance every 5s

    return () => clearInterval(intervalRef.current); // cleanup
  }, []);

  return (
    <div className="slideshow-container">
      <div className="slideshow-image">
        <img className="image" src={images[currentIndex]} />
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
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <div className="testimonial">
        ⭐⭐⭐⭐⭐
        <br/><br/>
        “We couldn’t be happier with the transformation of our home.
        What was once outdated and cramped is now open, bright, and exactly what
        we dreamed of. The team was professional, communicative, and truly
        listened to what we wanted. Every detail — from the new flooring to the
        custom cabinetry — was executed flawlessly. It feels like we’re living
        in a brand new house!” – Sarah & Mark T.
      </div>
      <button className="full-project">Visit Project</button>
    </div>
  );
};

export default ProjectHighlights;
