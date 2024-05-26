import React, { useState, useContext } from 'react';
import './DarkMode.css';

interface Theme {
    theme: string
}

export const ThemeContext = React.createContext("light");

export function DarkModeToggle(theme: Theme) {
    const [isDark, setIsDark] = useState("light");
    
    function handleClick() {
        setIsDark(isDark === theme.theme ? "dark" : "light")
    }

 return (
        <div className='toggle-bar' onClick={handleClick} data-theme = {isDark} >
            <div className={`toggle-sphere ${isDark}`}></div>
        </div>
    )
};

//export default DarkModeToggle;
