import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import { ArrowRight, Cpu, Wrench, Lightbulb, Mail, Linkedin, Github } from 'lucide-react'
import './styles.css'
import ScrollToTop from './ScrollToTop'

const projects = [
  {
    slug: 'cryostat-rail-mount',
    title: 'Modular Optical Rail Mount for Cryostat Integration',
    type: 'Capstone / Mechanical Design',
    accent: 'green',
    description: 'A precision mechanical system designed to support cryostat integration with spectroscopic instruments, using modular positioning, structural analysis, and hands-on fabrication.',
    details: 'This project focuses on designing a stable, adjustable, and modular mount that allows a cryostat to interface with multiple spectroscopy instruments. The system emphasizes precision alignment, structural stiffness, and repeatable positioning for optical testing.',
  },
  {
    slug: 'spectroscopy-research',
    title: 'Spectroscopy Research',
    type: 'Optical Systems / Research',
    accent: 'blue',
    description: 'Research focused on rare-earth-doped optical materials, visible to mid-IR spectroscopy, emission behavior, and laser applications.',
    details: 'This research project explores optical material behavior through spectroscopy, including absorption, emission, fluorescence, and visible to mid-infrared analysis for future laser and optical system applications.',
  },
  {
    slug: 'cad-modeling-fabrication',
    title: 'CAD Modeling & Fabrication',
    type: 'Mechanical Engineering',
    accent: 'gray',
    description: 'SolidWorks assemblies, mechanical drawings, prototype development, and fabrication-focused engineering design.',
    details: 'This project page highlights CAD modeling, mechanical drawings, manufacturing planning, and hands-on fabrication work. It includes design intent, tolerancing, part modeling, and assembly development.',
  },
  {
    slug: 'mechatronics-electrical-projects',
    title: 'Mechatronics & Electrical Projects',
    type: 'Mechatronics',
    accent: 'orange',
    description: 'Projects involving mechanical systems, electronics, controls, sensors, and integrated engineering problem solving.',
    details: 'This project area combines mechanical design with electronics, sensors, controls, and programming. The goal is to create working systems that sense, move, respond, or automate a useful task.',
  },
]

function Home() {
  return (
    <main>
      <nav className="nav">

      <Link className="logo" to="/">
          <img src="/rb-logo.png" alt="Roger Bos Logo" />
      </Link>
        
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="heroEyebrow">Engineering Portfolio</p>

         <h1>
              Turning concepts into<br />
              working systems
        </h1>

      <p className="heroSkills">
          Mechanical Engineering <span>•</span> Optical Systems <span>•</span> Research <span>•</span><br />
          Design <span>•</span> Fabrication
      </p>

        <a className="button" href="#projects">
                View Projects <ArrowRight size={26} />
        </a>
        </div>

        <div className="heroMedia">
          <div className="heroImage">
            <img
              src="/headshot.png"
              alt="Roger Bos Professional Headshot"
            />
          </div>

        </div>
      </section>

<div className="aboutSection">

  <section id="about" className="section gridTwo">
    <div>
      <p className="eyebrow">About Me</p>
      <h2>"Progress is built one iteration at a time"</h2>
    </div>

    <p>
      Every day is a new opportunity to learn, improve, and create something impactful. 
      This quote, and this website itself, reflect that mindset. Every iteration, every 
      attempt, and every prototype is one step closer to the final goal. I believe 
      Engineering is a continuous process of refining ideas, solving problems, and turning 
      concepts into working systems.
    </p>
  </section>

  <section className="section features">
    <div className="feature">
      <Wrench />
      <h3>Mechanical Design</h3>
      <p>CAD, fabrication, prototyping, fixtures, and precision mechanical systems.</p>
    </div>

    <div className="feature">
      <Cpu />
      <h3>Mechatronics</h3>
      <p>Integrated projects combining mechanical systems, electronics, sensors, and controls.</p>
    </div>

    <div className="feature">
      <Lightbulb />
      <h3>Optical Research</h3>
      <p>Spectroscopy, optical system design, laser applications, and material characterization.</p>
    </div>
  </section>

</div>

      <section id="projects" className="section">
        <p className="eyebrow">Selected Work</p>
        <h2>Projects</h2>
        <div className="projectGrid">
          {projects.map((project) => (
            <Link className={`projectCard clickableProject ${project.accent}`} to={`/projects/${project.slug}`} key={project.title}>
              <p className="projectType">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="projectLink">View Project <ArrowRight size={18} /></span>
            </Link>
          ))}
        </div>
      </section>

<section id="contact" className="section contact">
  <div>
    <p className="eyebrow">Contact</p>
    <h2>Let’s connect.</h2>

    <div className="contactLinks">
      <a href="mailto:rjbos2@gmail.com"><Mail size={18}/> Email</a>
      <a href="https://www.linkedin.com/in/roger-bos-439060274/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
      <a href="https://github.com/rjbos" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
    </div>
  </div>

  <a className="resumeButton" href="/Roger-Bos-Resume.pdf" download>
    Resume
  </a>
</section>
    </main>
  )
}

function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main>
        <nav className="nav">
          <Link className="logo" to="/">Roger Bos</Link>
        </nav>
        <section className="section">
          <p className="eyebrow">Project Not Found</p>
          <h2>This project page does not exist.</h2>
          <Link className="button" to="/">Back Home</Link>
        </section>
      </main>
    )
  }

  return (
    <main>
      <nav className="nav">
        <Link className="logo" to="/">Roger Bos</Link>
        <div className="navLinks">
          <Link to="/#projects">Projects</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </nav>

      <section className={`projectHero ${project.accent}`}>
        <div className="projectHeroText">
          <p className="eyebrow">{project.type}</p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <Link className="button" to="/">Back to Portfolio</Link>
        </div>

        <div className="projectHeroImage">
          <img src="/project-placeholder.png" alt={`${project.title} placeholder`} />
        </div>
      </section>

      <section className="section projectDetails">
        <div>
          <p className="eyebrow">Project Overview</p>
          <h2>Purpose, process, and engineering value.</h2>
        </div>
        <div className="detailCard">
          <p>{project.details}</p>
          <p>
            Replace this placeholder text with your final project summary, design requirements,
            photos, CAD screenshots, test results, calculations, and lessons learned.
          </p>
        </div>
      </section>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)


