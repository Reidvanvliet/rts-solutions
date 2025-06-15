const HomeBanner = () => {

  return (
    <>
      <div className="main-banner">
        <video id="background-video" autoplay="autoplay" loop muted>
          <source
            src={require("../../media/videos/homes1.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="content-container">
            <h1>Redesign Your Future</h1>
                <button className="get-started">
                    Get Started
                </button>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
