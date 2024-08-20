import { createContext, useState, useCallback, useMemo, useContext } from 'react'
import { ThemeProvider, Box } from '@mui/material'
import { DarkTheme, LightTheme } from './../themes'

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
    
    const [themeName, setThemeName] = useState<'light' | 'dark'> ('light')
    
    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
    },[])

    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme

        return DarkTheme
    },[themeName])

    return (
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={DarkTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}