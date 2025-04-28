import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

interface ContactSectionProps {
  emailAddress: string;
  linkedinURL?: string;
  githubURL?: string;
  phoneNumber?: string;
}

const Contact: React.FC<ContactSectionProps> = ({ emailAddress, linkedinURL, githubURL, phoneNumber }) => {
  return (
    <section id="contact">
      <div className="section">
      <h2>Contact Me</h2>
      {/* <p>Add your contact information here.</p> */}
      <div className="contact-options" aria-hidden="true">
        {emailAddress && (
          <div className="contact-option" title={`Click to email ${emailAddress}`}>
            <FontAwesomeIcon icon={faEnvelope} size="xs" className="icon"/>
            <a href={`mailto:${emailAddress}`} aria-label={`Email ${emailAddress}`}>
              {emailAddress}
            </a>
          </div>
        )}
        {linkedinURL && (
          <div className="contact-option" title="Visit LinkedIn profile">
            <FontAwesomeIcon icon={faLinkedin} size="xs" className="icon"/>
            <a href={linkedinURL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              LinkedIn
            </a>
          </div>
        )}
        {githubURL && (
          <div className="contact-option" title="Visit GitHub profile">
            <FontAwesomeIcon icon={faGithub} size="xs" className="icon"/>
            <a href={githubURL} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              GitHub
            </a>
          </div>
        )}
        {phoneNumber && (
          <div className="contact-option" title={`Call ${phoneNumber}`}>
            <FontAwesomeIcon icon={faPhone} size="xs" className="icon"/>
            <a href={`tel:${phoneNumber}`} aria-label={`Call ${phoneNumber}`}>
              {phoneNumber}
            </a>
          </div>
        )}
      </div>
      </div>
    </section>
  );
}

export default Contact;
