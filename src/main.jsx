import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/sass/styleMode.scss"
import "./assets/sass/styleHeader.scss"
import "./assets/sass/styleFooter.scss"
import "./assets/sass/styleHome.scss"
import "./assets/sass/styleAbout.scss"
import "./assets/sass/styleContact.scss"
import "./assets/sass/styleRegister.scss"
import "./assets/sass/styleShowrooms.scss"
import "./assets/sass/styleLogin.scss"
import "./assets/sass/styleSingleHomeProducts.scss"
import "./assets/sass/styleSingleProducts.scss"
import "./assets/sass/styleProductDetails.scss"
import "./assets/sass/styleProduct.scss"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import { ProductProvider } from './context/ProductContext.jsx'
import { CartProvider, useCart } from "react-use-cart";
import { ModeProvider } from './context/ModeContext.jsx'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css';
import './style.scss'
import "./i18n/i18next.jsx"


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
