import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link'
import { AppBar, Container, Link, Toolbar, Typography } from '@mui/material';
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
          <NextLink href='/' passHref>
            <Link>
            <Typography className={classess.brand}>amazoon</Typography>
            </Link>
          </NextLink>
          <div className={classess.grow}></div>
          <NextLink href='/card' passHref>
            <Link>card</Link>
          </NextLink>
          <NextLink href='/login' passHref>
            <Link>login</Link>
          </NextLink>
        </Toolbar>
      </AppBar>
      <Container className={classess.main}>{children}</Container>
      <footer className={classess.footer}>
        <Typography>All Right Reserved. Amazoon</Typography>
      </footer>
    </div>
  );
}
