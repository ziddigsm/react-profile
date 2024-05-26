import React, { useState, useContext, createContext } from 'react';
import './DarkMode.css';

interface Props {
    handleChange: boolean,
    isChecked: ()=>void
}
export const ThemeContext = createContext("light");

export function DarkModeToggle(theme: Props) {
    //const the = theme.theme;
    //const [isDark, setIsDark] = useState(the);
    //let themeContext = useContext(ThemeContext);
    //themeContext = isDark;
    function handleClick() {
        //setIsDark(isDark === the ? "dark" : "dark")
    }

 return (
        <div className='toggle'>
            <div className='toggle-bar' onClick={theme.isChecked} data-theme = {theme.handleChange ? "dark": "light"} >
            <div className={`toggle-sphere ${theme.handleChange ? "dark": "light"}`}></div>
        </div>
        </div>
    )
};

//export default DarkModeToggle;
