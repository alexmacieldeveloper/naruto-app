import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useAppThemeContext } from '../contexts/'
import logo from '../assets/logo-naruto-1.png'

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
  }

const navItems = [
    {
      name: 'Sobre',     
      href: '#sobre'
    },
    {
      name: 'Personagens',
      href: '#personagens' 
    },
    {
      name: 'Clãs',
      href: '#clas'
    },
    {
        name: 'Akatsuki',
        href: '#akatsuki'
    }
  ];

export const Header = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const theme = useTheme();
  
    const { toggleTheme } = useAppThemeContext();

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%', color: 'primary.background.default' }} bgcolor={theme.palette.background.default}>
        <List>
          {navItems.map((item, index) => (
            <ListItem disablePadding key={item.name} sx={{ margin: 'auto', width: '80%'}}>
              <ListItemButton sx={{ textAlign: 'center',
                ":hover": {
                  backgroundColor: 'rgba(35, 85, 88, 0.5)',
                  border: '1px solid rgba(35, 85, 88, 1)'
                }
              }} href={item.href}>
                <ListItemText  primary={item.name}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;

    console.log("logo", logo)
    return (
        <Box sx={{ display: 'flex', height: '69px' }} >
            <CssBaseline />
            <AppBar sx={{ boxShadow: 'none', color: 'text.primary'}}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Box>
                      <img src={logo}  alt='logo' width='100%' height='100%' />
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }}}>
                        {navItems.map((item) => (
                          <Button variant="outlined" key={item.name}  sx={{ fontSize: '18px', lineHeight: 'normal', margin: '0 10px', border: 'none', color:'text.primary' }} href={item.href}>
                              {item.name}
                          </Button>
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }}}>
                      <span>{theme.palette.mode} mode</span>
                      <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
                        {theme.palette.mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon /> }
                      </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
