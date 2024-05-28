import "./App.css";
import Home from "./content/Home/Home";
import NavbarCompo from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./content/About/About";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import useLocalStorage from 'use-local-storage';
import { useMediaQuery } from 'react-responsive';
import { ThemeContext } from "./context/ThemeContext";
import { useEffect, useRef } from "react";

export interface themeProps {
  theme: boolean,
  isChecked: ()=>void
}

function App() {
  const systemPreference = useMediaQuery({query: '(prefers-color-scheme: dark)'});
  const [isDark, setIsDark] = useLocalStorage("isDark",systemPreference);
  const isFirstRender = useRef(true);
  console.log(isFirstRender);
  useEffect(()=>{
    if(isFirstRender.current){
      isFirstRender.current = false;
      console.log(isFirstRender);
      return;
    }
    console.log('render false');
    if(isDark === false && !isFirstRender.current){
      setTimeout(()=>{
        alert("Light Mode activated");
      },200);
      return;
    }
    else if (isDark === true && !isFirstRender.current){
      console.log('in if-else')
      setTimeout(()=>{
        alert("Dark Mode activated");
      },200);
      return;
    }

    //isFirstRender.current = true;
  },[isDark, isFirstRender])
  return (
    <>
    <ThemeContext.Provider value={{theme: isDark, isChecked: (()=>setIsDark(!isDark))}}>
    <div className = "App" data-theme = {isDark ? "dark": "light"}>
    <NavbarCompo />
    <Home />
    <About />
    <Footer />
    </div>
      <Router>
      <Routes>
      <Route path="*" element = {<Navigate to={'/'}/>}></Route>
      </Routes>
    </Router>
    </ThemeContext.Provider>
    </>
);
}

export default App;
