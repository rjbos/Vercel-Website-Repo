import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, Cpu, Wrench, Lightbulb, Mail, Linkedin, Github } from 'lucide-react'
import './styles.css'

const projects = [
  {
    title: 'Modular Optical Rail Mount for Cryostat Integration',
    type: 'Capstone / Mechanical Design',
    description: 'A precision mechanical system designed to support cryostat integration with spectroscopic instruments, using modular positioning, structural analysis, and hands-on fabrication.',
  },
  {
    title: 'Spectroscopy Research',
    type: 'Optical Systems / Research',
    description: 'Research focused on rare-earth-doped optical materials, visible to mid-IR spectroscopy, emission behavior, and laser applications.',
  },
  {
    title: 'CAD Modeling & Fabrication',
    type: 'Mechanical Engineering',
    description: 'SolidWorks assemblies, mechanical drawings, prototype development, and fabrication-focused engineering design.',
  },
  {
    title: 'Mechatronics & Electrical Projects',
    type: 'Mechatronics',
    description: 'Projects involving mechanical systems, electronics, controls, sensors, and integrated engineering problem solving.',
  },
]

function App() {
  return (
    <main>
      <nav className="nav">
        <div className="logo">Roger Bos</div>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
  <div className="heroText">
    <p className="eyebrow">Engineering Portfolio</p>

    <h1>Turning concepts into working systems.</h1>

    <p className="subtitle">
      Mechanical Engineering • Optical Systems • Research • Design • Fabrication
    </p>

    <a className="button" href="#projects">
      View Projects <ArrowRight size={18} />
    </a>
  </div>

  <div className="heroImage">
    <img
      src="/headshot.png"
      alt="Roger Bos Professional Headshot"
    />
  </div>
</section>

      <section id="about" className="section gridTwo">
        <div>
          <p className="eyebrow">About Me</p>
          <h2>Designing practical engineering solutions through creativity, precision, and analysis.</h2>
        </div>
        <p>
          This engineering portfolio showcases mechanical, electrical, mechatronics, and multidisciplinary
          engineering projects I have completed or am currently developing. It includes optical system design,
          spectroscopy research, CAD modeling, and hands-on fabrication experience. The portfolio highlights
          my capstone work, technical presentations, problem-solving analysis, and innovative designs focused
          on real-world engineering applications.
        </p>
      </section>

      <section className="section features">
        <div className="feature"><Wrench /><h3>Mechanical Design</h3><p>CAD, fabrication, prototyping, fixtures, and precision mechanical systems.</p></div>
        <div className="feature"><Cpu /><h3>Mechatronics</h3><p>Integrated projects combining mechanical systems, electronics, sensors, and controls.</p></div>
        <div className="feature"><Lightbulb /><h3>Optical Research</h3><p>Spectroscopy, optical system design, laser applications, and material characterization.</p></div>
      </section>

      <section id="projects" className="section">
        <p className="eyebrow">Selected Work</p>
        <h2>Projects</h2>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <p className="projectType">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">Contact</p>
        <h2>Let’s connect.</h2>
        <div className="contactLinks">
          <a href="mailto:rjbos2@gmail.com"><Mail size={18}/> Email</a>
          <a href="#"><Linkedin size={18}/> LinkedIn</a>
          <a href="#"><Github size={18}/> GitHub</a>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
