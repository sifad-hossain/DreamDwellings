
import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root"
import NotFound from "../Components/NotFound";
import Home from "../pages/home/home/Home";
import PrivateRoute from "./PrivateRoute";
import Homes from "../shared/homeDetails/Homes";
import Login from "../pages/login/Login";
import Profile from "../Components/Profile";
import About from "../pages/about/About";
import ProductCarts from "../pages/productCart/ProductCarts";
import AddProduct from "../pages/product/addProduct/AddProduct";
import Register from "../pages/register/Register";
import Blog from "../pages/blog/Blog";
import BlogDetails from "../pages/blog/BlogDetails";
export const router = createBrowserRouter([
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
                element: <AddProduct></AddProduct>
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
    }
])

