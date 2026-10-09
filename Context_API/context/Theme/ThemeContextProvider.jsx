import { useState,useEffect } from "react"
import ThemeContext from "./ThemeContext.js"

export const ThemeContextProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    );

    const setToggledTheme = () => setThemeMode((prev) => {
        if (prev === 'light') return "dark"; else return "light";
    }
    );

    useEffect(() => { 
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            setThemeMode(e.matches ? 'dark' : 'light');
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    },[]);

    return (
        // themeMode and toggleTheme are comming from the "../context/Theme/ThemeContext.js"
        // Here value={{ themeMode, setToggledTheme}} shorthand notaion of { themeMode: themeMode, setToggledTheme: toggleTheme }
        <ThemeContext.Provider value={{ themeMode, setToggledTheme}}> 
            {children}
        </ThemeContext.Provider>
    );
}