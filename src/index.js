import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import  Banner  from "./components/Banner";

// const isLoggedIn = localStorage.getItem("token-info") !== null;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
  <React.StrictMode>
    <BrowserRouter>
        <Banner />
        <App />
    </BrowserRouter>
  </React.StrictMode>
  </ChakraProvider>
);
