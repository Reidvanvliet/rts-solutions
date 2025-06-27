import { useState, useEffect, useRef } from "react";
import { HiOutlineExternalLink, HiOutlineX } from "react-icons/hi";
import { useLocation, Link } from "react-router";

const ProjectHighlights = ({ images, stars, projectBody }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialOn, setTestimonialOn] = useState(true);
  const scrollRef = useRef(null);
  const { pathname } = useLocation();

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="project-gallery">
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

        <div className="select-container">
          {images.map((image, index) => (
            <img
              key={index}
              className={`select-image ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              src={image}
            />
          ))}
        </div>

        <div
          className={
            testimonialOn ? "testimonial" : "testimonial testimonial-hidden"
          }
        >
          <button
            className="close-testimonial"
            onClick={() => setTestimonialOn(!testimonialOn)}
          >
            <HiOutlineX />
          </button>
          {stars ? (
            <div>
              {stars}
              <br />
              <br />
            </div>
          ) : null}
          {projectBody}
        </div>
        <Link to="/projects">
          <button className={pathname === "/" ? "full-project" : "hidden"}>
            Visit Projects
          </button>
        </Link>

        <button
          className={testimonialOn ? "hidden" : "open-testimonial"}
          onClick={() => setTestimonialOn(!testimonialOn)}
        >
          <HiOutlineExternalLink />
        </button>
      </div>
    </div>
  );
};

export default ProjectHighlights;
