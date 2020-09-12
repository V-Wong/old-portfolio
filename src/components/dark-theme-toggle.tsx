import React, { useState } from 'react';

import sunImage from '../images/sun.svg';
import moonImage from '../images/moon.svg';

const DarkThemeToggle = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  return (
    <div id="dark-theme-button" className="link-container">
      <img className="social-icon" src={isDarkTheme ? moonImage : sunImage} alt="Black and white moon icon" />
      <a
        className="underline"
        onClick={() => {
          toggleDarkTheme(isDarkTheme);
          setDarkTheme(!isDarkTheme);
        }}
      >
        {isDarkTheme ? 'Dark' : 'Light'}
      </a>
    </div>
  );
};

const toggleDarkTheme = (isDarkTheme: boolean) => {
  document.body.classList.toggle('dark');
  document.getElementsByClassName('profile')[0].classList.toggle('dark');
  for (const element of document.querySelectorAll('.card, a, .social-icon, .basic-card')) {
    element.classList.toggle('dark');
  }
};

export default DarkThemeToggle;
