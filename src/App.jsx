import BackToTop from "./components/common/BackToTop";
import Footer from "./components/layout/Footer";
import Navbar from "../src/components/layout/Navbar";
import About from "../src/components/sections/About";
import Contact from "../src/components/sections/Contact";
import Education from "../src/components/sections/Eductaion";
import Hero from "../src/components/sections/Hero";
import Projects from "../src/components/sections/Projects";
import Skills from "../src/components/sections/Skills";
import Stats from "../src/components/sections/Stats";
import TechStack from "../src/components/sections/TechStack";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Skills />
      <Projects />
      <Stats />
      <Education />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
