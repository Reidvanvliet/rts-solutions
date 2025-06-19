const ProjectsBanner = () => {
    return (
        <div className="main-banner projects-banner">
        <img className="projects-banner-image" src={require("../../media/images/greenbayKitchen.jpg")} alt="Projects Banner" />
        <div className="projects-banner-content">
            <h3>Home Renovations in the Okanagan Valley</h3>
            <h1>Projects</h1>
        </div>
      </div>
    )
}

export default ProjectsBanner;