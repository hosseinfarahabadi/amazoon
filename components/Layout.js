import React, { useContext } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Container,
  CssBaseline,
  Link,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useStyle from '../utiles/styles';
import { Store } from '../utiles/Store';
import Cookies from 'js-cookie';

export default function Layout({ description, title, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  console.log(darkMode);
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classess = useStyle();
  const darkModeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'on' : 'off');
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title}-Amazoon` : 'Amazoon'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classess.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classess.brand}>amazoon</Typography>
              </Link>
            </NextLink>
            <div className={classess.grow}></div>
            <Switch checked={darkMode} onChange={darkModeHandler}></Switch>
            <NextLink href="/card" passHref>
              <Link>card</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>login</Link>
            </NextLink>
          </Toolbar>
        </AppBar>
        <Container className={classess.main}>{children}</Container>
        <footer className={classess.footer}>
          <Typography>All Right Reserved. Amazoon</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
