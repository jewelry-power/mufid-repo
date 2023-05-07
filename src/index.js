import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SidebarProvider from './hooks/SidebarContext';
import CartProvider from './hooks/CartContext';
import ProductProvider from './hooks/ProductAPI';
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { theme } from "./Theme";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
