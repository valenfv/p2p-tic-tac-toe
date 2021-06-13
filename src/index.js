import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home/Home';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);