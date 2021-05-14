import React from 'react';

import profileImage from '../images/profile.jpeg'
import githubImage from '../images/github.svg';
import resumeImage from '../images/resume.svg';
import linkedinImage from '../images/linkedin.svg';

const Header = () => (
  <header className="profile">
    <div className="top-bar">
      <img className="profile-image" src={profileImage} />
      <div className="title-holder">
        <h1 className="name-title">Vincent Wong</h1>
        <h2 className="description-title">Full Stack Software Engineer</h2>
      </div>
      <nav className="links-container">
        <div className="link-container">
          <img className="social-icon" src={githubImage} alt="Black and white GitHub logo icon" />
          <a href="https://github.com/V-Wong" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <div className="link-container">
          <img className="social-icon" src={resumeImage} alt="Black and white icon with silhouette of person" />
          <a
            href="https://drive.google.com/file/d/1mqRF7QdBDXfDD7TLQ3OuanALxHxd_D2f/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        <div className="link-container">
          <img className="social-icon" src={linkedinImage} alt="Black and white LinkIn logo icon" />
          <a href="https://www.linkedin.com/in/vincent-wc-wong/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </nav>
    </div>
    <blockquote className="about-me">
      Hi there! I'm Vincent Wong, a full stack software developer from Sydney, Australia. &nbsp;
      <br className="responsive-break" />
      I currently study Computer Science & Mathematics at the University of New South Wales. &nbsp;
      <br className="responsive-break" />
      This website shows the various personal and collaborative projects I have worked on.
    </blockquote>
  </header>
);

export default Header;
