import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from "./components/screens/Router.js";
import reportWebVitals from './reportWebVitals';
import "./assest/styles/global.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
reportWebVitals();
