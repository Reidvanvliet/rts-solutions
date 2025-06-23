import ProjectHighlights from "../home/ProjectHighlights";
import { projects } from "../../data";

const PojectsBody = () => {
    return (
        <div className="projects-container">
            {projects.map((project, index) =>
            <div key={project.id} >
                <h2 className="title" >{project.type}</h2>
                <ProjectHighlights 
                    images={project.images} 
                    stars={project.stars} 
                    projectBody={project.projectBody} 
                    projectType={project.projectType} 
                />
            </div>
             )}
        </div>
    );
}

export default PojectsBody;