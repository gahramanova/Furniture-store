import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/sass/styleMode.scss"
import "./assets/sass/styleHeader.scss"
import "./assets/sass/styleFooter.scss"
import "./assets/sass/styleHome.scss"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import { ProductProvider } from './context/ProductContext.jsx'
import { CartProvider, useCart } from "react-use-cart";
import { ModeProvider } from './context/ModeContext.jsx'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css';
import './style.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModeProvider>
    <ProductProvider>
      <CartProvider>
        <App/>
        </CartProvider>
      </ProductProvider>
    </ModeProvider>
  </React.StrictMode>
);
