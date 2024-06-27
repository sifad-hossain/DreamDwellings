import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import {router} from "./routes/Router"
import "./index.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from "react-helmet-async";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <HelmetProvider>

      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
); 
