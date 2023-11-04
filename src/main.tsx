import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import About from "./pages/About.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Post from "./pages/Post.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/post",
        element: <Post />,
      },
      // {
      //   path: "/post/:id",
      //   element: <Register />,
      // },
      // {
      //   path: "/posts/create",
      //   element: <CreatePost />,
      // },
      // {
      //   path: "/posts/edit/:id",
      //   element: <Register />,
      // },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
