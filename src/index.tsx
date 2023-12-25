import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';

const rootEl = document.querySelector('#app');
if (!rootEl) throw new Error('Cannot find app element with that id');
const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
