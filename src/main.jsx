import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Login from "./pages/Login";
import NotFound from "./Components/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";

import Register from "./pages/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./Components/PrivateRoute";
import Homes from "./pages/Homes";

import Blog from "./pages/Blog";
import ProductCarts from "./pages/ProductCarts";
import BlogDetails from "./pages/BlogDetails";
import Profile from "./pages/Profile";
import { HelmetProvider } from "react-helmet-async";
import AddProduct from "./pages/product/addProduct/AddProduct";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home/:id',
        element: <PrivateRoute>
          <Homes></Homes>
        </PrivateRoute>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path: 'about',
        element: <PrivateRoute>
          <About></About>
        </PrivateRoute>,
      },
      {
        path: 'products',
        element: <PrivateRoute>
          <ProductCarts></ProductCarts>
        </PrivateRoute>
      },
      {
        path: '/addProduct',
        element:<AddProduct></AddProduct>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '/blog/:id',
        element: <PrivateRoute>
          <BlogDetails></BlogDetails>
        </PrivateRoute>
      }



    ]
  },
]);

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
