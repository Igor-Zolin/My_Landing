import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  reverse?: boolean;
};

function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <article
      className={`project-card ${reverse ? "project-card-reverse" : ""}`}
    >
      <img
        className={reverse ? "case-media" : ""}
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        decoding="async"
      />
      <div className="project-info">
        <h5>{project.type}</h5>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div>
          <ul className="project-stack">
            {project.stack.map((technology) => (
              <li key={technology}>[{technology}]</li>
            ))}
          </ul>
        </div>
        <div>
          {project.github && (
            <a target="_blank" href={project.github} rel="noreferrer">
              [GitHub]
            </a>
          )}
          {project.demo && (
            <a target="_blank" href={project.demo} rel="noreferrer">
              [Link]
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;