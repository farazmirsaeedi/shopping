import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Login from "./components/Login"

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import SignUp from './components/Signup.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/shopping",
    element: <App />
  },
  {
    path: "/shopping/shopping",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: (<h1 className='text-4xl text-orange-400 uppercase text-center mt-20'>not found</h1>)
  },
  {
    path: "/signup",
    element: <SignUp />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
