//imports CSS style and sections to be included.
import './App.css';
import About from './sections/About';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Project from './sections/Project';
import Skill from './sections/Skill';

// TODO: replace asset images with your own
import profilePic from './assets/2025-04-04 15.51.46-2.jpg';
import accentSVG from './assets/accent.svg';
import project1Thumbnail from './assets/project1-thumbnail.png';
import project2Thumbnail from './assets/project2-thumbnail.png';

//defines the sections of the website
interface Section {
  key: string;
  Component: JSX.Element;
}

function App() {
  //TODO: under public replace the Resume.pdf file with your most recent resume for download
  //TODO: in index.html replace the website title and icon
  //TODO: in package.json replace the homepage with your own
  const yourName = "Graham Cobden"; // TODO: Replace with your name
  const yourEmail = 'gycobden@gmail.com'; // Replace with your email
  const yourLinkedin = 'https://www.linkedin.com/in/graham-cobden'; // Replace with your LinkedIn profile
  const yourGithub = 'https://github.com/gycobden'; // Replace with your GitHub profile
  // const yourPhoneNumber = '+1 206 384 5042'; // Replace with your phone number
  const yourProfilePictureAltText = 'A picture of Graham next to a cherry tree'; // Replace with your Profile Picture Alt Text

  const showSections: { [key: string]: boolean } = { //TODO: set any section you don't want to "false"
    about: true,
    experience: true,
    education: true,
    skills: true,
    projects: true,
    contact: true,
  };

  const user = { //TODO: Replace with your about
    name: yourName,
    role: 'Computer Science at UW',
    bio: 'I\'m doing some cool stuff!',
    github: yourGithub,
    linkedin: yourLinkedin,
    decorativeImage: accentSVG,
    altText: '6 tropical leaves with pink and green colors',
  };

  const userExperiences = [ //TODO: Replace with your experiance
    {
      position: 'Software Development Intern',
      date: 'May 2022 - August 2022',
      company: 'ABC Tech Solutions, New York, NY',
      companyLink: 'https://www.abctechsolutions.com',
      highlights: [
        'Collaborated with a team of developers to create and implement new features for the company\'s web application.',
        'Assisted in debugging and troubleshooting issues in existing codebase.',
        'Participated in code reviews and provided feedback on colleagues\' code.',
      ],
    },
    {
      position: 'Computer Science Tutor',
      date: 'September 2021 - Present',
      company: 'XYZ University, Department of Computer Science, City, ST',
      highlights: [
        'Provided one-on-one tutoring to undergraduate students in computer science courses.',
        'Assisted students with understanding programming concepts and assignments in languages such as Java, Python, and C++.',
        'Developed and conducted workshops on data structures and algorithms.',
      ],
    },
    // Add more experience items as needed
  ];

  const userEducation = [ //TODO: Update Education
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'XYZ University',
      graduationDate: 'May 2024',
      institutionLink: 'https://www.xyzuniversity.edu',
    },
    // Add more education entries as needed
  ];
  
  // TODO: Update the skills list with your own
  // Note: Most tech skills include icons which will show under "SkillsIcons", you may wish to add more to the component if you have something specific
  const userSkillsToShow = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Java', 'Python', 'Git']; // Example skills
  const userNonTechSkills = ['Communication', 'Problem Solving', 'Teamwork'];

  const userProjects = [ //TODO: Update with any major Project you have designed
    {
      image: project1Thumbnail,
      imageAltText: "A resume webpage that has a green header and black background with rainbow colored connected nodes.",
      title: "Project 1",
      description: "Add project description here.",
      learnMoreURL: "https://leejmorel.github.io/#/"
    },
    {
      image: project2Thumbnail,
      imageAltText: "An application welcome screen of the software PathKit",
      title: "Project 2",
      description: "Add project description here."
    },
    // Add more projects as needed
  ];

  const visibleSections: Section[] = [
    { key: 'about', Component: <About {...user} /> },
    { key: 'experience', Component: <Experience experiences={userExperiences} /> },
    { key: 'education', Component: <Education educationEntries={userEducation} /> },
    { key: 'skills', Component: <Skill skillsToShow={userSkillsToShow} nonTechSkills={userNonTechSkills} /> },
    { key: 'projects', Component: <Project projects={userProjects} /> },
    //TODO: If you don't provide certian information for contact, remove that prop, fo example, no phone number would look like:
    // { key: 'contact', Component: <Contact emailAddress={yourEmail} linkedinURL={yourLinkedin} githubURL={yourGithub} /> },
    { key: 'contact', Component: <Contact emailAddress={yourEmail} linkedinURL={yourLinkedin} githubURL={yourGithub} /*phoneNumber={yourPhoneNumber}*/ /> },
    //add or change sections as needed
  ];

  return (
    <div className="app">
      {/* Header section */}
      <header>
        <div className="header-row">
          <div className="profile-info">
            <img src={profilePic} alt={yourProfilePictureAltText} className="profile-pic" />
            <h1>{yourName}</h1>
          </div>
          <div>
            {/* TODO: Replace with your own resume file */}
            <a href="/Resume.pdf" download="Resume.pdf">
              <button className="download-button">will make this my resume</button>
            </a>
          </div>
        </div>

        {/*Navigation Links*/}
        <nav>
          <ul>
            {visibleSections.map((section) => (
              showSections[section.key] && (
                <li key={section.key}>
                  <a href={`#${section.key}`}>{section.key.charAt(0).toUpperCase() + section.key.slice(1)}</a>
                </li>
              )
            ))}
          </ul>
        </nav>

      </header>

      {/*Website Sections*/}
      <main>
        {visibleSections.map((section, index) => (
          showSections[section.key] ? (
            <div key={section.key} className={`section ${index % 2 === 0 ? 'even' : 'odd'}`}>
              {section.Component}
            </div>
          ) : null
        ))}
      </main>

      <footer>
        <p>&copy; 2024 {yourName} | <a href="https://leejmorel.github.io/#/">Designed by Lee J Morel</a></p>
      </footer>
    </div>
  );
}

export default App;

