import './App.css';
import Navbar from './components/Navbar.jsx'
import About from "./components/About.jsx"
import Projects from "./components/Projects.jsx"
import Skills from "./components/Skills.jsx"
import Contact from "./components/Contact.jsx"


function App() {
  return (
    <main  className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
