import { useContext, useState } from "react";
import "./App.css";
import Home from "./content/Home/Home";
import NavbarCompo from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./content/About/About";
import { BrowserRouter as Router } from "react-router-dom";
import useLocalStorage from 'use-local-storage';
import { useMediaQuery } from 'react-responsive';

function App() {
  const systemPreference = useMediaQuery({query: '(prefers-color-scheme: dark)'});
  window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark",systemPreference);
  return (
      <Router>
      <div className = "App" data-theme = {isDark ? "dark": "light"}>
    <NavbarCompo theme = {isDark ? "dark": "light"} isChecked={()=>setIsDark(!isDark)}/>
    <Home theme = {isDark ? "dark": "light"} />
    <About theme = {isDark ? "dark": "light"} />
    <Footer theme = {isDark ? "dark": "light"} />
  </div>
    </Router>
);
}

export default App;
