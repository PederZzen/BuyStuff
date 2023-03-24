import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ShoppingCartContext from './context/ShoppingCartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShoppingCartContext>
        <App />
      </ShoppingCartContext>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
