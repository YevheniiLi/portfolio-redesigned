import PropTypes from "prop-types";
import Reveal from "./Reveal";

const ProjectCard = ({ project, delay }) => (
  <Reveal as="article" className={`project-card project-card--${project.tone}`} delay={delay}>
    <div className="project-card__visual">
      <img src={project.image} alt={project.imageAlt} loading="lazy" width="960" height="640" />
      <div className="project-card__visual-overlay" aria-hidden="true" />
      <p className="project-card__index" aria-hidden="true">
        {project.index}
      </p>
      <p className="project-card__kind">{project.kind}</p>
    </div>

    <div className="project-card__content">
      <div>
        <p className="project-card__overline">Selected build</p>
        <h3>{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
      </div>

      <dl className="project-card__details">
        <div>
          <dt>Built with</dt>
          <dd>
            <ul className="tag-list" aria-label={`${project.title} technology stack`}>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt>Technical focus</dt>
          <dd>{project.focus}</dd>
        </div>
      </dl>

      <div className="project-card__actions">
        <a href={project.repository} target="_blank" rel="noreferrer" className="text-link">
          View source on GitHub
        </a>
        <span className="project-card__unavailable">Live demo currently unavailable</span>
      </div>
    </div>
  </Reveal>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    index: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    focus: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    repository: PropTypes.string.isRequired,
    tone: PropTypes.string.isRequired,
  }).isRequired,
  delay: PropTypes.number.isRequired,
};

export default ProjectCard;
