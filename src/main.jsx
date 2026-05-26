import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import { ArrowRight, Cpu, Wrench, Lightbulb, Mail, Linkedin, Github } from 'lucide-react'
import './styles.css'
import ScrollToTop from './ScrollToTop'

/* =========================
   Cryostat Overview Layout
   ========================= */

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
      src: '/Concept_Sketch.png', /* Use Concept_Sketch */
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

/* =========================
   Mechatronics Overview Layout
   ========================= */

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
      'Embedded systems, motor control, sensors, displays, and electromechanical automation built through hands-on Arduino and Raspberry Pi projects.',
    details:
      'This project page is a collection documenting my hands-on mechatronics labs, and my final mechatronics project. I have experience using Arduino Uno microcontrollers, embedded C/C++ programming, breadboard prototyping, sensors, displays, DC motors, stepper motors, PWM controls, serial communicatiors, solenoids, hardware/software debugging, and more to say the least.',
    stats: [
      { label: 'Platform Experience', value: 'Arduino + Pi' },
      { label: 'Lab Progression', value: '12 Labs' },
      { label: 'Final Project', value: '8 Solenoids' },
      { label: 'Core Focus', value: 'Controls' },
    ],
    skills: [
      'Arduino Uno',
      'Arduino IDE',
      'Embedded C/C++',
      'Raspberry Pi',
      'PWM Control',
      'Analog/Digital I/O',
      'DC Motors',
      'Stepper Motors',
      'L293D Motor Drivers',
      'Interrupts',
      'Serial Communication',
      '74HC595 Shift Registers',
      'Seven-Segment Displays',
      'LCD Displays',
      'DHT11 Sensors',
      'Solenoid Actuation',
      'Circuit Debugging',
      'Breadboard Prototyping',
    ],
    featuredLabs: [
      {
        title: 'LED Sequencing, PWM, and Analog Input',
        caption:
          'Built the foundation for embedded control by programming LED blink patterns, Knight Rider effects, RGB color patterns, smooth PWM breathing effects, randomized outputs, potentiometer input, and buzzer frequency control. These labs developed timing control, digital output, analog input, PWM, and basic signal generation skills.',
      },
      {
        title: 'Switch Debouncing and User Input Control',
        caption:
          'Implemented button-controlled systems using external and internal pull-up resistors, debounced logic, state tracking, and directional LED shifting. This work emphasized reliable user input, clean state transitions, and practical troubleshooting of mechanical switch behavior.',
      },
      {
        title: 'DC Motor Control and Speed Regulation',
        caption:
          'Controlled DC motors using an L293D motor driver, separate motor and logic power, on/off state control, direction switching, potentiometer-based speed adjustment, and LED status indicators for stopped, running, clockwise, and counterclockwise states.',
      },
      {
        title: 'Stepper Motor Control with Interrupts',
        caption:
          'Identified stepper motor phase windings, created an 8-step control sequence, used interrupts for on/off and direction buttons, adjusted speed through analog input, and displayed real-time motor state with LED indicators.',
      },
      {
        title: 'Serial Communication and Live Monitoring',
        caption:
          'Expanded motor control through Arduino Serial Monitor and PuTTY by printing motor status and processing typed commands such as RUN, STOP, CW, and CCW. This created a simple command-line control interface for electromechanical hardware.',
      },
      {
        title: 'Displays, Keypad Input, and Sensor Integration',
        caption:
          'Developed seven-segment display control, 74HC595 shift-register display driving, keypad scanning without external libraries, and LCD temperature output using a DHT11 sensor. These labs combined low-level pin control with user interfaces and sensor feedback.',
      },
    ],
    circuitHighlights: [
      {
        src: '/Lab12_DHT11_LCD_Temperature_Display.png',
        title: 'Lab 12: DHT11 Temperature Display Circuit',
        caption:
          'This circuit was worth including because it shows a complete sensor-to-display embedded system: a DHT11 temperature sensor feeding an Arduino-controlled LCD output. It communicates practical sensor integration, LCD wiring, timing control, and real hardware debugging.',
      },
      {
        src: '/Lab9_Serial_PuTTY_Monitor.png',
        title: 'Lab 9: Serial Communication and PuTTY Monitoring',
        caption:
          'This lab was worth including because it shows the stepper motor system being monitored through a serial terminal. It demonstrates command-based hardware control, live motor status output, and a simple debugging interface beyond just blinking outputs.',
      },
      {
        src: '/Final_Project_Final_Circuit.jpg',
        title: 'Final Project: Arduino Solenoid Driver Circuit',
        caption:
          'This final circuit was worth including because it shows the full electromechanical driver system: Arduino control, breadboarded transistor switching, external 12V actuation hardware, wiring distribution, and the solenoid outputs used to physically press keyboard keys.',
      },
      {
        src: '/Solenoid_Keypress_Closeup_Frame.jpg',
        title: 'Final Project: Solenoid Keypress Mechanism',
        caption:
          'This frame was worth including because it clearly shows the mechanical side of the project: 3D-printed solenoid housings aligned over keyboard keys and mounted to a frame to convert software timing into physical key presses.',
      },
    ],

    projectImages: [
      {
        src: '/Raspberry_Pi_Electronics_Roulette.png',
        title: 'Raspberry Pi Electronics Experimentation',
        caption:
          'Electronics prototyping with Raspberry Pi hardware, breadboards, LEDs, and jumper wiring. This experiment was inspired by Glenn K. Lockwood’s “Learning Electronics with Roulette” guide and helped build familiarity with Linux-based embedded computing, wiring layouts, and hardware experimentation.',
      },
      {
        src: '/Mechatronics_Labs_Final_Project.png',
        title: 'Arduino Lab and Final Project Title Card',
        caption:
          'Composite title image showing Arduino wiring, breadboard electronics, motor hardware, and programming work used to represent the Mechatronics Labs & Final Project page.',
      },
    ],
    finalProject: [
      {
        title: 'Electromechanical Automation Final Project',
        caption:
          'The final project used an Arduino-controlled solenoid system to physically actuate keyboard inputs. The team integrated solenoids, transistor switching circuits, 10K resistors, 1N4007 flyback diodes, a 12V power supply, a frame, 3D-printed solenoid housings, wiring, and timed software logic to automate repetitive in-game actions in Elden Ring.',
      },
      {
        title: 'Engineering Problems Solved',
        caption:
          'The project required practical troubleshooting of overheating, solenoid alignment, keyboard shifting, wiring reliability, and mechanical stability. Improvements included zip-tie retention for actuator housings, intermediary breadboards, connector changes, and better stabilization of the keyboard/circuit assembly.',
      },
      {
        title: 'Measured System Performance',
        caption:
          'The final presentation quantified the automation system at roughly 13,245 runes per bird kill in 25 seconds. With an estimated 90% success rate, the project calculated an effective output of approximately 1,716,552 runes per hour.',
      },
    ],
  },
  {

  /* =========================
  Photonics Overview Layout
  ========================= */
    
    slug: 'photonics-spectroscopy-research',
    title: 'Photonics / Spectroscopy Research',
    type: 'Photonics / Spectroscopy',
    accent: 'blue',
    image: '/ARL_Group_Photo.jpeg', /* ARL_Group_Photo.jpeg  Photonics_Spectroscopy_Title_Card.png */
    imageAlt: 'DEVCOM ARL research group photo used as the Photonics and Spectroscopy Research title card',
    description:
      'Comparative spectroscopy research on Dy³⁺-doped crystals and glasses for visible yellow and mid-infrared laser applications.',
    details:
      'This project summarizes research conducted through DEVCOM Army Research Laboratory focused on rare-earth-doped optical materials, visible-to-mid-infrared spectroscopy, emission behavior, fluorescence lifetimes, and material evaluation for compact solid-state laser sources.',
    stats: [
      { label: 'Material Systems', value: '4 Hosts' },
      { label: 'Visible Excitation', value: '450 nm' },
      { label: 'Mid-IR Excitation', value: '905–910 nm' },
      { label: 'Target Regions', value: '575–585 nm / 3–5 µm' },
    ],
    researchOutputs: [
      {
        src: '/SPIE_Paper_First_Page.png',
        title: 'SPIE Conference Paper',
        caption:
          'The written paper presents a comparative spectroscopic study of Dy³⁺-doped low-phonon crystals and glasses for visible and mid-infrared laser applications. It includes background, experimental methods, absorption/transmission spectra, visible emission results, mid-IR measurements, and conclusions.',
        link: '/Comparative_Spectroscopic_Study_Dy3_Paper.pdf',
        linkText: 'Open Paper PDF',
      },
      {
        src: '/SPIE_Poster_Card.jpg',
        title: 'SPIE Poster Presentation',
        caption:
          'The poster presents the research objective, experimental setup, material comparison, absorption spectra, yellow emission properties, mid-IR emission properties, and future work in a visual conference-poster format.',
        link: '/SPIE_Poster_Roger_Bos.pptx',
        linkText: 'Download Poster PPTX',
      },
    ],
    researchVisuals: [
      {
        src: '/ARL_Optical_Table_Setup.png',
        title: 'ARL Optical Table / Spectroscopy Setup',
        caption:
          'Research environment showing optical table alignment, laser excitation, mirrors, and spectroscopy hardware used during optical material characterization work at ARL.',
      },
      {
        src: '/ARL_Mentor_Collaboration.png',
        title: 'Research Mentorship and Collaboration',
        caption:
          'Research collaboration at ARL with Dr. Ei Ei Brown, supporting spectroscopy experiments, analysis, and professional research development.',
      },
      {
        src: '/SPIE_Paper_Transmission_Absorption.png',
        title: 'Transmission and Absorption Spectra',
        caption:
          'The paper compares optical transmission and absorption behavior for Dy:KPb₂Cl₅, Dy:BaF₂, Dy:Ga₂Ge₅S₁₃, and Dy:InF₃ to evaluate host-dependent optical quality and excitation bands.',
      },
      {
        src: '/SPIE_Paper_Yellow_Emission_Lifetimes.png',
        title: 'Yellow Emission and Lifetime Results',
        caption:
          'Visible emission spectra and lifetime measurements show strong host-dependent behavior, including dominant yellow emission near 575–585 nm and millisecond-scale decay behavior for selected hosts.',
      },
    ],
    technicalHighlights: [
      {
        title: 'Research Objective',
        caption:
          'Compared Dy³⁺-doped low-phonon crystals and glasses to assess their potential for visible yellow and mid-infrared solid-state laser applications.',
      },
      {
        title: 'Materials Studied',
        caption:
          'Investigated Dy:KPb₂Cl₅ and Dy:BaF₂ crystals, along with Dy:InF₃ and Dy:Ga₂Ge₅S₁₃ glasses, allowing comparison between crystalline and amorphous low-phonon hosts.',
      },
      {
        title: 'Visible Emission Results',
        caption:
          'Blue excitation produced dominant yellow emission near 575–585 nm from the Dy³⁺ ⁴F₉/₂ → ⁶H₁₃/₂ transition, with Dy:KPC showing the strongest and most spectrally distinct yellow emission.',
      },
      {
        title: 'Mid-IR Emission Results',
        caption:
          'Near-infrared excitation produced mid-IR emission in the 3–5 µm region for selected hosts, supporting interest in compact sources for sensing, remote detection, and defense-related optical systems.',
      },
    ],
  },
  {

  /* =========================
  CAD Overview Layout
  ========================= */

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

const engineeringJourney = [
  {
    year: '2016 - 2022',
    title: 'VEX Robotics', /* VEX Robotics and early engineering curiosity */
    label: 'Foundation',
    text: 'My interest in engineering started through VEX Robotics, where I learned how mechanisms, iteration, teamwork, and competition design could turn rough ideas into working robots.',
  },
  {
    year: '2015 - 2024',
    title: 'Boy Scouts',  /* Boy Scouts, and hands-on leadership */
    label: 'Creativity + Leadership',
    text: 'Boy Scouts and Sea Scouts helped build my creative problem-solving mindset through hands-on projects, outdoor challenges, responsibility, and leadership development as an Eagle Scout and Quartermaster.',
  },
  {
    year: 'Spring 2022',
    title: 'High School Robotics Capstone Internship Project',
    label: 'Early Engineering Internship',
    text: 'Completed an early robotics and engineering internship/capstone experience that strengthened my interest in mechanical systems, prototyping, teamwork, and practical problem solving before college.',
  },
  {
    year: '2022 - 2026',
    title: 'Norwich University Mechanical Engineering',
    label: 'Bachelor\'s Degree',
    text: 'At Norwich, I developed a stronger technical base in mechanical design, CAD, analysis, fabrication, mathematics, controls, and disciplined engineering communication.',
  },
  {
    year: 'Summer 2024',
    title: 'Glasgow Caledonian University microgravity research',
    label: 'Research Exposure',
    text: 'Supported reduced-gravity research hardware preparation, test setup, data acquisition, and system verification while working in an international research environment.',
  },
  {
    year: 'Fall & Spring 2025',
    title: 'Mechatronics automation projects',
    label: 'Embedded Systems',
    text: 'Built Arduino-based circuits, motor-control systems, sensor/display interfaces, Raspberry Pi experiments, and an electromechanical solenoid automation final project.',
  },
    {
    year: 'Summer 2025',
    title: 'Carlucci Welding & Fabrication Internship',
    label: 'Customer-Focused Design',
    text: 'Worked with customers to design and fabricate custom metal products, including welding, cutting, and finishing. Gained hands-on experience in metalworking and understanding customer requirements for practical engineering solutions.',
  },
  {
    year: 'Summer 2025',
    title: 'DEVCOM Army Research Laboratory SCIP internship',
    label: 'Photonics Research',
    text: 'Conducted spectroscopy research on Dy³⁺-doped optical materials, worked with lasers and precision optical setups, analyzed data, and developed research for SPIE Photonics West.',
  },
  {
    year: '2025 - 2026',
    title: 'Cryostat integration capstone project',
    label: 'Customer-Focused Design',
    text: 'Designed and built a modular optical rail mount that transformed an unused ARL cryostat into a mobile 3-axis spectroscopy research platform.',
  },
]

function EngineeringJourney() {
  return (
    <section className="engineeringJourneySection">
      <div className="journeyHeader">
        <p className="eyebrow">Engineering Journey</p>
        <h2>How my experience developed into mechanical, optical, and mechatronics work.</h2>
        <p>
          This timeline shows the progression behind the projects on this site: from early robotics and hands-on leadership to research, fabrication, embedded systems, and customer-focused engineering design.
        </p>
      </div>

      <div className="journeyTimeline">
        {engineeringJourney.map((item) => (
          <article className="journeyItem" key={`${item.year}-${item.title}`}>
            <div className="journeyMarker" />
            <div className="journeyCard">
              <div className="journeyMeta">
                <span>{item.year}</span>
                <strong>{item.label}</strong>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
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
  )
}

function Home() {
  return (
    <main>
      <nav className="nav">
        <Link className="logo" to="/">
          <img src="/rb-logo.png" alt="Roger Bos Logo" />
        </Link>

        <div className="navLinks">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
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

      <EngineeringJourney />

      <section id="projects" className="section">
        {/* <p className="eyebrow">Selected Work</p> */}
        <h2>Projects</h2>
        <div className="projectGrid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
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

function ResourceCard({ item }) {
  return (
    <article className="publicationCard">
      <div className="publicationPreview">
        <img src={item.src} alt={item.title} />
      </div>
      <div className="publicationBody">
        <h3>{item.title}</h3>
        <p>{item.caption}</p>
        <a className="publicationButton" href={item.link} target="_blank" rel="noreferrer">
          {item.linkText} <ArrowRight size={18} />
        </a>
      </div>
    </article>
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
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
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

function MechatronicsProjectPage({ project }) {
  return (
    <main>
      <nav className="nav">
        <Link className="logo" to="/">
          <img src="/rb-logo.png" alt="Roger Bos Logo" />
        </Link>
        <div className="navLinks">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </nav>

      <section className={`projectHero projectHeroLarge mechatronicsHero ${project.accent}`}>
        <div className="projectHeroText">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="projectHeroActions">
            <Link className="button" to="/">Back to Portfolio</Link>
            <a className="button secondaryButton" href="#final-mechatronics-project">Final Project</a>
          </div>
        </div>
        <div className="projectHeroImage projectHeroPhoto mechatronicsHeroPhoto">
          <img src={project.image} alt={project.imageAlt} />
          <p className="Group_Project_imageCaption">
            Arduino-based lab work combining electronics, controls, wiring, and programming.
          </p>
        </div>
      </section>

      <section className="section projectIntroGrid">
        <div>
          <p className="eyebrow">Project Overview</p>
          <h2>Embedded systems, circuits, sensors, motors, and controls.</h2>
          <p className="leadText">{project.details}</p>
          <p className="leadText">
            The purpose of this page is to present the work as an engineering progression rather than a list of class labs/assignments: starting with basic I/O and timing, moving into motor control and communication, and ending with my final mechatronics project which took nearly 8 weeks to fully complete.
          </p>
        </div>
        <div className="detailCard">

        <div className="mechatronicsOverviewImage">
         <div className="mechatronicsImageShader"></div>

  <img
    src="/Arduino_Pi_Embedded_Systems.png"
    alt="Arduino Uno and Raspberry Pi embedded systems setup"
  /> 

         <div className="mechatronicsOverviewOverlay">
           <h3>Arduino + Raspberry Pi</h3>

             <p>
                 Embedded systems prototyping, hardware interfacing,
                 wiring, and electronics experimentation using Arduino
                 Uno microcontrollers and Raspberry Pi systems.
             </p>
          </div>
          </div>
          { /*Right Here - Mechatronics Image and Text*/}
          {/* <div className="statGrid">
            {project.stats.map((stat) => (
              <div className="statCard" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      <ProjectNarrativeSection eyebrow="Arduino / Embedded Systems" title="Hands-on experience using Arduino Uno hardware and the Arduino IDE.">
        <p className="sectionIntro">
          I am comfortable using Arduino Uno microcontrollers and the Arduino IDE programming environment to build, upload, test, and debug embedded control programs. Across the lab sequence, I worked with digital output, analog input, PWM, switch logic, interrupts, serial communication, display control, sensor input, and motor-control hardware.
        </p>
        <div className="skillPillGrid">
          {project.skills.map((skill) => <span className="skillPill" key={skill}>{skill}</span>)}
        </div>
      </ProjectNarrativeSection>

      <ProjectNarrativeSection eyebrow="Raspberry Pi Experience" title="Additional embedded computing work with Raspberry Pi hardware.">
        <p className="sectionIntro">
          I also have experience using Raspberry Pi systems for electronics experimentation and embedded computing. This work expanded beyond Arduino-style microcontroller control and introduced Linux-based hardware interfacing, wiring experimentation, peripheral communication, and more advanced prototyping workflows.
        </p>
        <p className="sectionIntro">
          The Raspberry Pi electronics experiment shown below was developed with Glenn K. Lockwood’s <a className="inlineTextLink" href="https://blog.glennklockwood.com/2016/10/learning-electronics-with-roulette.html" target="_blank" rel="noreferrer">“Learning Electronics with Roulette”</a> as the primary reference guide.
        </p>
        <div className="imageGrid twoColumn">
          {project.projectImages.map((item) => <ImageCard item={item} key={item.title} />)}
        </div>
      </ProjectNarrativeSection>

      <ProjectNarrativeSection eyebrow="Featured Laboratory Work" title="The lab sequence built a strong base in hardware/software integration.">
        <p className="sectionIntro">
          The strongest labs are organized below by engineering skill instead of assignment number. Together, they show a progression from basic embedded I/O into motor control, communication, user interfaces, and sensor-based systems.
        </p>
        <div className="labCardGrid">
          {project.featuredLabs.map((lab) => (
            <article className="labCard" key={lab.title}>
              <h3>{lab.title}</h3>
              <p>{lab.caption}</p>
            </article>
          ))}
        </div>
      </ProjectNarrativeSection>


      <ProjectNarrativeSection eyebrow="Circuit Evidence" title="Representative circuits and mechanisms worth showing on the portfolio page.">
        <p className="sectionIntro">
          I reviewed the available lab documents and selected the visuals that best communicate engineering value: sensor-to-display integration, serial monitoring, Arduino-driven solenoid circuitry, and the physical keypress mechanism from the final project.
        </p>
        <div className="imageGrid twoColumn">
          {project.circuitHighlights.map((item) => <ImageCard item={item} key={item.title} />)}
        </div>
      </ProjectNarrativeSection>


      <ProjectNarrativeSection eyebrow="Final Project" title="Electromechanical automation using solenoids, circuits, and timed control logic.">
        <div id="final-mechatronics-project" className="finalProjectGrid">
          {project.finalProject.map((item) => (
            <article className="labCard finalProjectCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </article>
          ))}
        </div>
      </ProjectNarrativeSection>

      <ProjectNarrativeSection eyebrow="Engineering Value" title="What this project page is meant to communicate.">
        <p className="sectionIntro">
          This work demonstrates practical mechatronics capability: wiring real circuits, programming embedded devices, controlling motors and actuators, reading sensors, building simple user interfaces, and debugging hardware/software interactions. The overall experience connects mechanical engineering with electronics and software in the way real mechatronic systems are developed.
        </p>
      </ProjectNarrativeSection>
    </main>
  )
}


function PhotonicsProjectPage({ project }) {
  return (
    <main>
      <nav className="nav">
        <Link className="logo" to="/">
          <img src="/rb-logo.png" alt="Roger Bos Logo" />
        </Link>
        <div className="navLinks">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </nav>

      <section className={`projectHero projectHeroLarge photonicsHero ${project.accent}`}>
        <div className="projectHeroText">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="projectHeroActions">
            <Link className="button" to="/">Back to Portfolio</Link>
            <a className="button secondaryButton" href="#research-outputs">Paper & Poster</a>
          </div>
        </div>
        <div className="projectHeroImage projectHeroPhoto photonicsHeroPhoto">
          <img src={project.image} alt={project.imageAlt} />
          <p className="Group_Project_imageCaption">
            DEVCOM Army Research Laboratory research experience focused on spectroscopy and optical materials.
          </p>
        </div>
      </section>

      <section className="section projectIntroGrid photonicsIntroGrid">
        <div className="photonicsIntroTitle">
          <p className="eyebrow">Project Overview</p>
          <h2>Rare-earth spectroscopy for visible and mid-infrared laser applications.</h2>
        </div>

        <div className="photonicsIntroBody">
          <div className="photonicsIntroText">
            <p className="leadText">{project.details}</p>
            <p className="leadText">
              The work centered on comparing dysprosium-doped low-phonon crystals and glasses to understand how host material selection affects transmission, absorption, visible yellow emission, mid-infrared emission, and fluorescence lifetime behavior.
            </p>
          </div>

          <div className="detailCard photonicsOverviewCard">
            <div className="statGrid photonicsStatGrid">
              {project.stats.map((stat) => (
                <div className="statCard photonicsStatCard" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectNarrativeSection eyebrow="Research Output" title="The research was developed into a SPIE paper and poster presentation.">
        <p id="research-outputs" className="sectionIntro">
          The project output included a formal SPIE conference paper and a conference-style poster summarizing the motivation, experimental setup, material systems, spectroscopic results, and future research direction.
        </p>
        <div className="publicationGrid">
          {project.researchOutputs.map((item) => <ResourceCard item={item} key={item.title} />)}
        </div>
      </ProjectNarrativeSection>

      <ProjectNarrativeSection eyebrow="Research Experience" title="Hands-on spectroscopy work at DEVCOM Army Research Laboratory.">
        <p className="sectionIntro">
          This research experience connected optical materials, laser excitation, spectroscopy instrumentation, and data analysis. It also provided professional exposure to laboratory research practices, technical communication, and collaboration with ARL scientists and external research partners.
        </p>
        <div className="imageGrid twoColumn">
          {project.researchVisuals.slice(0, 2).map((item) => <ImageCard item={item} key={item.title} />)}
        </div>
      </ProjectNarrativeSection>

      <ProjectNarrativeSection eyebrow="Technical Highlights" title="The project evaluated material behavior across visible and mid-infrared wavelengths.">
        <div className="labCardGrid">
          {project.technicalHighlights.map((item) => (
            <article className="labCard photonicsHighlightCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </article>
          ))}
        </div>
      </ProjectNarrativeSection>

      <ProjectNarrativeSection eyebrow="Spectroscopic Results" title="Selected figures from the paper show the material comparison and emission behavior.">
        <p className="sectionIntro">
          The selected figures below communicate the major technical story: the materials were compared through transmission/absorption spectra, visible emission spectra, and fluorescence lifetime measurements to identify promising hosts for solid-state laser applications.
        </p>
        <div className="imageGrid twoColumn">
          {project.researchVisuals.slice(2).map((item) => <ImageCard item={item} key={item.title} />)}
        </div>
      </ProjectNarrativeSection>

      <ProjectNarrativeSection eyebrow="Engineering Value" title="What this project page is meant to communicate.">
        <p className="sectionIntro">
          This project demonstrates experience with photonics research, spectroscopy instrumentation, optical material characterization, technical writing, poster communication, and translating experimental results into engineering insight for future laser systems.
        </p>
      </ProjectNarrativeSection>
    </main>
  )
}



function AboutPage() {
  return (
    <main>
      <nav className="nav">
        <Link className="logo" to="/">
          <img src="/rb-logo.png" alt="Roger Bos Logo" />
        </Link>
        <div className="navLinks">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </nav>

      <section className="aboutPageHero">
        <div className="aboutPageText">
          <p className="eyebrow">About Roger Bos</p>
          <h1>From Robotics to Engineering</h1>
          <p>
            I became interested in engineering through VEX Robotics, where I first saw how a rough idea could become a working machine through design, testing, failure, and iteration. Robotics gave me an early foundation in mechanisms, problem solving, teamwork, and the satisfaction of building something that physically works.
          </p>
          <p>
            Boy Scouts and Sea Scouts also had a major influence on how I think. Earning Eagle Scout and serving in leadership roles taught me creativity, responsibility, planning, communication, and the value of solving practical problems with limited resources. Those experiences helped push me toward mechanical engineering because I wanted to create real systems, not just study theory.
          </p>
          <div className="aboutPageActions">
            <Link className="button" to="/#projects">View My Projects <ArrowRight size={22} /></Link>
            <a className="button secondaryButton" href="/Roger-Bos-Resume.pdf" download>Download Resume</a>
          </div>
        </div>

        <div className="aboutPagePhotoWrap">
          <img src="/Roger_Bos_Engineering_Body_Shot3.png" alt="Roger Bos in a lab environment" />  
          <p className="Group_Project_imageCaption">
            ARL Base in Adelphi Maryland
          </p>
        </div>
      </section>

      <section className="aboutStorySection">
        <div className="aboutStoryIntro">
          <p className="eyebrow">Engineering Path</p>
          <h2>My background connects mechanical design with optical systems, fabrication, and embedded hardware.</h2>
        </div>

        <div className="aboutStoryGrid">
          <article className="aboutStoryCard">
            <h3>Robotics started the path</h3>
            <p>
              VEX Robotics introduced me to engineering as an iterative process: design a mechanism, build it, test it, identify what failed, and improve it. That early exposure developed my interest in mechanical systems, prototyping, and practical problem solving.
            </p>
          </article>

          <article className="aboutStoryCard">
            <h3>Scouting built creativity and leadership</h3>
            <p>
              Boy Scouts and Sea Scouts helped me develop discipline, creativity, outdoor problem solving, and leadership. The experience of earning Eagle Scout and Quartermaster shaped how I approach challenges: stay organized, take ownership, and keep working until the system functions correctly.
            </p>
          </article>

          <article className="aboutStoryCard">
            <h3>Research expanded my technical direction</h3>
            <p>
              Through my U.S. Army Research Laboratory internship, I worked with spectroscopy, laser systems, optical characterization, and MATLAB-based data analysis. That experience helped connect my mechanical engineering background to photonics, precision optical setups, and research-focused engineering.
            </p>
          </article>

          <article className="aboutStoryCard">
            <h3>Hands-on building keeps me grounded</h3>
            <p>
              My experience includes CAD modeling, fabrication, mechanical drafting, machining support, mechatronics labs, Arduino-based control systems, and my cryostat integration capstone. I am most interested in engineering work where design decisions become physical hardware.
            </p>
          </article>
        </div>
      </section>

      <section className="aboutExperienceBand">
        <div>
          <p className="eyebrow">Current Focus</p>
          <h2>Opto-mechanical engineering, mechanical design, and systems that combine hardware, alignment, and testing.</h2>
        </div>
        <p>
          I am building a portfolio around projects that show complete engineering progression: concept development, CAD, analysis, fabrication, assembly, testing, troubleshooting, and presentation. My goal is to keep developing as an engineer who can work across mechanical design, optical systems, research instrumentation, and mechatronics.
        </p>
      </section>
    </main>
  )
}

function ProjectsPage() {
  return (
    <main>
      <nav className="nav">
        <Link className="logo" to="/">
          <img src="/rb-logo.png" alt="Roger Bos Logo" />
        </Link>
        <div className="navLinks">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </nav>

      <section className="projectsPageHero">
        <p className="eyebrow"> </p>
        <h1>Projects Page</h1>
        <p>
           
        </p>
      </section>

      <section className="section projectsPageSection">
        <div className="projectsPageHeader">
          <h2>All Projects</h2>
          <p>
            These are some of the most important projects I've completed throughout my life/early career. Many I could not have done by myself, so I'm extremly thankful to those who have helped me along my way, and have taught me invaluable life skills.
          </p>
        </div>
        <div className="projectGrid projectsPageGrid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
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

  if (project.slug === 'cryostat-rail-mount') {
    return <CryostatProjectPage project={project} />
  }

  if (project.slug === 'mechatronics-labs-final-project') {
    return <MechatronicsProjectPage project={project} />
  }

  if (project.slug === 'photonics-spectroscopy-research') {
    return <PhotonicsProjectPage project={project} />
  }

  return (
    <main>
      <nav className="nav">
        <Link className="logo" to="/">Roger Bos</Link>
        <div className="navLinks">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
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
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
