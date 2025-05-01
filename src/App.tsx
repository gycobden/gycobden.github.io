//imports CSS style and sections to be included.
import './App.css';
import About from './sections/About';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Project from './sections/Project';
import Skill from './sections/Skill';
import Blog from './Blog'; // Import Blog section
// import Banner from './assets/okameheader.jpg';
import synaptechLogo from './assets/dark_synaptech_logo_transparent.png';

// TODO: replace asset images with your own
import profilePic from './assets/2025-04-04 15.51.46-2.jpg';
// import accentSVG from './assets/vecteezy_cherry-blossom-free-vector-background_16808159.svg';
import project1Thumbnail from './assets/minigoogle.png';
// import project2Thumbnail from './assets/project2-thumbnail.png';


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
    role: 'and I\'m a Computer Science major at UW',
    bio: 'I\'m interested in the intersection between AI, modern forms of media, '
    + 'personal interactions, and the flow of information. I\'m currently working on '
    + 'a project to make it easier to identify online misinformation. On the less computery side, I '
    + 'enjoy training for triathlons, jamming with my saxophone, and learning '
    + 'how to cook (passably)!',
    github: yourGithub,
    linkedin: yourLinkedin,
    // decorativeImage: accentSVG,
    altText: '6 tropical leaves with pink and green colors',
  };

  const userExperiences = [ //TODO: Replace with your experiance
    {
      position: 'Software Developer, Synaptech',
      date: 'October 2023 - present',
      company: 'Synaptech, Seattle, WA',
      companyIcon: synaptechLogo,
      companyLink: 'https://synaptechuw.org/',
      highlights: [
        'Developed movement functions in Python for Arduino-based car controlled by eye movement',
        'Engineered a JavaScript test UI that enabled 100% faster identification of movement response errors',
        'Resolved a critical bug that prevented accurate detection of certain screen areas by identifying rounding errors in'
        + 'eye location data processing implementation, leading to a 50% improvement in eye tracking accuracy.',
        'Presented at the university’s master’s research symposium, showcasing potential future applications for disability'
        +'management to over 200 attendees',
      ],
    },
    {
      position: 'Backend Developer, Insider team',
      date: 'December 2023 - June 2024',
      company: 'Husky Coding Project',
      companyIcon: 'https://hcp-uw.vercel.app/HCPLogoText-Crop.webp',
      companyLink: 'https://hcp-uw.vercel.app/',
      highlights: [
        'Led the back-end development for a website that analyzes real-time data on politician trades, exposing possible'
        + 'insider trading',
        'Created and implemented Python web-scraper and SQL ETL pipeline, sorted data with self-calibrated PnL'
        + 'algorithm that provided the front end with usable data',
      ],
    },
    // Add more experience items as needed
  ];

  const userEducation = [ //TODO: Update Education
    {
      degree: 'BS in Computer Science',
      institution: 'University of Washington',
      graduationDate: 'June 2027',
      institutionLink: 'https://www.washington.edu/',
    },
    // Add more education entries as needed
  ];
  
  // TODO: Update the skills list with your own
  // Note: Most tech skills include icons which will show under "SkillsIcons", you may wish to add more to the component if you have something specific
  const userSkillsToShow = ['HTML', 'CSS', 'JavaScript', 'React', 'Java', 'Python', 'C', 'C++', 'OCaml', 'Git']; // Example skills
  const userNonTechSkills = ['Communication', 'Problem Solving', 'Teamwork'];

  const userProjects = [ //TODO: Update with any major Project you have designed
    {
      image: project1Thumbnail,
      imageAltText: "A light replication of Google's search engine.",
      title: "Mini Google",
      description: "Built lightweight search engine from scratch with C and C++."  
          + "The project contains custom-designed data structures, disk-based "
          + "storage, a primitive frequency based ranking system, and a (sometimes) working domain!",
      // learnMoreURL: "https://github.com/gycobden/Mini-Google"
    }
    , {
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7cf51e188450701.65b6d6991d38d.png',
      imageAltText: "yada yada yada",
      title: "No Deception",
      description: "No Deception is a chrome deception aimed at highlighting disinformation in multiple forms of media. Currently a work in progress.",
      learnMoreURL: "https://github.com/gycobden/No-Deception"
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
    { key: 'blog', Component: <Blog /> }, // Add Blog here
  ];

  return (
    <div className="app">
      {/* Header section */}
      <header>
        {/* <div className='top-banner'>
          <img src={Banner} alt="A cherry blossom tree" className="banner-image" />
        </div>
        <div className="navigation-banner">
          <button className="nav-button" onClick={() => window.location.href = "#about"}>About Me</button>
          <button className="nav-button" onClick={() => window.location.href = "blog.html"}>Blog</button>
        </div> */}
        <div className="header-row">
          <div className="profile-info">
            <img src={profilePic} alt={yourProfilePictureAltText} className="profile-pic" />
            <h1>{yourName}</h1>
            <a href="/Cobden_Graham_2027.pdf" download="Cobden_Graham_2027.pdf">
              <button className="download-button">Resume Download</button>
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
        <p>&copy; 2025 {yourName} | <a href="https://leejmorel.github.io/#/">Designed by Lee J Morel</a></p>
      </footer>
    </div>
  );
}

export default App;



// // import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './Home'; // Import Home page
// import Blog from './Blog'; // Import Blog page
// import Banner from './assets/okameheader.jpg';
// // import profilePic from './assets/2025-04-04 15.51.46-2.jpg';

// function App() {
//   const yourName = "Graham Cobden";

//   return (
//     <Router>
//       <div className="app">
//         {/* Header section */}
//         <header>
//           <div className="top-banner">
//             <img src={Banner} alt="A cherry blossom tree" className="banner-image" />
//           </div>
//           <div className="navigation-banner">
//             <Link to="/" className="nav-button">Home</Link>
//             <Link to="/blog" className="nav-button">Blog</Link>
//           </div>
//           {/* <div className="header-row">
//             <div className="profile-info">
//               <img src={profilePic} alt="A picture of Graham next to a cherry tree" className="profile-pic" />
//               <h1>{yourName}</h1>
//               <a href="/Cobden_Graham_2027.pdf" download="Cobden_Graham_2027.pdf">
//                 <button className="download-button">Resume Download</button>
//               </a>
//             </div>
//           </div> */}
//         </header>

//         {/* Define Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* Home page */}
//           <Route path="/blog" element={<Blog />} /> {/* Blog page */}
//         </Routes>

//         <footer>
//           <p>&copy; 2025 {yourName} | <a href="https://leejmorel.github.io/#/">Designed by Lee J Morel</a></p>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;