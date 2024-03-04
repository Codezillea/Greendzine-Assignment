import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    
    <ToastContainer pauseOnHover= {false}  autoClose={3000} position={"bottom-right"} />
   
        <App />

 
    </Router>

  </React.StrictMode>
);
