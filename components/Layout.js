import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import useStyle from '../utiles/styles';

export default function Layout({ children }) {
  const classess = useStyle();
  return (
    <div>
      <Head>
        <title>Amazoon</title>
      </Head>
      <AppBar position="static" className={classess.navbar}>
        <Toolbar>
          <Typography>amazoon</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classess.main}>{children}</Container>
      <footer className={classess.footer}>
        <Typography>All Right Reserved. Amazoon</Typography>
      </footer>
    </div>
  );
}
