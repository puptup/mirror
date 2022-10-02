import React from 'react';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

function TemplatePage() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 16 }} maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
}

export default TemplatePage;
