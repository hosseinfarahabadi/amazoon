import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Amazoon</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>amazoon</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All Right Reserved. Amazoon</Typography>
      </footer>
    </div>
  );
}
