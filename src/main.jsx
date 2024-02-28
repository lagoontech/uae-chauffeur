import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import scrollToTopOfPage from './utils/scrollToTopOfPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <scrollToTopOfPage />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
