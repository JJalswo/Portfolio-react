import { useNavigate} from 'react-router-dom';
export default function ProjectList() {
    const history = useNavigate();
    const projects = [
        { id: 1, name: "My Detective", description: "AI tool for interrogation using EEG data!" },
        { id: 2, name: "Customize Inventory", description: "Inventory managing software allows you to customize your items!" },
        { id: 3, name: "Voice Scorer", description: "Score the similarity of your voices to popular celebrities!" },
        { id: 4, name: "Hack the Human ", description: "Deep learning AI agent for segmenting the blood vessels from Kidney!" },
        { id: 5, name: "NeuroTune ", description: "Your Personal Music Therapy!" },
        { id: 6, name: "EmploiF1rst.com", description: "A fresh job board platform just for recent graduates!" }
    ];
    const handleProjectClick = (projectId) => {
        const path = `/projects/${projectId}`;
        history(path);
    };
    return (
        <div className="projectList">
            <h2>Here are the projects I worked on!</h2>
            <ul className="projectListItems">
                {projects.map(project => (
                    <li key={project.id} onClick={() => handleProjectClick(project.id)}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}