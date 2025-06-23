import { Link } from 'react-router';

const HomeBanner = () => {

  return (
    <>
      <div className="main-banner">
        <video id="background-video" autoPlay poster={require('../../media/images/homepage-frame.jpg')}  loop muted>
          <source
            src={require("../../media/videos/homes1.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="content-container">
            <h1>Transform. Create. Elevate.</h1>
            <Link to="/contact">
                <button className="get-started">
                    Get Started
                </button>
              </Link>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
