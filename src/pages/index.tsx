import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../components/header';
import { Layout, SingleColumn, TwoColumn } from '../components/layout';
import { LongCard, ShortCard } from '../components/card';
import Footer from '../components/footer';
import Image from '../components/image';

import favicon from '../images/favicon.ico';

import '../styles/styles.css';

const IndexPage = () => (
  <>
    <Helmet>
      <title>Portfolio | Vincent Wong - Full Stack Software Engineer</title>
      <meta
        name="description"
        content="Full stack software engineer based in Sydney, Australia.
                 Current student of Computer Science and Mathematics at UNSW."
      />
      <meta name="author" content="Vincent Wong" />
      <meta name="keywords" content="vwong, VWong, v-wong, V-Wong" />
      <link rel="icon" type="image/x-icon" href={favicon} />
    </Helmet>

    <Layout>
      <Header />

      <SingleColumn title="Collaborative Projects">
        <LongCard
          title="LinkUp - Events Tracker"
          subheading="Full Stack Developer"
          link1={{ url: 'https://linkupevents.com.au', title: 'Live Demo' }}
          image={<Image image="linkup" className="non-edgeless-image" />}
          dotpoints={['A centralised source of events across Australian universities including UNSW, USyd and UniMelb.',
            'Aims to help students discover new societies and also allows societies to gain exposure.',
            'Actively working with UNSW societies to better support student academic and social life.',
            'Development team consists of UNSW Computer Science and Software Engineering students.']}
          tags={[{ link: 'https://reactjs.org/', title: 'React' },
          { link: 'https://getbootstrap.com/', title: 'Bootstrap' },
          { link: 'https://expressjs.com/', title: 'Express.js' }]}
        />
      </SingleColumn>

      <TwoColumn title="Personal Projects">
        <ShortCard
          title="CubeSim"
          subheading="Rubik's Cube Simulator and Solver"
          link2={{ url: 'https://github.com/V-Wong/CubeSim', title: 'Repository' }}
          image={<Image image="cubesim" />}
          dotpoints={[`A program that renders a 2D Rubik's cube with keyboard controls
                      and generates solutions based on the beginner's method.`,
            'Built in Python with Pygame for visuals and controls.']}
          tags={[{ link: 'https://www.python.org/', title: 'Python' },
          { link: 'https://www.pygame.org/news', title: 'Pygame' }]}
        />

        <ShortCard
          title="Huffman Encoding"
          subheading="Huffman Encoding Visualisation Tool"
          link1={{ url: 'https://vwong.dev/Huffman-Encoding', title: 'Live Demo' }}
          link2={{ url: 'https://github.com/V-Wong/Huffman-Encoding', title: 'Repository' }}
          image={<Image image="huffman" />}
          dotpoints={['A single page web app that generates and renders a binary Huffman tree based on the Huffman encoding algorithm.',
            'Built in Javascript with HTML5 Canvas for visuals.']}
          tags={[{ link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', title: 'Javascript' },
          { link: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API', title: 'Canvas' }]}
        />
      </TwoColumn>

      <h2 className="section-heading">Experience</h2>
      <hr />
      <section className="single-column">
        <div className="basic-card" style={{ paddingBottom: 0 }}>
          <h3 className="project-heading">Employment</h3>
          <h4 className="project-subheading">Visionstream, Sydney - Junior Developer (2020 - Present)</h4>
          <ul style={{ marginTop: '0.5rem' }}>
            <li>
              Wrote automated PL/SQL procedures and a Javascript frontend to extract and view data in forms submitted by contractors.
            </li>
            <li>
              Implemented backend functionality in PL/SQL to model and analyse work orders in the company’s management system.
            </li>
            <li>
              Created Python programs with Beautiful Soup and SQLAlchemy to scrape and store data from incoming work orders.
            </li>
          </ul>
        </div>

        <div className="basic-card" style={{ paddingBottom: 0 }}>
          <h3 className="project-heading">Education</h3>
          <h4 className="project-subheading">UNSW - BS. Computer Science and Mathematics (2019 - 2022)</h4>
          <ul style={{ marginTop: '0.5rem' }}>
            <li>
              Commended on the 2019 Faculty of Engineering Dean's List for high undergraduate achievement (85+ WAM).
            </li>
            <li>
              Taking general Computer Science major with a focus on algorithm and formal verification courses.
            </li>
            <li>
              Majoring in Mathematics with an emphasis on pure courses including abstract algebra and analysis.
            </li>
          </ul>
        </div>
      </section>

      <TwoColumn title="Course Notes">
        <ShortCard
          title="COMP3141"
          subheading="Software System Design & Implementation"
          link1={{ url: 'https://www.handbook.unsw.edu.au/undergraduate/courses/2020/COMP3141', title: 'Course Outline' }}
          link2={{ url: 'https://github.com/V-Wong/Haskell-Practice', title: 'Repository' }}
          dotpoints={['Notes on formal and informal methods of software design.',
            'Displays various techniques to analyse, implement and test software systems with mathematical methods.']}
          tags={[{ link: 'https://www.haskell.org/', title: 'Haskell' }]}
        />


        <ShortCard
          title="COMP2511"
          subheading="Object Oriented Programming"
          link1={{ url: 'https://www.handbook.unsw.edu.au/undergraduate/courses/2020/COMP2511', title: 'Course Outline' }}
          link2={{ url: 'https://github.com/V-Wong/COMP2511', title: 'Repository' }}
          dotpoints={['Notes and implementation of design patterns and principles.',
            'Demonstrates the various design techniques for creating flexible, maintainable and resusable software systems.']}
          tags={[{ link: 'https://www.java.com/en/', title: 'Java' }]}
        />

        <ShortCard
          title="COMP3821"
          subheading="Extended Algorithms"
          link1={{ url: 'https://www.handbook.unsw.edu.au/undergraduate/courses/2020/COMP3821', title: 'Course Outline' }}
          link2={{ url: 'https://github.com/V-Wong/COMP3821', title: 'Repository' }}
          dotpoints={['Repository of common algorithm implementations in Python.',
            'Showcases various important algorithms throughout Computer Science with simple Python implementations.']}
          tags={[{ link: 'https://www.python.org/', title: 'Python' },
          { link: 'https://en.wikipedia.org/wiki/Algorithm', title: 'Algorithms' }]}
        />

        <ShortCard
          title="COMP1521"
          subheading="Computer Systems Fundamentals"
          link1={{ url: 'https://www.handbook.unsw.edu.au/undergraduate/courses/2020/COMP1521', title: 'Course Outline' }}
          link2={{ url: 'https://github.com/V-Wong/COMP1521', title: 'Repository' }}
          dotpoints={['Notes on computer systems and low level architecture.',
            'Provides a view on how computer system\'s execute programs from high level code to low level instructions.']}
          tags={[{ link: 'https://en.wikipedia.org/wiki/MIPS_architecture', title: 'MIPS' },
          { link: 'https://en.wikipedia.org/wiki/C_(programming_language)', title: 'C' }]}
        />
      </TwoColumn>

      <SingleColumn title="Extracurriculars">
        <LongCard
          title="UNSW Rubik Society"
          subheading="Executive - Events Director"
          link1={{ url: 'https://www.facebook.com/UNSWRubikSoc/', title: 'Society Page' }}
          image={<Image image="rubiksoc" className="non-edgeless-image" />}
          dotpoints={["Helped organise Rubik's Cube tutorials and unofficial competitions at UNSW in Sydney.",
            "Encouraged students to find an interest and hobby in Rubik's Cubes and speedsolving.",
            'Helped existing speedcubers to improve and optimise their solves by hosting workshops.',
            'Currently working with the World Cube Association to organise official competitions.']}
          tags={[{ link: 'https://www.rubiks.com/en-us/', title: 'Rubiks Cubes' },
          { link: 'https://www.worldcubeassociation.org/', title: 'Speedcubing' }]}
        />

        <LongCard
          title="Competitive Speedsolver"
          subheading="Participant in WCA competitions"
          link1={{ url: 'https://www.worldcubeassociation.org/persons/2014WONG08', title: 'WCA Profile' }}
          image={<Image image="compcube" className="non-edgeless-image" />}
          dotpoints={['Actively participated in speedcubing competitions across Australia since 2014.',
            'Held numerous Sydney and Australian national championship podium titles.',
            "Held a former top 10 world ranking in one handed 3x3 Rubik's Cube solving.",
            'Regularly develop resources to teach solvers solving techniques and how to improve.']}
          tags={[{ link: 'https://www.rubiks.com/en-us/', title: 'Rubiks Cubes' },
          { link: 'https://www.worldcubeassociation.org/', title: 'Speedcubing' }]}
        />
      </SingleColumn>

      <Footer />
    </Layout>
  </>
);

export default IndexPage;
