import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/App';

import './styles/index.module.css';
import './fonts/inter/Inter-Regular.ttf';
import './fonts/forum/Forum-Regular.ttf';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
