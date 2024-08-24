import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Assuming you have a root element with id 'root' in your HTML
const container = document.getElementById('root');

// Create a root and render your app
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
