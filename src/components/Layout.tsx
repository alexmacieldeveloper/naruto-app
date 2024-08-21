import { Header } from './Header'
import { Footer } from './Footer'
import Box from '@mui/material/Box';

interface ILayoutProps {
    children: React.ReactNode
}

export const Layout:React.FC<ILayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <Box>
                {children}
            </Box>
            <Footer/>
        </>
    )
}