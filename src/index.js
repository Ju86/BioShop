import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import Banner from "./components/Banner";
// import Login from "./components/Login";

// const isLoggedIn = localStorage.getItem("token-info") !== null;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* {isLoggedIn ? ( */}
        <>
          <Banner />
          <App />
        </>
      {/* ) : ( */}
        {/* <Login /> */}
      {/* )} */}
    </BrowserRouter>
  </React.StrictMode>
);
