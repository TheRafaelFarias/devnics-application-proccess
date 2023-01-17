import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./contexts/user";
import "./index.css";
import { Router } from "./router";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router />
      <ToastContainer theme="dark" />
    </AuthContextProvider>
  </React.StrictMode>
);
