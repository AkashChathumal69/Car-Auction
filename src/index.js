import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';  // Make sure to add the .js extension here

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
