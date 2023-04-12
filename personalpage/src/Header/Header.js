import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,Container,Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Header = () => {
      return (
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                SIMCHI
              </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Link to='/' >
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                      Main
                    </Button>
                  </Link>
                  <Link to='/About' >
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                      About
                    </Button>
                  </Link>
                  <Link to='/Contact' >
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                      Contact
                    </Button>
                  </Link>
            </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
}

export default Header;