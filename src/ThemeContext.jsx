import { useState, useContext, createContext } from 'react';

const ThemeContext = createContext();
const ThemeContextUpdate = createContext();

export function UseTheme() {
    return useContext(ThemeContext);
}

export function UseThemeUpdate() {
    return useContext(ThemeContextUpdate);
}

export function ThemeProvider({ children }) {
    const [isDarkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(!isDarkTheme);
    }

    return (
        <ThemeContext.Provider value={isDarkTheme}>
            <ThemeContextUpdate.Provider value={toggleTheme}>
                {children}
            </ThemeContextUpdate.Provider>
        </ThemeContext.Provider>
    );
}

export default ThemeContext;