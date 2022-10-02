import React, { PureComponent } from 'react';

import { AppBar, Box, Container, Button, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

const pages = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/about',
    title: 'About us',
  },
];

class Header extends PureComponent {
  render() {
    return (
      <AppBar sx={{ background: '#333' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              {pages.map((page) => (
                <Button
                  component={NavLink}
                  to={page.path}
                  key={page.title}
                  sx={{
                    my: 2,
                    color: 'white',
                    '&.active': {
                      color: 'orange',
                      fontWeight: 600,
                    },
                  }}
                  end
                >
                  {page.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}

export default Header;
