import { createContext } from 'react'

const ThemeContext = createContext({
    themeMode: "light",
    toggleTheme: undefined
});

export default ThemeContext;