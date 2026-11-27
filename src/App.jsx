import Navigation from "./components/Navigation";
import ProjectCard from "./components/ProjectCard";
import Reveal from "./components/Reveal";
import SectionHeading from "./components/SectionHeading";
import { experience, profile, projects, skillGroups } from "./data/portfolio";
import "./styles/portfolio.css";

const contactLinks = [
  { label: "GitHub", value: "github.com/YevheniiLi", href: profile.github, external: true },
  { label: "LinkedIn", value: "linkedin.com/in/lymarenko", href: profile.linkedin, external: true },
  { label: "Telegram", value: "@eyeije", href: profile.telegram, external: true },
  { label: "WhatsApp", value: "+34 692 142 247", href: profile.whatsapp, external: true },
];

const App = () => (
  <div className="site-shell">
    <a className="skip-link" href="#main-content">
      Skip to main content
    </a>
    <Navigation />

    <main id="main-content">
      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="hero__grid page-width">
          <Reveal className="hero__content" delay={80}>
            <p className="eyebrow eyebrow--light">
              <span aria-hidden="true" /> React-focused Front-End Developer
            </p>
            <h1 id="hero-title">
              Interfaces that make <em>complex</em> things feel clear.
            </h1>
            <p className="hero__lead">
              I&apos;m Yevhenii, a React developer building responsive, maintainable web experiences for products people can use with confidence.
            </p>
            <div className="hero__location" aria-label="Location and role preference">
              <span>Based in Girona, Spain</span>
              <span aria-hidden="true" />
              <span>Open to Front-End &amp; junior Full-Stack roles</span>
            </div>
            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                View selected work
              </a>
              <a className="button button--secondary" href="#contact">
                Contact me
              </a>
              <a className="hero__cv" href={profile.cv} target="_blank" rel="noreferrer">
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={180}>
            <div className="hero-visual__halo" aria-hidden="true" />
            <div className="hero-visual__grid" aria-hidden="true" />
            <figure className="hero-portrait">
              <img src="/images/hero-portrait.png" alt="Yevhenii Lymarenko" width="1536" height="1024" />
              <figcaption>Building from Girona, Spain</figcaption>
            </figure>
            <div className="code-window" aria-hidden="true">
              <div className="code-window__chrome">
                <span />
                <span />
                <span />
                <p>interface.tsx</p>
              </div>
              <pre>
                <code>
                  <span>const</span> experience = {'{'}<br />
                  &nbsp;craft: <i>&quot;considered&quot;</i>,<br />
                  &nbsp;stack: [<i>&quot;React&quot;</i>, <i>&quot;TS&quot;</i>],<br />
                  &nbsp;focus: <i>&quot;people&quot;</i>
                  <br />{'}'};
                </code>
              </pre>
            </div>
            <div className="hero-visual__badge" aria-label="More than two years of React production experience">
              <strong>2+</strong>
              <span>years building<br />with React</span>
            </div>
          </Reveal>
        </div>
        <div className="hero__ticker" aria-hidden="true">
          <span>React</span><i>•</i><span>TypeScript</span><i>•</i><span>Thoughtful interfaces</span><i>•</i><span>Full-stack perspective</span><i>•</i>
          <span>React</span><i>•</i><span>TypeScript</span><i>•</i><span>Thoughtful interfaces</span><i>•</i><span>Full-stack perspective</span><i>•</i>
        </div>
      </section>

      <section id="about" className="section section--about" aria-labelledby="about-title">
        <div className="page-width about-layout">
          <Reveal className="about-copy">
            <SectionHeading id="about-title" label="01 / About" title="A front-end mindset with a product view.">
              <p>
                My focus is React development: composing clear interfaces, managing state thoughtfully, and keeping the details that make a product feel dependable.
              </p>
            </SectionHeading>
            <p className="about-copy__body">
              With 2+ years of production React experience and full-stack training behind me, I&apos;m comfortable moving from a design idea to a responsive interface, then working with APIs and the wider application where needed. I value clear code, practical collaboration, and continuous improvement inside a professional team.
            </p>
            <a className="text-link" href="#experience">See my experience</a>
          </Reveal>

          <Reveal as="aside" className="about-signal" delay={120} aria-label="Professional focus">
            <div className="about-signal__topline">
              <span>What I optimise for</span>
              <span>01—03</span>
            </div>
            <ol>
              <li>
                <strong>Clarity</strong>
                <span>Interfaces with a deliberate hierarchy and responsive behaviour.</span>
              </li>
              <li>
                <strong>Care</strong>
                <span>Accessible details and interactions that respect the user&apos;s attention.</span>
              </li>
              <li>
                <strong>Momentum</strong>
                <span>Maintainable front-end work that supports a team&apos;s next iteration.</span>
              </li>
            </ol>
          </Reveal>
        </div>
      </section>

      <section id="skills" className="section section--skills" aria-labelledby="skills-title">
        <div className="page-width">
          <Reveal>
            <SectionHeading id="skills-title" label="02 / Capabilities" title="A focused stack, organised around how products get built." align="center">
              <p>Tools are useful in context. Here&apos;s the mix I bring to front-end delivery and junior full-stack collaboration.</p>
            </SectionHeading>
          </Reveal>

          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <Reveal as="article" className="skill-card" delay={index * 90} key={group.title}>
                <p className="skill-card__eyebrow">{group.eyebrow}</p>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul className="skill-card__list">
                  {group.skills.map((skill) => (
                    <li className={group.featured.includes(skill) ? "is-featured" : ""} key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section section--projects" aria-labelledby="projects-title">
        <div className="page-width">
          <Reveal className="projects-intro">
            <SectionHeading id="projects-title" label="03 / Selected work" title="Projects shaped around real user flows.">
              <p>Three front-end builds that show different ways I work with live data, external services, and application state.</p>
            </SectionHeading>
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-link">
              Explore all repositories
            </a>
          </Reveal>

          <div className="project-list">
            {projects.map((project, index) => <ProjectCard project={project} delay={index * 110} key={project.title} />)}
          </div>
        </div>
      </section>

      <section id="experience" className="section section--experience" aria-labelledby="experience-title">
        <div className="page-width experience-layout">
          <Reveal>
            <SectionHeading id="experience-title" label="04 / Experience" title="Learning in real product and team contexts.">
              <p>A grounded route through front-end internship experience and practical full-stack development training.</p>
            </SectionHeading>
          </Reveal>

          <ol className="experience-list">
            {experience.map((item, index) => (
              <Reveal as="li" className="experience-item" delay={index * 120} key={item.title}>
                <div className="experience-item__marker" aria-hidden="true"><span /></div>
                <p className="experience-item__period">{item.period}</p>
                <article>
                  <div className="experience-item__heading">
                    <div>
                      <p className="experience-item__type">{item.type}</p>
                      <h3>{item.title}</h3>
                      <p className="experience-item__organisation">{item.organisation}</p>
                    </div>
                  </div>
                  <p className="experience-item__summary">{item.summary}</p>
                  <ul>
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="page-width contact-section__grid">
          <Reveal className="contact-section__intro">
            <p className="eyebrow eyebrow--light"><span aria-hidden="true" /> 05 / Let&apos;s talk</p>
            <h2 id="contact-title">Have a role where thoughtful front-end work matters?</h2>
            <p>
              I&apos;m interested in Front-End, React, and junior Full-Stack opportunities in Spain and across Europe. The best way to reach me is by email.
            </p>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          </Reveal>

          <Reveal as="div" className="contact-links" delay={120}>
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            ))}
          </Reveal>
        </div>
      </section>
    </main>

    <footer className="site-footer">
      <div className="page-width">
        <p>© {new Date().getFullYear()} Yevhenii Lymarenko</p>
        <p>Designed and built with React.</p>
      </div>
    </footer>
  </div>
);

export default App;
