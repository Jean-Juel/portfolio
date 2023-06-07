import {createContext} from "react";

export const ThemeContext = createContext('dark')
export const ThemeProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value="ThemeContext">
            {children}
        </ThemeContext.Provider>
    )
}