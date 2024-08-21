import { createTheme, PaletteMode  } from '@mui/material'


export const getTheme = (mode: PaletteMode ) => ({
    palette: {
        mode,
        ...(mode === 'light' ? {
            primary: {
                main: '#f5f5f5',
            },
            secondary: {
                main: '#f2a30b',
            },
            background: {
                default: '#fdfdfd',
            },
            text: {
                primary: '#FF4500',
            },
        } : {
            primary: {
                main: '#121212',
            },
            secondary: {
                main: '#FF4500',
            },
            background: {
                default: '#0b0b0b',
            },
            text: {
                primary: '#f2a30b',
            },
        }),

    },
});


export const DarkTheme = createTheme({
    
})