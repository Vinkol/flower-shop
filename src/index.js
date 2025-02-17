import React from 'react';
import ReactDOM from 'react-dom/client';  // Обратите внимание на '.client'
import App from './App';  // Ваш компонент App

const root = ReactDOM.createRoot(document.getElementById('root'));  // Создаем корень рендеринга

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

