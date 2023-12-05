import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro/intro";
import Skill from "./Components/Skills/Skill";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
      <Navbar/>  
          <Routes>
                <Route path="/" element={<Intro/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/skill" element={<Skill/>} />
                <Route path="/projects" element={<Project/>} />
                <Route path="/contact" element={<Contact/>} />
         </Routes>
         </Router>
         </>   
  );
  }
export default App

  
