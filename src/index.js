import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Shell from './Shell.js';

/**
 * DOM element for render the React app.
 * 
 */

const root = document.getElementById('root');

/**
 * Render the app appended in the DOM with routes.
 * 
 */

ReactDOM.render(
  <BrowserRouter>
    <Shell />
  </BrowserRouter>
  ,root
);

/**
 * Register the serviceWorkers config file.
 * 
 */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceWorkers.js')
  });
}