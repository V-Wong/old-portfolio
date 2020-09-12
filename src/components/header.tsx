import React from 'react';

import DarkThemeToggle from './dark-theme-toggle';

import githubImage from '../images/github.svg';
import resumeImage from '../images/resume.svg';
import linkedinImage from '../images/linkedin.svg';

const Header = () => (
  <header className="profile">
    <div className="top-bar">
      <h1>Vincent Wong</h1>
      <h2>Full Stack Software Engineer</h2>
      <nav className="links-container">
        <div className="link-container">
          <img className="social-icon" src={githubImage} alt="Black and white GitHub logo icon" />
          <a className="underline" href="https://github.com/V-Wong" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <div className="link-container">
          <img className="social-icon" src={resumeImage} alt="Black and white icon with silhouette of person" />
          <a
            className="underline"
            href="https://drive.google.com/file/d/1mqRF7QdBDXfDD7TLQ3OuanALxHxd_D2f/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        <div className="link-container">
          <img className="social-icon" src={linkedinImage} alt="Black and white LinkIn logo icon" />
          <a className="underline" href="https://www.linkedin.com/in/vincent-wc-wong/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </nav>
    </div>
    <blockquote className="about-me">
      <p>Computer Science, Mathematics and Statistics student at UNSW in Sydney.</p>
      <p>Active in full stack web development and native mobile app development.</p>
      <p>Interested in algorithms, theoretical computer science and pure maths.</p>
    </blockquote>
  </header>
);

export default Header;
