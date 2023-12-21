import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import CartContextProvider from './ui/store/cart-context/cart-context-provider';
import { Provider } from 'react-redux';
import { configureStore } from "./ui/redux/configure-store"
import {BrowserRouter} from "react-router-dom"
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import LoginContextProvider from './ui/store/login-context.js/login-context-provider';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <PrimeReactProvider>
    <Suspense fallback={<div></div>}>
    <CartContextProvider>
    <LoginContextProvider>
      <Provider store={configureStore()}>
        <App />
      </Provider>
    </LoginContextProvider>
    </CartContextProvider>
    </Suspense>
    </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
