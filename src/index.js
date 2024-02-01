import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import { BrowserRouter } from 'react-router-dom';
import "@fontsource/dancing-script";
import "@fontsource/dancing-script/400.css"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>

    <App />
    <ToastContainer />
    </Provider>
    </BrowserRouter>
 
);


