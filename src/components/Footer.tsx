import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

export const Footer = () => {
    return (
        <Box sx={{ width:'100%', padding: '16px', clear: 'both', bottom: 0, position: 'absolute', textAlign: 'center'}} bgcolor='primary.main'>
            <Typography variant="overline" color="inherit">Desenvolvido por Álex Maciel - 2024</Typography>
        </Box>
    )
}