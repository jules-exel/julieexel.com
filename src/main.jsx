import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { installTextures } from './textures';
import './styles.css';

installTextures();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
