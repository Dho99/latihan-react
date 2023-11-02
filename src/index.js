import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from './components/Intro';

const root = ReactDOM.createRoot(document.getElementById('root'));
const changeNav = () => {
  alert('Clicked');
}
root.render(
  <React.StrictMode>
    <App />
    <MyButton clicked={changeNav}/>
  </React.StrictMode>
);
