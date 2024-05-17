import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Avatar, AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Toolbar, IconButton, Stack, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddToPhotos from '@mui/icons-material/AddToPhotos';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalOffer from '@mui/icons-material/LocalOffer';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';

import spaceAction from '../../actions/space';
import Loading from '../loading';

function DashboardLayout({ children, user, loading=false }) {
  const [selectedSpace, setSelectedSpace] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [spaces, setSpaces] = useState([]);
  const location = useLocation();

  const getSpaces = async () => {
    var response = await spaceAction.get();
    setSpaces(response)
    var localSpace = localStorage.getItem("space");
    if (!localSpace) return;
    var findSpace = response.find(item => item._id == localSpace);
    if (findSpace){
      setSelectedSpace(findSpace.name)
    } else {
      localStorage.removeItem("space");
    }
  };

  useEffect(() => {
    getSpaces();
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSpaceChange = (event) => {
    setSelectedSpace(event.target.value);
    var findSpace = spaces.find(item => item.name = event.target.value);
    localStorage.setItem("space", findSpace._id);
    setTimeout(() => {window.location.reload()},500)
  };

  const defaultLinks = [
    [<HomeIcon />, 'Visão Geral', '/dashboard'],
    [<AddToPhotos />, 'Espaços', '/dashboard/spaces'],
    [<LocalOffer />, 'Serviços', '/dashboard/services'],
  ];

  const settingsLinks = [
    [<AccountCircleIcon />, 'Minha conta', '/dashboard/profile'],
    [<LogoutIcon />, 'Sair', '/logout'],
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, width: `calc(100% - ${drawerOpen ? 240 : 60}px)`, ml: `${drawerOpen ? 240 : 60}px`, transition: 'width 0.3s, margin-left 0.3s' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Prospera  <span style={{ fontWeight: 'bold' }}>Odonto</span>
          </Typography>
          <Avatar>{user?.name || ""}</Avatar>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={drawerOpen}
        sx={{
          width: drawerOpen ? 240 : 60,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerOpen ? 240 : 60,
            transition: 'width 0.3s',
            boxSizing: 'border-box',
          },
        }}
      >
        <Stack spacing={2} p={1}>
          <div>
            <div style={{ padding: '16px' }}>
              {drawerOpen && (
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="space-select-label">Espaço</InputLabel>
                  <Select
                    labelId="space-select-label"
                    value={selectedSpace}
                    onChange={handleSpaceChange}
                    label="Espaço"
                  >
                    {spaces.map((space) => (
                      <MenuItem key={space.name} value={space.name}>
                        {space.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </div>
            <Divider />
            <List>
              {defaultLinks.map(([icon, text, route]) => (
                <ListItem button key={text} component={Link} to={route} selected={location.pathname === route} sx={{ justifyContent: drawerOpen ? 'initial' : 'center', px: 2.5 }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: drawerOpen ? 3 : 'auto', justifyContent: 'center' }}>
                    {icon}
                  </ListItemIcon>
                  {drawerOpen && <ListItemText primary={text} />}
                </ListItem>
              ))}
            </List>
          </div>
          <div>
            <Divider />
            <List>
              {settingsLinks.map(([icon, text, route]) => (
                <ListItem button key={text} component={Link} to={route} selected={location.pathname === route} sx={{ justifyContent: drawerOpen ? 'initial' : 'center', px: 2.5 }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: drawerOpen ? 3 : 'auto', justifyContent: 'center' }}>
                    {icon}
                  </ListItemIcon>
                  {drawerOpen && <ListItemText primary={text} />}
                </ListItem>
              ))}
            </List>
          </div>
        </Stack>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, transition: 'margin-left 0.3s' }}>
        <Toolbar />
        { loading != false ? <Loading message={loading!=true && loading}/> : children}     
      </Box>
    </Box>
  );
}

export default DashboardLayout;
