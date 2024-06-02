import "./App.css";
import Home from "./content/Home/Home";
import NavbarCompo from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./content/About/About";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import useLocalStorage from 'use-local-storage';
import { useMediaQuery } from 'react-responsive';
import { ThemeContext } from "./context/ThemeContext";

export interface themeProps {
  theme: boolean,
  isChecked: ()=>void
}

function App() {
  const systemPreference = useMediaQuery({query: '(prefers-color-scheme: dark)'});
  const [isDark, setIsDark] = useLocalStorage("isDark",systemPreference);
  
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
