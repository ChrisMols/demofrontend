import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './App.css';
import { Button } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from 'react-router-dom';



const headerStyle = {
  backgroundImage: 'url(/images/Kronhjort.jpg)', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '450px',
  color: 'white',
};


function WelcomePage() {
  return (
    <div>
      {/* Slanted Header */}
      <AppBar position="static" style={headerStyle} className="skewed-appbar">
        <Container>
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} sm={6}>
              <div className="centered-text">
                  <Typography variant="h2" className="straight-text">NATURBORGARMÄRKET</Typography>
                  <Typography variant="subtitle1" className="straight-text">
                    Det naturliga äventyret.
                  </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/*No image*/}
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      {/* Center Content */}
      <Container sx={{ my: 5, display: 'flex', alignItems: 'center' }}>
        <img
          src="/images/naturemark.jpg"
          alt="Center Image"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Box sx={{ ml: 2 }}>
          <Typography variant="h5">NATURBORGARMÄRKET</Typography>
          <Typography variant="body1">
          Naturborgarmärket syftar till att utveckla allmänhetens kunskap om
          olika arter som finns i vår natur. Idén går ut på att skapa ett interaktivt lärande
          där du behöver befinna dig i naturen och aktivt leta efter och se olika arter, där
          kunskapen om dessa och allemansrätten sedan sätts på prov i ett kunskapstest. Om du
          klarar av kunskapstestet så belönas du med ett fysiskt naturborgarmärke som erhålls
          genom beställning efter avklarat test.
          </Typography>
          <Link to="/home">
            <Button varaint="contained" size="large" color="success" endIcon={<ArrowCircleRightIcon />}>
              Börja här
            </Button>
          </Link>
        </Box>
      </Container>

      {/* Footer */}
      <Paper sx={{ backgroundColor: '#333', color: 'white', py: 5, textAlign: 'center', position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Your Company Name
        </Typography>
      </Paper>
    </div>
  );
}

export default WelcomePage;
