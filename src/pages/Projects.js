import ProjectsBanner from "../components/projects/ProjectsBanner";
import ProjectsBody from "../components/projects/ProjectsBody";
import '../styles/projects.css';

const Projects = () => {
    return (
        <div>
            <ProjectsBanner />
            <ProjectsBody />
            {/* Additional content for the Projects page can be added here */}
        </div>
    );
}

export default Projects;