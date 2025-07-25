const About = () => {
    return (
        <div className="about">
            <div className="body">
                <h2>Built on Trust,<br/> Crafted with Care</h2>
                <p>For over 30 years, we've been helping homeowners turn their renovation dreams into reality. Whether it's a full teardown or a small update, our skilled team takes care of every detail—so you can just sit back and enjoy the space.</p>
            </div>
            <img className='house' src={require('../../media/images/3d-home.webp')}
            loading="lazy"
            alt="3D home"/>
        </div>
    )
}

export default About;