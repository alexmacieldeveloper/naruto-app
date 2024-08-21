import { createContext, useState, useCallback, useMemo, useContext } from 'react'
import { ThemeProvider, Box, PaletteMode, createTheme } from '@mui/material'
import { getTheme } from './../themes'

interface IThemeContextData {
    themeName: 'light' | 'dark'
    toggleTheme: () => void
}

interface IThemeProviderProps {
    children: React.ReactNode
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext)
}

export const AppThemeProvider:React.FC<IThemeProviderProps> = ({ children }) => {
    
    const [themeName, setThemeName] = useState<PaletteMode>('light');
    
    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
    },[])

    const theme = useMemo(() => createTheme(getTheme(themeName)), [themeName]);

    return (
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}