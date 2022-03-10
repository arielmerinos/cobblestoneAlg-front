import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import './assets/fonts/Gilroy-ExtraBold.otf';
import './assets/fonts/Gilroy-Light.otf';
import App from './routes/App';
import reportWebVitals from './config/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
