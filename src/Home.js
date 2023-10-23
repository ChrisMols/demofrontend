import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const sectionStyle = {
  padding: '2.5rem',
  background: '#f8f8f8',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  margin: '1rem auto',
  maxWidth: '1000px'
};

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '2rem 0',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0', left: '0', right: '0', zIndex: 100
};

function HomePage() {
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative" style={{ backgroundColor: '#8EA534', padding: '10px' }}>
        <Toolbar>
          {/* Hero Section */}
          <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
            <img
              src="./images/naturemark.jpg"
              alt="Naturmärket"
              style={{ width: '100px', height: '100px', marginRight: '1rem', borderRadius: '50%' }}
            />
            <Typography variant="h3" style={{ color: 'white' }}>
              Naturborgarmärket
            </Typography>
          </div>
          
          {/* Login Button and Icon */}
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto'}}>
            <Link to="/signin" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="inherit"
                startIcon={<AccountCircleIcon />}
              >
                Loggga In
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      {/* Main Content Sections */}
      <section style={sectionStyle}>
        <Typography variant="h4">Naturområde</Typography>
        <Typography variant="body1" style={{ marginTop: '0.5rem' }}>
          Gå vidare för att välja naturområde
        </Typography>
        <Link to="/select-nature-area" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" color="primary" style={{ marginTop: '1rem'}}>
            Start
          </Button>
        </Link>
      </section>

      <section style={sectionStyle}>
        <Typography variant="h4">Information om arter</Typography>
        <Typography variant="body1" style={{ marginTop: '0.5rem' }}>
          Här kan du läsa på om olika arter som finns i olika naturområden. Se bilder och beskrivningar.
        </Typography>
        <Link to="/species-information" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" color="primary" style={{ marginTop: '1rem'}}>
            Utforska
          </Button>
        </Link>
      </section>

      <section style={sectionStyle}>
        <Typography variant="h4">Om Naturborgarmärket</Typography>
        <Typography variant="body1" style={{ marginTop: '0.5rem' }}>
          Läs mer om Naturborgarmärket, allemansrättenoch se vem som stödjer vår utveckling.
        </Typography>
        <Link to="/about-us" style={{ textDecoration: 'none'}}>
          <Button variant="outlined" color="primary" style={{ marginTop: '1rem'}}>
            Läs mer
          </Button>
        </Link>
      </section>

      {/* Footer Section */}
      <div style={footerStyle}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Naturborgarmärket
        </Typography>
      </div>



    </div>
  );
}

export default HomePage;
