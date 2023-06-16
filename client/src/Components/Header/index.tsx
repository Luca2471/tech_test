import React from 'react';
import { AppBar, Typography } from '@mui/material';

export function Header() {
  return (
    <AppBar position="static" >
      <Typography variant="h3" component="div">
        Pentest People
      </Typography>
    </AppBar>
  )
};
