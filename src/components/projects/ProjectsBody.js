import ProjectHighlights from "../home/ProjectHighlights";
import { projects } from "../../data";

const PojectsBody = () => {
    return (
        <div className="projects-container">
            {projects.map((project, index) =>
            <>
                <h2 className="title" >{project.type}</h2>
                <ProjectHighlights 
                    key={index}
                    images={project.images} 
                    stars={project.stars} 
                    projectBody={project.projectBody} 
                    projectType={project.projectType} 
                />
            </>
             )}
        </div>
    );
}

export default PojectsBody;