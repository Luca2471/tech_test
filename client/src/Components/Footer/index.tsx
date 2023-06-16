import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

export function Footer() {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#bbdefb' }}>
      <BottomNavigation showLabels sx={{ backgroundColor: '#bbdefb' }}>
        <BottomNavigationAction label="Recents" />
        <BottomNavigationAction label="Favorites" />
        <BottomNavigationAction label="Nearby" />
      </BottomNavigation>
    </Paper>
  )
};

export default Footer;
