import React from 'react';

interface ProjectCardProps {
  image: string;
  imageAltText: string;
  title: string;
  description: string;
  learnMoreURL?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, imageAltText, title, description, learnMoreURL }) => {
  return (
    <div className="project">
      <img src={image} alt={imageAltText} />
      <h3 className="project-title">
        {learnMoreURL ? (
          <a href={learnMoreURL} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <p>{description}</p>
      {learnMoreURL && <a href={learnMoreURL}>Learn More</a>}
    </div>
  );
}

export default ProjectCard;
