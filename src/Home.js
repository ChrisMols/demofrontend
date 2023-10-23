import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { CssBaseline, Toolbar, Typography } from '@mui/material';

function HomePage() {
    return (
      <div>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <Typography>
                    Naturborgarmärket
                </Typography>
            </Toolbar>
        </AppBar>
        
      </div>
    );
  }
  
  export default HomePage;