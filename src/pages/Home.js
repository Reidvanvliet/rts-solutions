import HomeBanner from "../components/home/HomeBanner";
import Process from "../components/home/Process";
import ProjectHighlights from "../components/home/ProjectHighlights";
import About from "../components/home/About";
import "../styles/home.css"

const Home = () => {
    return (
        <>
            <HomeBanner />
            <About />
            <Process />
            <ProjectHighlights />
            <ProjectHighlights />
            <ProjectHighlights />
        </>
    )
}

export default Home;