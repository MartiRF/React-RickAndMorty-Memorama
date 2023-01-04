import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MemoProvider } from './context/MemoProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <MemoProvider>
    <App />
  </MemoProvider>
  // </React.StrictMode>
);