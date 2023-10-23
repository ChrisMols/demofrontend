import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function SignIn() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Grid container spacing={3}>
          {/* Image on the left */}
          <Grid item xs={12} sm={6}>
            <img
              src="./images/naturesweden.jpg"
              alt="Sign In Image"
              style={{ width: '100%', height: 'auto', backgroundSize: 'cover' }}
            />
          </Grid>

          {/* Sign In Form on the right */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">Sign In</Typography>
            <form>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                required
                type="email"
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                required
                type="password"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Sign In
              </Button>
            </form>

            {/* Link to WelcomePage */}
            <Link to="/">Back to WelcomePage</Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default SignIn;

