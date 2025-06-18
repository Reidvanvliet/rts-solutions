const About = () => {
    return (
        <div className="about">
            <div className="body">
                <h2>Inspired Renovations,<br/> Built for You</h2>
                <p>For over 30 years, we've been helping homeowners turn their renovation dreams into reality. Whether it's a full teardown or a small update, our skilled team takes care of every detail—so you can just sit back and enjoy the space you've always imagined.</p>
            </div>
            <img className='house' src={require('../../media/images/3d-home.png')}/>
        </div>
    )
}

export default About;