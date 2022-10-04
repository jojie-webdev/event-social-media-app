import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react'
import Routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Helvetica',
        my: '22px',
        mx: '27px',
        textAlign: 'center',
      }
    }
  }
})

root.render(
  <ChakraProvider theme={theme}>
    <Routes />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
