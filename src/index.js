import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
 import  './Assets/Gilroy-Font/Gilroy-SemiBold.ttf'

ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
 document.getElementById('root')
 );

