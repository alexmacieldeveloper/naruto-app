import { Icon, Typography, useTheme, useMediaQuery, IconButton } from '@mui/material'
import { Box } from '@mui/system'

export const Home = () => {
    const theme = useTheme();
    return (
        <Box bgcolor={theme.palette.background.default}>
            <Typography variant="h2" color={theme.palette.primary.main}>NARUTOO</Typography>
        </Box>
    )
}