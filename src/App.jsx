import Navbar  from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from './pages/skills';
import Education from "./pages/education";
import Experience from "./pages/experience";
import Project from "./pages/project";
import Contact from "./pages/contact";
import SocialMediaLinks  from "./components/social";
import Footer from "./components/footer";
import "./App.css";

function App() {

  return (
    <>
      <Navbar />
      <div className="main-content">
        <Home />
        <About />
        <Skills />
        <Education />
      </div>
      <Experience />
      <Project />
      <Contact />
      <SocialMediaLinks />
      <Footer />
    </>
  );
}

export default App;