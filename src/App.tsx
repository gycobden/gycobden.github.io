// import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'; // Import Home page
import Blog from './Blog'; // Import Blog page
import Banner from './assets/okameheader.jpg';
import ArticlePage from './ArticlePage'; // Import Article page
// import profilePic from './assets/2025-04-04 15.51.46-2.jpg';

function App() {
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
        </header>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/blog" element={<Blog />} /> {/* Blog page */}
          <Route path="/blog/:articleName" element={<ArticlePage />} /> {/* Dynamic article page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;