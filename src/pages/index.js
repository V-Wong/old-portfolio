import React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import { SingleColumn, TwoColumn } from "../components/layout"
import { LongCard, ShortCard } from "../components/card"
import Footer from "../components/footer"

import linkUpProjectImage from "../images/linkup.svg"
import cubeProjectImage from "../images/cube.webp"
import huffmanProjectImage from "../images/huffman.webp"
import rubikSocImage from "../images/rubiksoc.webp"
import compCubeImage from "../images/comp-cube.svg"

import "../styles/styles.css"

const IndexPage = () => (
  <>
    <Helmet>
      <title>Portfolio | Vincent Wong - Full Stack Software Engineer</title>
      <meta name="description" content="Full stack software engineer based in Sydney, Australia.
                                        Current student of Computer Science and Mathematics at UNSW."/>
      <meta name="author" content="Vincent Wong"/>
      <meta name="keywords" content="vwong, VWong, v-wong, V-Wong"/>
      <link rel="icon" type="image/x-icon" href="./images/favicon.ico"/>
    </Helmet>

    <div class="container">
      <Header/>

      <SingleColumn title="Collaborative Projects">
        <LongCard
          title="LinkUp - Australian University Event Tracker"
          subheading="Full Stack Developer"
          link1={{ url: "https://linkup.website", title: "Live Demo" }}
          image={linkUpProjectImage}
          dotpoints={["Centralised source of events across Australian universities including UNSW, USyd and UniMelb.",
                      "Helps students discover new societies and consequently allows societies to gain exposure.",
                      "Actively working with UNSW societies to better support student academic and social life.",
                      "Development team consists of UNSW Computer Science and Software Engineering students."]}
          tags={[{link: "https://reactjs.org/", title: "React"},
                {link: "https://getbootstrap.com/", title: "Bootstrap"},
                {link: "https://expressjs.com/", title: "Express.js"}]}
        />
      </SingleColumn>

      <TwoColumn title="Personal Projects">
        <ShortCard
          title="CubeSim"
          subheading="Rubiks Cube Simulater and Solver"
          link2={{ url: "https://github.com/V-Wong/CubeSim", title: "Repository" }}
          image={cubeProjectImage}
          dotpoints={["Renders a two-dimensional Rubik's cube that can be controlled by the user with keyboard controls.",
                      "Generates solutions for any given state of the cube specified using the standard beginner's method.",
                      "Built in Python with Pygame for visuals and controls."]}
          tags={[{link: "https://www.python.org/", title: "Python"},
                {link: "https://www.pygame.org/news", title: "Pygame"}]}
        />

        <ShortCard
          title="Huffman Encoding"
          subheading="Huffman Encoding Visualisation Tool"
          link1={{ url: "https://vwong.dev/Huffman-Encoding", title: "Live Demo" }}
          link2={{ url: "https://github.com/V-Wong/Huffman-Encoding", title: "Repository" }}
          image={huffmanProjectImage}
          dotpoints={["Generates and renders a binary Huffman tree based on the user input of symbol probabilities in a given text. ",
                      "Draws the traceback encoding path for a certain symbol when a specific symbol is selected by the user.",
                      "Built in Javascript with HTML5 Canvas for visuals."]}
          tags={[{link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", title: "Javascript"},
                {link: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API", title: "Canvas"}]}
        />
      </TwoColumn>

      <TwoColumn title="Development Tools">
        <ShortCard
            title="Full Stack Starter"
            subheading="Web Development Workflow Automator"
            link2={{ url: "https://github.com/V-Wong/full-stack-starter", title: "Repository" }}
            dotpoints={["Generates and renders a binary Huffman tree based on the user input of symbol probabilities in a given text. ",
                        "Draws the traceback encoding path for a certain symbol when a specific symbol is selected by the user.",
                        "Built in Javascript with HTML5 Canvas for visuals."]}
            tags={[{link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", title: "Javascript"},
                  {link: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API", title: "Canvas"}]}
        />

        <ShortCard
            title="Reusable Components"
            subheading="Generic Cross Project React Components"
            link2={{ url: "https://github.com/V-Wong/reusable-components", title: "Repository" }}
            dotpoints={["A set of common and simple generic React components designed to be easily reused across different projects.",
                        "Speeds up user interface development by modifying existing components rather than rewriting from scratch.",
                        "Written in Typescript with React-Bootstrap for styling."]}
            tags={[{link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", title: "Javascript"},
                  {link: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API", title: "Canvas"}]}
        />
      </TwoColumn>

      <TwoColumn title="Skillset">
        <div class="card" style={{paddingBottom: "2%"}}>
          <h3>Web Development Skillset</h3>
          <h4 class="project-subheading">Frontend</h4>
          <ul style={{marginTop: "1vh"}}>
            <li><b>Languages</b>: Javascript, Typescript, HTML, CSS.</li>
            <li><b>Frameworks/Libraries</b>: React, Bootstrap, Canvas.</li>
            <li><b>Other</b>: accessible, performant and responsive design.</li>
          </ul>
          <h4 class="project-subheading">Backend</h4>
          <ul style={{marginTop: "1vh"}}>
            <li><b>Languages</b>: Python, Javascript, Typescript, SQL.</li>
            <li><b>Frameworks/Libraries</b>: Flask, Express.js, SocketIO.</li>
            <li><b>Other</b>: MongoDB, Heroku, Amazon Web Services.</li>
          </ul>
        </div>

        <div class="card" style={{paddingBottom: "2%"}}>
          <h3>Other Skillset</h3>
          <h4 class="project-subheading">Languages</h4>
          <ul style={{marginTop: "1vh"}}>
            <li><b>C</b>: low level access for high performance programs.</li>
            <li><b>Haskell</b>: mathematically based functional programming.</li>
            <li><b>R</b>: statistical computing for data science and analysis.</li>
          </ul>
          <h4 class="project-subheading">Software Engineering Tools</h4>
          <ul style={{marginTop: "1vh"}}>
            <li><b>Git</b>: version control system for tracking code changes.</li>
            <li><b>Pytest</b>: unit testing framework for Python programs.</li>
            <li><b>Hypothesis</b>: property based testing library for Python.</li>
          </ul>
        </div>
      </TwoColumn>

      <TwoColumn title="Algorithmic Interests">
        <ShortCard
          title="COMP3821"
          subheading="Extended Algorithms and Programming Techniques"
          link2={{ url: "https://github.com/V-Wong/COMP3821", title: "Repository" }}
          dotpoints={["Python implementation of common algorithms.",
                      "Utilises techniques from various programming paradigmssuch as brute force, divide and conquer, greedy method, linear and dynamic programming.",
                      "Documents my studies in common algorithms from within the fields of Computer Science and Mathematics."]}
          tags={[{link: "https://www.python.org/", title: "Python"},
                {link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2020/COMP3821", title: "Programming Techniques"}]}
        />

        <ShortCard
          title="LeetCode"
          subheading="Competitive Programming"
          link1={{ url: "https://leetcode.com/v-wong/", title: "LeetCode Profile"} }
          link2={{ url: "https://github.com/V-Wong/LeetCode-Practice", title: "Repository" }}
          dotpoints={["Python solutions to various LeetCode problems.",
                      "Includes a wide variety of problems involving common algorithms and manipulation of common data structures such as arrays, hashmaps, graphs, trees and heaps.",
                      "Documents my practice in problem solving and ability to write and explain code in easy and simple language. "]}
          tags={[{link: "https://www.python.org/", title: "Python"},
                {link: "https://leetcode.com/", title: "Problem Solving"}]}
        />
      </TwoColumn>

      <SingleColumn title="Extracurriculars">
        <LongCard
            title="UNSW Rubik Society"
            subheading="Executive - Events Director"
            link1={{ url: "https://www.facebook.com/UNSWRubikSoc/", title: "Society Page" }}
            image={rubikSocImage}
            dotpoints={["Help organise Rubik's Cube tutorials and unofficial competitions at UNSW in Sydney.",
                        "Encourage students to find an interest and hobby in Rubik's Cubes and speedsolving.",
                        "Help existing speedcubers to improve and optimise their solves by hosting workshops.",
                        "Currently working with the World Cube Association to organise official competitions."]}
            tags={[{link: "https://www.rubiks.com/en-us/" , title: "Rubiks Cubes"},
                  {link: "https://www.worldcubeassociation.org/", title: "Speedcubing"}]}
        />

        <LongCard
            title="Competitive Rubik's Cube Speedsolver"
            subheading="Participant in WCA competitions"
            link1={{ url: "https://www.worldcubeassociation.org/persons/2014WONG08", title: "WCA Profile" }}
            image={compCubeImage}
            dotpoints={["Actively participated in speedcubing competitions across Australia since 2014.",
                        "Held numerous Sydney and Australian national championship podium titles.",
                        "Held a former top 10 world ranking in one handed 3x3 Rubik's Cube solving.",
                        "Developed video resources to teach viewers solving techniques and how to improve."]}
            tags={[{link: "https://www.rubiks.com/en-us/" , title: "Rubiks Cubes"},
                  {link: "https://www.worldcubeassociation.org/", title: "Speedcubing"}]}
          />
      </SingleColumn>

      <Footer/>
    </div>
  </>
)

export default IndexPage
