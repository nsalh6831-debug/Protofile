import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import { projects } from "./data.js";

function getProjectIdFromHash() {
  const match = window.location.hash.match(/^#\/project\/(.+)$/);
  return match ? match[1] : null;
}

export default function App() {
  const [projectId, setProjectId] = useState(getProjectIdFromHash());

  useEffect(() => {
    const onHashChange = () => {
      setProjectId(getProjectIdFromHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const activeProject = projectId ? projects.find((p) => p.id === projectId) : null;

  return (
    <>
      <Nav />
      <main>
        {activeProject ? (
          <ProjectDetail project={activeProject} />
        ) : (
          <>
            <Hero />
            <div className="wrap rail">
              <Work />
              <Skills />
              <About />
              <Contact />
            </div>
          </>
        )}
      </main>
    </>
  );
}
