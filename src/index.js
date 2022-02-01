import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './routers/AppRouter';
import { AuthContextProvider } from './auth/authContext';
import './index.css';

ReactDOM.render(
  <AuthContextProvider>
    <AppRouter />
  </AuthContextProvider>,
  document.getElementById('root')
);

