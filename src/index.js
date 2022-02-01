import React from 'react';
import ReactDOM from 'react-dom';

// import { GifExpertApp } from './components/gifs-component/GifExpertApp';
// import { TodoApp } from './components/tasks-component/TodoApp';
// import { Homepage } from './pages/Homepage';
import { AppRouter } from './routers/AppRouter';

import './index.css';


ReactDOM.render(
    <AppRouter />,
  document.getElementById('root')
);

