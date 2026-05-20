import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import { ArrowRight, Cpu, Wrench, Lightbulb, Mail, Linkedin, Github } from 'lucide-react'
import './styles.css'
import ScrollToTop from './ScrollToTop'

const cryostatProject = {
  slug: 'cryostat-rail-mount',
  title: 'Modular Optical Rail Mount for Cryostat Integration',
  type: 'Capstone / Mechanical Design',
  accent: 'green',
  image: '/Group_photo.jpeg',
  imageAlt: 'Capstone team presenting the completed modular optical rail mount for cryostat integration',
  description:
    'Mechanical engineering capstone project that transformed an unused ARL cryostat into a mobile, 3-dimensional spectroscopy research platform.',
  details:
      'Designed and built a modular, adjustable cryostat mounting system that enables precise, stable, and repeatable positioning for 3 axes. This allows ARL to fully utilize its existing cryostat by taking temperature-dependent tests with the spectrophotometer, Fluorolog, FTIR, and future lab instruments.',

      stats: [
    { label: 'Budget', value: '< $5,000' },
    { label: 'Motion Control (Fine & Coarse)', value: 'X / Y / Z' },
    { label: 'Operational lifetime', value: '> 6 Years' },
    { label: 'Center of Gravity', value: '<1/2 Height' },
  ],
  quickBullets: [
   // 'Designed for temperature-dependent absorbance, emission, and fluorescence testing.',
   // 'Built around a battery-powered mobile lift cart for transport and coarse Z-axis adjustment.',
   // 'Used T-slot framing, linear stages, Thorlabs hardware, and machined aluminum interface plates.',
   // 'Validated the cantilevered support with SolidWorks analysis and hand calculations.',
  ],
  designEvolution: [
    {
      src: '/Roger_Concept_Sketch.png',
      title: 'Initial Concept Sketch',
      caption:
        'This early concept communicated the major architecture: a powered scissor-lift style cart for coarse vertical positioning, extendable rail support, and the cryostat mounted upside down so the optical opening could interface with spectroscopy equipment.',
    },
    {
      src: '/Group_Final_Concept_Sketch.png',
      title: 'Final Group Concept Selection',
      caption:
        'The selected concept refined the idea into a cantilevered cryostat support with T-slot rails, X/Y sliding stages, a Z-axis control stack, and a mobile cart base. This sketch shows the layout that became the basis for the final CAD model and fabricated assembly.',
    },
  ],
  cadModels: [
    {
      src: '/Overall_Adjustable_Cryostat_Mount_CAD.png',
      title: 'Overall Adjustable Cryostat Mount Assembly',
      caption:
        'The full CAD assembly shows the three primary subsystems working together: the cart, the adjustable mount, and the cryostat. This model was used to verify packaging, alignment, and the overall system layout before fabrication.',
    },
    {
      src: '/McMaster_Carr_Mobile_Cart_CAD.png',
      title: 'Mobile Lift Cart Subsystem',
      caption:
        'The cart provides the foundation, lab mobility, and coarse Z-axis height adjustment. It also keeps the system usable between instruments without rebuilding the experimental setup.',
    },
    {
      src: '/Adjustable_Mounting_Subsystem_CAD.png',
      title: 'Adjustable Mounting Subsystem',
      caption:
        'This subsystem connects the cryostat to the cart through custom plates, vertical supports, T-slot framing, cross-slide hardware, and linear motion components for fine X/Y positioning.',
    },
    {
      src: '/ARL_Cryostat_CAD.png',
      title: 'ARL Cryostat Interface',
      caption:
        'The cryostat was treated as the critical customer-owned instrument. The mount was designed around its geometry, optical access needs, and required orientation for temperature-dependent testing.',
    },
  ],
  manufacturing: [
    {
      src: '/BOM_Table.png',
      title: 'Bill of Materials and Purchased Components',
      caption:
        'The BOM captured the major purchased hardware, dimensions, quantities, prices, suppliers, and receiving status. Key items included the McMaster-Carr lift table, 6061 aluminum plate and tubing, T-slot framing, Thorlabs brackets/platform hardware, and linear actuator hardware.',
    },
    {
      src: '/Gantt_Chart.png',
      title: 'Project Timeline / Gantt Chart',
      caption:
        'The Gantt chart documented the full capstone schedule from customer requirements and concept development through CAD modeling, purchasing, manufacturing, final assembly, poster presentation, and report completion.',
    },
  ],
  analysis: [
    {
      src: '/Stress_Analysis_TSlot_Framing.png',
      title: 'SolidWorks Stress Analysis',
      caption:
        'The T-slot cantilever beam was simulated under cryostat loading to verify the structure would not approach failure. The result supported the use of 6061 aluminum framing for the final build.',
    },
    {
      src: '/Center_of_Gravity_Assembly.png',
      title: 'Center of Gravity: Mount Assembly',
      caption:
        'The CAD model was checked to make sure the extended cryostat and mount kept the center of gravity over the supported structure, reducing tipping risk during operation.',
    },
    {
      src: '/Center_of_Gravity_With_Cart.png',
      title: 'Center of Gravity: Full Cart Assembly',
      caption:
        'The full cart-and-mount analysis showed the overall center of gravity remained under the tabletop and within the cart footprint, supporting stability during lab use.',
    },
    {
      src: '/Maximum_Stress_Hand_Calculation.png',
      title: 'Hand Calculation Verification',
      caption:
        'Hand calculations were used to check the cantilevered beam behavior against the SolidWorks results. The calculated stress remained within acceptable limits and the deflection was negligible for the application.',
    },
  ],
  finalBuild: [
    {
      src: '/Cart_overview.jpg',
      title: 'Completed Mobile Assembly',
      caption:
        'The final product mounted to the battery-powered lift cart, showing the full structure, lift base, rails, and cryostat support assembly.',
    },
    {
      src: '/Mount_Close_Up.jpg',
      title: 'Mount and Rail Detail',
      caption:
        'Close-up view of the optical rail, vertical supports, linear stages, handwheel controls, and cryostat interface hardware.',
    },
  ],
}

const projects = [
  cryostatProject,
  {
    slug: 'mechatronics-labs-final-project',
    title: 'Mechatronics Labs & Final Project',
    type: 'Mechatronics / Controls',
    accent: 'orange',
    image: '/Mechatronics_Labs_Final_Project.png',
    imageAlt: 'Mechatronics labs and final project title card showing Arduino wiring, breadboard LEDs, motor hardware, and code',
    description:
      'Integrated mechanical, electrical, and programming labs using Arduino, sensors, motors, LEDs, and control logic to create working mechatronic systems.',
    details:
      'This project page will document hands-on mechatronics labs and the final project, showing how electrical components, mechanical hardware, and code were integrated into working test setups.',
  },
  {
    slug: 'photonics-spectroscopy-research',
    title: 'Photonics / Spectroscopy Research',
    type: 'Photonics / Spectroscopy',
    accent: 'blue',
    image: '/Photonics_Spectroscopy_Title_Card.png',
    imageAlt: 'Photonics and spectroscopy research title card',
    description:
      'Research focused on rare-earth-doped optical materials, visible to mid-IR spectroscopy, emission behavior, and laser applications.',
    details:
      'This research project explores optical material behavior through spectroscopy, including absorption, emission, fluorescence, and visible to mid-infrared analysis for future laser and optical system applications.',
  },
  {
    slug: 'cad-models-drawings-fabrication',
    title: 'CAD Models, Drawings & Fabrication',
    type: 'Mechanical Design / Fabrication',
    accent: 'gray',
    image: '/CAD_Models_Drawings_Fabrication_Title_Card.png',
    imageAlt: 'CAD models drawings and fabrication title card',
    description:
      'SolidWorks assemblies, mechanical drawings, prototype development, and fabrication-focused engineering design.',
    details:
      'This project page highlights CAD modeling, mechanical drawings, manufacturing planning, and hands-on fabrication work. It includes design intent, tolerancing, part modeling, and assembly development.',
  },
  {
    slug: 'personal-electronic-projects',
    title: 'Personal Electronic Projects',
    type: 'Electronics / Prototyping',
    accent: 'green',
    image: '/Personal_Electronic_Projects_Title_Card.png',
    imageAlt: 'Personal electronic projects title card',
    description:
      'Independent electronics projects involving circuits, sensors, embedded systems, wiring, troubleshooting, and functional prototypes.',
    details:
      'This project page will collect personal electronics builds and experiments, with emphasis on wiring, component selection, debugging, and turning small electronic concepts into working prototypes.',
  },
  {
    slug: 'vex-robotics-hs-capstone-project',
    title: 'VEX Robotics & HS Capstone Project',
    type: 'Robotics / Engineering Education',
    accent: 'orange',
    image: '/VEX_Robotics_HS_Capstone_Title_Card.png',
    imageAlt: 'VEX robotics and high school capstone project title card',
    description:
      'Robotics and early engineering projects focused on mechanisms, competition design, prototyping, and problem solving.',
    details:
      'This project page will cover robotics design experience from VEX and high school capstone work, including mechanism design, iterative prototyping, and early exposure to engineering problem solving.',
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
            Turning <br />
            concepts into<br />
            working systems
          </h1>
          <p className="heroSkills">
            Mechanical Engineering <span>•</span> Optical Systems <span>•</span> Research <span>•</span><br />
            Design <span>•</span> Fabrication <span>•</span> Mechatronics <span>•</span> Robotics
          </p>
          <a className="button" href="#projects">
            View Projects <ArrowRight size={26} />
          </a>
        </div>

        <div className="heroMedia">
          <div className="heroImage">
            <img src="/headshot.png" alt="Roger Bos Professional Headshot" />
          </div>
        </div>
      </section>

      <div className="aboutSection">
        <section id="about" className="section gridTwo">
          <div>
            <p className="heroEyebrow2">Engineering Principle</p>
            <h2>"Progress is built one iteration at a time"</h2>
          </div>
          <p>
            Every day is a new opportunity to learn, improve, and create something impactful.
            This quote, and this website itself, reflects that mindset. Every iteration, every
            attempt, and every prototype is one step closer to the final goal. I believe
            engineering is a continuous process of refining ideas, solving problems, and turning
            concepts into working systems.
          </p>
        </section>

        <section className="section features">
          <div className="feature">
            <div className="featureHeader">
              <Wrench />
              <h3>Mechanical Design</h3>
            </div>
            <p>
              CAD modeling, 3D printing, prototyping, fabricating, creating fixtures, performing FMEA,
              designing precision mechanical systems, using SolidWorks/Fusion 360 and hands-on
              engineering.
            </p>
          </div>
          <div className="feature">
            <div className="featureHeader">
              <Cpu />
              <h3>Mechatronics & Robotics</h3>
            </div>
            <p>
              Embedded systems, robotics, sensors, controls, automation, and integrated projects
              combining mechanical, electrical, and software-driven engineering systems.
            </p>
          </div>
          <div className="feature">
            <div className="featureHeader">
              <Lightbulb />
              <h3>Photonics Research</h3>
            </div>
            <p>
              Spectroscopy, optical system design, laser applications, material characterization,
              and rare-earth optical research focused on visible and mid-infrared systems.
            </p>
          </div>
        </section>
      </div>

      <section id="projects" className="section">
        {/* <p className="eyebrow">Selected Work</p> */}
        <h2>Projects</h2>
        <div className="projectGrid">
          {projects.map((project) => (
            <Link className={`projectCard clickableProject ${project.accent}`} to={`/projects/${project.slug}`} key={project.title}>
              {project.image && (
                <div className="projectCardImage">
                  <img src={project.image} alt={project.imageAlt || project.title} />
                  <div className="projectCardOverlay">
                    <p>{project.title}</p>
                  </div>
                </div>
              )}
              <div className="projectCardBody">
                <p className="projectType">{project.type}</p>
                <p>{project.description}</p>
                <span className="projectLink">View Project <ArrowRight size={18} /></span>
              </div>
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

function ImageCard({ item }) {
  return (
    <figure className="imageCard">
      <img src={item.src} alt={item.title} />
      <figcaption>
        <h3>{item.title}</h3>
        <p>{item.caption}</p>
      </figcaption>
    </figure>
  )
}

function ProjectNarrativeSection({ eyebrow, title, children }) {
  return (
    <section className="section projectNarrativeSection">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function CryostatProjectPage({ project }) {
  return (
    <main>
      <nav className="nav">
        <Link className="logo" to="/">
          <img src="/rb-logo.png" alt="Roger Bos Logo" />
        </Link>
        <div className="navLinks">
          <Link to="/#projects">Projects</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </nav>

      <section className={`projectHero projectHeroLarge ${project.accent}`}>
        <div className="projectHeroText">
          {/* <p className="eyebrow">{project.type}</p> */}
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="projectHeroActions">
            <Link className="button" to="/">Back to Portfolio</Link>
            <a className="button secondaryButton" href="#final-build">Final Build Photos</a>
          </div>
        </div>
        <div className="projectHeroImage projectHeroPhoto">
          <img src={project.image} alt={project.imageAlt} />
            <p className="Group_Project_imageCaption">
             Left to Right: Roger Bos, John Shaffer, Alain Juneau, & Ben Carlson.
           </p>
        </div>
      </section>

      <section className="section projectIntroGrid">
        <div>
          <p className="eyebrow">Project Overview</p>
          <h2>Purpose, process, and Overall Design Goal</h2>
          <p className="leadText">{project.details}</p>
        </div>
        <div className="detailCard">
          <div className="statGrid">
            {project.stats.map((stat) => (
              <div className="statCard" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <ul className="projectBulletList">
            {project.quickBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        </div>
      </section>

      <ProjectNarrativeSection eyebrow="Design Evolution" title="The project moved from rough concepts into a selected mechanical architecture.">
        <p className="sectionIntro">
          The sketches show how the team translated the customer problem into a physical system: support the cryostat, keep it aligned, make it mobile, and allow controlled positioning in multiple axes.
        </p>
        <div className="imageGrid twoColumn">
          {project.designEvolution.map((item) => <ImageCard item={item} key={item.title} />)}
        </div>
      </ProjectNarrativeSection>

      <ProjectNarrativeSection eyebrow="CAD Development" title="The CAD models connected the cart, mount, and cryostat into one buildable system.">
        <p className="sectionIntro">
          These models were used to check packaging, interfaces, stability, hardware integration, and the relationship between the purchased components and the manufactured aluminum plates.
        </p>
        <div className="imageGrid twoColumn">
          {project.cadModels.map((item) => <ImageCard item={item} key={item.title} />)}
        </div>
      </ProjectNarrativeSection>

      <ProjectNarrativeSection eyebrow="Manufacturing / BOM" title="The build combined purchased hardware with custom-machined interface plates.">
        <p className="sectionIntro">
          The manufacturing plan focused on keeping the project under budget while still using reliable mechanical components where precision and stiffness mattered most.
        </p>
        <div className="imageGrid twoColumn">
          {project.manufacturing.map((item) => <ImageCard item={item} key={item.title} />)}
        </div>
      </ProjectNarrativeSection>

      <ProjectNarrativeSection eyebrow="Analysis" title="The structure was checked for stress, deflection, and tipping risk.">
        <p className="sectionIntro">
          The analysis section demonstrates that the design was not just assembled, but engineered. SolidWorks simulation and hand calculations were used to confirm that the cantilevered rail could support the cryostat and that the cart-mounted system stayed stable.
        </p>
        <div className="imageGrid twoColumn">
          {project.analysis.map((item) => <ImageCard item={item} key={item.title} />)}
        </div>
      </ProjectNarrativeSection>

      <ProjectNarrativeSection eyebrow="Final Build Photos" title="The completed system became a working mobile cryostat mount." >
        <div id="final-build" className="imageGrid twoColumn finalBuildGrid">
          {project.finalBuild.map((item) => <ImageCard item={item} key={item.title} />)}
        </div>
      </ProjectNarrativeSection>
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

  if (project.slug === 'cryostat-rail-mount') {
    return <CryostatProjectPage project={project} />
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
          {/* <p className="eyebrow">{project.type}</p> */}
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
