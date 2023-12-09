import React, { useState } from 'react';
import { AppBar, Box, Typography, Toolbar } from '@mui/material';

export function Header() {

    return (
        <Box sx={{ flexGrow: 1, width: '100%' }}>
        <AppBar position="static" sx={{ backgroundColor: '#00008B', height: '90px' }}>
          <Toolbar>
            <Typography variant="h2" sx={{ flexGrow: 1, paddingTop: '40px', paddingBottom: '40px' }}>
              Online Bookstore
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );

}