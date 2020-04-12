import React, { useMemo } from 'react';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { ApolloProvider } from '@apollo/react-hooks';
import api from './services/api';

import history from './services/history'
import { Router } from 'react-router-dom';
import Routes from './routes';

import Container from '@material-ui/core/Container';
import deepPurple from '@material-ui/core/colors/deepPurple';
import grey from '@material-ui/core/colors/grey';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: deepPurple[500]
          },
          secondary: {
            main: grey[500]
          }
        },
      }),
    [prefersDarkMode],
  );

  return ( 
    <ApolloProvider client={api}> 
      <ThemeProvider theme={theme}> 
        <Router history={history}> 
          <Container maxWidth="sm">
            <Routes />
          </Container>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
