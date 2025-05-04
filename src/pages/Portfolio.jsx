import "./portfolio.scss";
import Contact from "../components/portfolio/contact/Contact";
import Cursor from "../components/portfolio/cursor/Cursor";
import Hero from "../components/portfolio/hero/Hero";
import Parallax from "../components/portfolio/parallax/Parallax";
import Projects from "../components/portfolio/projects/Projects";
import About from "../components/portfolio/about/About";
import Skills from "../components/portfolio/skills/Skills";
import Achievements from "../components/portfolio/achievements/Achievements";
import ResidityShowcase from "../components/portfolio/residity/ResidityShowcase"; // Import the new component

const Portfolio = () => {
  return (
    <div className="about">
      {/* <Cursor /> */}
      <section id="Homepage">
        <Hero />
      </section>
      <section id="about">
        <Parallax type="Who I am" />
      </section>
      <section>
        <About />
      </section>
      <section id="skills">
        <Parallax type="What I know" />
      </section>
      <section>
        <Skills />
      </section>
      
      {/* Add the new Residity section */}
      <section id="residity">
        <Parallax type="My Company" />
      </section>
      <section
      style={{
        background: "linear-gradient(180deg, #111132, #0c0c1d)",
        height: "100%",
        width: "100%",
        scrollSnapAlign: "center",
        overflow: "hidden",
      }}
      >
        <ResidityShowcase />
      </section>
      
      <section id="achievements">
        <Parallax type="What I've done" />
      </section>
      <section>
        <Achievements />
      </section>
      <section id="projects">
        <Parallax type="What I do" />
      </section>
      <Projects />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Portfolio;