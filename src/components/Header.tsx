import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material'


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
  
    console.log("theme", theme)
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
  

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar sx={{ boxShadow: 'none'}}>
                <Toolbar>
                    <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
                        {navItems.map((item) => (
                          <Button variant="outlined" key={item.name} sx={{ fontSize: '18px', color: 'secondary.main', lineHeight: 'normal', margin: '0 10px', border: 'none' }} href={item.href}>
                              {item.name}
                          </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
