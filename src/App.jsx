import "./App.css";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import CaseStudy from "./components/CaseStudy.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="wrap rail">
          <Work />
          <CaseStudy />
          <Skills />
          <About />
          <Contact />
        </div>
      </main>
    </>
  );
}
