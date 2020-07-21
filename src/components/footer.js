import React from "react"

import githubImage from "../images/github.svg"
import resumeImage from "../images/resume.svg"
import linkedinImage from "../images/linkedin.svg"

const Footer = () => {
    return (
      <footer>
        <p>
            Looking for software roles. Email me at <a href="mailto:vincent@vwong.dev">vincent@vwong.dev</a> :)
        </p>
        <div class="footer-links">
            <div class="link-container">
                <a href="https://github.com/V-Wong" target="_blank">
                  <img class="social-icon" src={githubImage} alt="Black and white GitHub logo icon"/>
                </a>
            </div>
            <div class="link-container">
                <a href="https://drive.google.com/file/d/1mqRF7QdBDXfDD7TLQ3OuanALxHxd_D2f/view?usp=sharing" target="_blank">
                  <img class="social-icon" src={resumeImage} alt="Black and white icon with silhouette of person"/>
                </a>
            </div>
            <div class="link-container">
                <a href="https://www.linkedin.com/in/vincent-wc-wong/" target="_blank">
                  <img class="social-icon" src={linkedinImage} alt="Black and white LinkIn logo icon"/>
                </a>
            </div>
        </div>
      </footer>
  )
}

export default Footer;