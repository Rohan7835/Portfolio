import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    company: "Kellton Tech",
    location: "Gurugram",
    role: "Senior Software Engineer",
    period: "July 2022 — Present",
    summary: "Leading responsive web application delivery with React, Next.js, and TypeScript while partnering with product, design, and engineering teams.",
    highlights: [
      "Drive frontend architecture, performance monitoring, caching, and application optimization.",
      "Run code reviews and quality practices using SonarQube, linting, Git, and JIRA.",
      "Mentor junior developers and create documentation that improves onboarding and delivery.",
      "Build Claude-powered prompts and agent workflows to accelerate debugging and automate repetitive engineering work.",
    ],
  },
  {
    company: "Tech9logy Creators",
    location: "Faridabad",
    role: "Web / React Developer",
    period: "February 2021 — July 2022",
    summary: "Developed high-quality e-commerce experiences, dashboards, wallets, subscription systems, and analytics interfaces.",
    highlights: [
      "Built responsive interfaces with React, Redux, and SCSS across devices and browsers.",
      "Integrated Razorpay and Paytm payment flows for secure online transactions.",
      "Created charts and data visualizations that helped clients understand product analytics.",
    ],
  },
  {
    company: "Independent",
    location: "Faridabad",
    role: "Web Developer",
    period: "July 2019 — February 2021",
    summary: "Designed and delivered tailored frontend solutions for clients across websites, dashboards, and interactive applications.",
    highlights: [
      "Translated client requirements into responsive interfaces with HTML, CSS, JavaScript, and React.",
      "Implemented REST API integrations, testing, debugging, and Git-based version control.",
    ],
  },
];

const projects = [
  {
    number: "01",
    name: "ONDC",
    type: "Digital commerce infrastructure",
    period: "2023 — Present",
    description: "Contributing to India’s government-backed digital commerce network connecting buyers and sellers, with a focus on caching, optimization, and frontend performance.",
    tags: ["React", "Redux", "Tailwind", "Styled Components"],
    accent: "lime",
  },
  {
    number: "02",
    name: "Zuno",
    type: "Edelweiss insurance platform",
    period: "2022 — 2023",
    description: "Built customer journeys for insurance purchases and renewals in an Agile product environment using a modern, strongly typed frontend stack.",
    tags: ["Next.js", "TypeScript", "Agile", "Insurance"],
    accent: "violet",
  },
  {
    number: "03",
    name: "Krishi Cress",
    type: "Farm-to-table e-commerce",
    period: "2021 — 2022",
    description: "Developed an e-commerce experience with payments, subscriptions, wallet, credit, loyalty, and referral features for a premium produce platform.",
    tags: ["React", "Redux", "SCSS", "Razorpay"],
    accent: "orange",
    link: "https://krishicress.com",
  },
  {
    number: "04",
    name: "WalletCore",
    type: "Crypto operations dashboard",
    period: "2020",
    description: "Created a secure dashboard covering authentication, password management, API keys, wallet addresses, balances, and transfers.",
    tags: ["React", "REST APIs", "Dashboard", "Web3"],
    accent: "blue",
    link: "https://designprogress.in",
  },
  {
    number: "05",
    name: "DexLabs",
    type: "Web3 product experience",
    period: "Independent project",
    description: "Designed and implemented an eight-page product website spanning the homepage, token presale, and staking functionality.",
    tags: ["Frontend", "Responsive UI", "Web3", "Staking"],
    accent: "pink",
    link: "https://designprogress.in",
  },
  {
    number: "06",
    name: "Pokemon City",
    type: "NFT marketplace",
    period: "Independent project",
    description: "Developed a digital marketplace experience that enables collectors to discover, buy, and sell NFT cards.",
    tags: ["React", "Marketplace", "NFT", "Web3"],
    accent: "yellow",
    link: "https://designprogress.in",
  },
];

const skillGroups = [
  { title: "Frontend core", skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { title: "UI & state", skills: ["Redux", "Tailwind CSS", "SCSS / Sass", "Bootstrap", "jQuery", "Responsive Design"] },
  { title: "Engineering", skills: ["Performance", "REST APIs", "Testing & Debugging", "Cloud Concepts", "Git", "SonarQube", "JIRA"] },
  { title: "AI & leadership", skills: ["Claude AI", "Prompt Engineering", "AI Agents", "Automation", "Component Architecture", "UX Design", "SDLC", "Code Reviews", "Mentoring"] },
];

const getCorporateExperienceYears = () => {
  const corporateStart = new Date(2021, 1, 1);
  const today = new Date();
  let completedYears = today.getFullYear() - corporateStart.getFullYear();
  const anniversaryHasPassed =
    today.getMonth() > corporateStart.getMonth() ||
    (today.getMonth() === corporateStart.getMonth() &&
      today.getDate() >= corporateStart.getDate());

  if (!anniversaryHasPassed) completedYears -= 1;
  return Math.max(completedYears, 0);
};

const Reveal = ({ children, className = "", delay = 0 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add("is-visible");
        observer.unobserve(element);
      }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className={`reveal ${className}`} style={{ "--reveal-delay": `${delay}ms` }}>
      {children}
    </div>
  );
};

const ArrowIcon = () => <span aria-hidden="true">↗</span>;

const Home = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const corporateExperienceYears = getCorporateExperienceYears();
  const resumeUrl = `${import.meta.env.BASE_URL}Rohan-Chauhan-Resume.pdf`;

  return (
    <main id="main-content">
      <section className="hero section-wrap" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow"><span className="status-dot" /> Available for meaningful opportunities</div>
            <h1>I build frontend systems that feel <em>effortless.</em></h1>
            <p className="hero-intro">I&apos;m <strong>Rohan Chauhan</strong>, a Senior Software Engineer with {corporateExperienceYears}+ years of corporate experience creating fast, scalable, and thoughtful web products.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowIcon /></a>
              <a className="button button-ghost" href={resumeUrl} download>Download résumé <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className="hero-visual" aria-label="A visual summary of Rohan's frontend engineering focus">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="visual-core">
              <span className="visual-code">&lt;RC /&gt;</span>
              <strong>Frontend<br />Engineer</strong>
              <small>React · Next.js · TypeScript</small>
            </div>
            <div className="floating-pill pill-top">Performance first</div>
            <div className="floating-pill pill-right">{corporateExperienceYears}+ years</div>
            <div className="floating-pill pill-bottom">AI-assisted</div>
          </div>
        </div>

        <div className="hero-meta">
          <div><span>Currently</span><strong>Kellton Tech</strong></div>
          <div><span>Based in</span><strong>Faridabad, India</strong></div>
          <div><span>Specializing in</span><strong>Frontend Architecture</strong></div>
          <a href="#about" className="scroll-cue"><span>Scroll to discover</span><i>↓</i></a>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((group) => (
            <div className="ticker-group" key={group}>
              <span>React.js</span><i>✦</i><span>Next.js</span><i>✦</i><span>TypeScript</span><i>✦</i><span>Performance</span><i>✦</i><span>AI Automation</span><i>✦</i>
            </div>
          ))}
        </div>
      </div>

      <section className="section-wrap section" id="about">
        <Reveal className="section-heading-grid">
          <div><p className="eyebrow">01 / About</p><h2>Engineering with intent.</h2></div>
          <p className="section-lead">I turn complex product requirements into reliable, polished interfaces—balancing user experience, maintainability, and business goals from the first commit to production.</p>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-story">
            <p>My work spans digital commerce, insurance, e-commerce, fintech, and Web3. I collaborate closely with product managers and designers, establish frontend patterns, review code, improve performance, and help teams ship with confidence.</p>
            <p>I&apos;m also exploring practical AI-assisted development—building reusable prompts and Claude agent workflows that reduce repetitive work, speed up debugging, and improve engineering quality.</p>
            <a className="text-link" href="#experience">See how I work <ArrowIcon /></a>
          </Reveal>
          <Reveal className="award-card" delay={120}>
            <div className="award-icon">✦</div><p>Recognition</p><h3>Champion of the Quarter</h3><span>Kellton Tech · Q1 2025</span><small>Exceptional performance and spot recognition.</small>
          </Reveal>
          <Reveal className="metric-card" delay={220}>
            <strong>{corporateExperienceYears}+</strong><span>years of corporate<br />engineering experience</span><div className="metric-line" /><small>Since February 2021</small>
          </Reveal>
        </div>
      </section>

      <section className="section-wrap section experience-section" id="experience">
        <Reveal className="section-heading-grid">
          <div><p className="eyebrow">02 / Experience</p><h2>Built through ownership.</h2></div>
          <p className="section-lead">From independent client work to leading frontend delivery for large digital products.</p>
        </Reveal>
        <Reveal className="experience-layout">
          <div className="experience-tabs" role="tablist" aria-label="Work experience">
            {experiences.map((experience, index) => (
              <button type="button" role="tab" aria-selected={activeExperience === index} className={activeExperience === index ? "is-active" : ""} onClick={() => setActiveExperience(index)} key={experience.company}>
                <span>0{index + 1}</span><strong>{experience.company}</strong><small>{experience.period}</small>
              </button>
            ))}
          </div>
          <article className="experience-detail" key={activeExperience}>
            <div className="experience-title">
              <div><p>{experiences[activeExperience].company} · {experiences[activeExperience].location}</p><h3>{experiences[activeExperience].role}</h3></div>
              <span>{experiences[activeExperience].period}</span>
            </div>
            <p className="experience-summary">{experiences[activeExperience].summary}</p>
            <ul>{experiences[activeExperience].highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          </article>
        </Reveal>
      </section>

      <section className="section-wrap section" id="work">
        <Reveal className="section-heading-grid work-heading">
          <div><p className="eyebrow">03 / Selected work</p><h2>Products with purpose.</h2></div>
          <p className="section-lead">A selection of commerce, insurance, fintech, and Web3 platforms delivered across my career.</p>
        </Reveal>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal className={`project-card accent-${project.accent}`} delay={(index % 2) * 100} key={project.name}>
              <div className="project-topline"><span>{project.number}</span><span>{project.period}</span></div>
              <div className="project-art" aria-hidden="true"><div className="project-shape shape-one" /><div className="project-shape shape-two" /><span>{project.name.slice(0, 2).toUpperCase()}</span></div>
              <p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p>
              <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              {project.link && <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>View website <ArrowIcon /></a>}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-wrap">
          <Reveal className="section-heading-grid">
            <div><p className="eyebrow">04 / Capabilities</p><h2>A modern frontend toolkit.</h2></div>
            <p className="section-lead">Hands-on technologies paired with architecture, collaboration, and product thinking.</p>
          </Reveal>
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <Reveal className="skill-group" delay={index * 80} key={group.title}>
                <span className="skill-number">0{index + 1}</span><h3>{group.title}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </Reveal>
            ))}
          </div>
          <Reveal className="credentials">
            <div><p className="eyebrow">Education</p><h3>Bachelor of Computer Applications</h3><span>DAV Institute of Management, Faridabad · 2020</span></div>
            <div><p className="eyebrow">Beyond code</p><h3>Communication that travels</h3><span>English & Hindi · Agile & Scrum collaboration</span></div>
          </Reveal>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap"><Reveal>
          <p className="eyebrow">05 / Contact</p><h2>Have an ambitious product in mind?</h2><p>Let&apos;s build something fast, useful, and beautifully engineered.</p>
          <a className="contact-email" href="mailto:rohan.s7835@gmail.com">rohan.s7835@gmail.com <ArrowIcon /></a>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/rohan-chauhan" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
            <a href="tel:+917835882372">+91 78358 82372 <ArrowIcon /></a>
            <a href={resumeUrl} download>Résumé <span aria-hidden="true">↓</span></a>
          </div>
        </Reveal></div>
      </section>

      <footer className="site-footer section-wrap">
        <p>© {new Date().getFullYear()} Rohan Chauhan</p><p>Senior Software Engineer · Faridabad, India</p><a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
};

export default Home;
