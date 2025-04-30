interface ExperienceProps {
  experiences: {
    position: string;
    date: string;
    company: string;
    companyLink?: string;
    companyIcon?: string;
    highlights: string[];
  }[];
}

function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience">
      <div className="section">
      <h2>Experience</h2>
      <div className="experience-wrapper">
        {experiences.map((experience, index) => (
          <div className="experience-item" key={index}>
            <h3>{experience.position}</h3>
            <p className="experience-date">{experience.date}</p>
            <div>{experience.companyIcon && experience.companyLink ? (
              <a
                href={experience.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="company-icon-link"
              >
                <img
                  src={experience.companyIcon}
                  alt={`${experience.company} logo`}
                  className="company-icon"
                />
              </a>
            ) : (
              experience.companyIcon && (
                <img
                  src={experience.companyIcon}
                  alt={`${experience.company} logo`}
                  className="company-icon"
                />
              )
            )} </div>
            {experience.companyLink ? (
              <a
                href={experience.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="experience-company-link"
              >
                {experience.company}
              </a>
            ) : (
              <p className="experience-company">{experience.company}</p>
            )}
            <ul className="experience-highlights">
              {experience.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Experience;