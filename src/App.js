import "./styles/main.css";

import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import ScrollToTop from "./utils/scrollToTop";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
