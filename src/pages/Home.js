import HomeBanner from "../components/home/HomeBanner";
import Process from "../components/home/Process";
import ProjectHighlights from "../components/home/ProjectHighlights";
import About from "../components/home/About";
import { projects } from "../data";
import "../styles/home.css"
import "../styles/projectHighlights.css"

const Home = () => {
    return (
        <>
            <HomeBanner />
            <About />
            <div className="project-highlight-home">
               <ProjectHighlights images={projects[0].images} stars={projects[0].stars} projectBody={projects[0].projectBody} /> 
            </div>
            
            <Process />
        </>
    )
}

export default Home;