import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Products from './Components\'/Products';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './Components\'/Login';
import { createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";

import Signup from './Components\'/Signup';
import Individual from './Components\'/Individual';
import Cart from './Components\'/Cart';
const Token=localStorage.getItem("Token")
const Router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
    },
{
  path:"/Login",
  element:Token?<Products/>:<Login/>
},{
  path:"/Signup",
  element:<Signup/>
},{
  path:"/Products",
  element:Token?<Products/>:<Login/>
},
{
  path:"/products/individual/:id/:name",element:<Individual/>
},{
  path:"/cart_feed",element:<Cart/>
}])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
   
    <RouterProvider router={Router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

