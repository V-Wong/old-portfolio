import PropTypes from "prop-types"
import React from "react"

import "../styles/styles.css"

import darkThemeImage from "../images/moon.svg";
import githubImage from "../images/github.svg"
import resumeImage from "../images/resume.svg"
import linkedinImage from "../images/linkedin.svg"

const Header = () => (
  <header class="profile">
    <div class="top-bar">
      <h1>Vincent Wong</h1>
      <h2>Full Stack Software Engineer</h2>
      <nav class="links-container">
        <div class="link-container">
          <img class="social-icon" src={githubImage} alt="Black and white GitHub logo icon"/>
          <a class="underline" href="https://github.com/V-Wong" target="_blank">Github</a>
        </div>
        <div class="link-container">
          <img class="social-icon" src={resumeImage} alt="Black and white icon with silhouette of person"/>
          <a class="underline" href="https://drive.google.com/file/d/1mqRF7QdBDXfDD7TLQ3OuanALxHxd_D2f/view?usp=sharing" target="_blank">Resume</a>
        </div>
        <div class="link-container">
          <img class="social-icon" src={linkedinImage} alt="Black and white LinkIn logo icon"/>
          <a class="underline" href="https://www.linkedin.com/in/vincent-wc-wong/" target="_blank">LinkedIn</a>
        </div>
        <div id="dark-theme-button" class="link-container">
          <img class="social-icon" src={darkThemeImage} alt="Black and white moon icon"/>
          <a class="underline">Dark</a>
        </div>
      </nav>
    </div>
    <blockquote class="about-me">
      <p>
        Computer Science, Mathematics and Statistics student at UNSW in Sydney.
      </p>
      <p>
        Active in full stack web development and native mobile app development.
      </p>
      <p>
        Interested in algorithms, theoretical computer science and pure maths.
      </p>
    </blockquote>
	</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
