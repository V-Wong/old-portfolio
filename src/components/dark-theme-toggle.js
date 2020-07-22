import React, { useState } from "react"

import sunImage from "../images/sun.svg"
import moonImage from "../images/moon.svg"

const DarkThemeToggle = () => {
  return (
    <div id="dark-theme-button" class="link-container">
      <img class="social-icon" src={moonImage} alt="Black and white moon icon"/>
      <a class="underline" onClick={toggleDarkTheme}>Dark</a>
    </div> 
  )
}

const toggleDarkTheme = (isDarkTheme) => {
  document.body.classList.toggle("dark");
  document.getElementsByClassName("profile")[0].classList.toggle("dark");
  for (let element of document.querySelectorAll(".card, a, .social-icon")) {
    element.classList.toggle("dark");
  }

  const darkThemeToggleButton = document.getElementById("dark-theme-button");
  const darkThemeButtonText = darkThemeToggleButton.children[1];
  darkThemeToggleButton.children[0].src = 
      isDarkTheme ? moonImage : sunImage;
  darkThemeButtonText.innerText = 
      isDarkTheme ? "Dark" : "Light";
}

export default DarkThemeToggle