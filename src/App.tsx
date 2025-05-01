// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'; // Import Home page
import Blog from './Blog'; // Import Blog page
import Banner from './assets/okameheader.jpg';
// import profilePic from './assets/2025-04-04 15.51.46-2.jpg';

function App() {
  const yourName = "Graham Cobden";

  return (
    <Router>
      <div className="app">
        {/* Header section */}
        <header>
          <div className="top-banner">
            <img src={Banner} alt="A cherry blossom tree" className="banner-image" />
          </div>
          <div className="navigation-banner">
            <Link to="/" className="nav-button">Home</Link>
            <Link to="/blog" className="nav-button">Blog</Link>
          </div>
          {/* <div className="header-row">
            <div className="profile-info">
              <img src={profilePic} alt="A picture of Graham next to a cherry tree" className="profile-pic" />
              <h1>{yourName}</h1>
              <a href="/Cobden_Graham_2027.pdf" download="Cobden_Graham_2027.pdf">
                <button className="download-button">Resume Download</button>
              </a>
            </div>
          </div> */}
        </header>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/blog" element={<Blog />} /> {/* Blog page */}
        </Routes>

        <footer>
          <p>&copy; 2025 {yourName} | <a href="https://leejmorel.github.io/#/">Designed by Lee J Morel</a></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;