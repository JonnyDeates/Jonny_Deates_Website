import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';


const container = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(
  <App />
);
