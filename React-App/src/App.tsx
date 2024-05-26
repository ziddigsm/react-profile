import { useContext, useState } from "react";
import "./App.css";
import Home from "./content/Home";
import NavbarCompo from "./components/Navbar";
import Education from "./content/Education";
import Footer from "./components/Footer";
import About from "./content/About";
import { BrowserRouter as Router } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import Typewriter from "./components/ListGroup";
import {DarkModeToggle, ThemeContext} from './components/DarkMode'

function App() {
  const [isDark, setIsDark] = useState(false);
  const themeContext = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={`${isDark ? "dark": "light"}`}>
      <Router>
      <div className = "App" data-theme = {isDark ? "dark": "light"}>
    <NavbarCompo theme = {isDark ? "dark": "light"}/>

    <Home theme = {isDark ? "dark": "light"} />
    <About theme = {isDark ? "dark": "light"} />
    <Footer theme = {isDark ? "dark": "light"} />
  </div>
    </Router>
    </ThemeContext.Provider>
);
}

export default App;
