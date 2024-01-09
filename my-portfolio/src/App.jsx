import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/NavBar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/skills";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Homepage />
      <div className="background">
        <Skills />
        <Projects />
      </div>
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
