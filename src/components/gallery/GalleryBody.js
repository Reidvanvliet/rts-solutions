import ProjectHighlights from "../home/ProjectHighlights";
import { projects } from "../../data";

const GalleryBody = () => {
    return (
        <div className="projects-container">
            {projects.map((project, index) =>
            <div key={project.id} >
                <h2 className="type" >{project.type}</h2>
                <h3 className="title">{project.title}</h3>
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

export default GalleryBody;