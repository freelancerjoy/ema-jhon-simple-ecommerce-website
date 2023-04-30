import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import Home from "./Components/Layout/Home";
import Order from "./Components/Order/Order";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import cartProductsLoder from "./Loders/cartProductLoder";
import Signup from "./Components/Signup/Signup";
import AuthProvider from "./Provider/AuthProvider";
import PrivetRoute from "./routes/PrivetRoute";
import Checkout from "./Components/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <Shop /> },
      {
        path: "order",
        element: <Order />,
        loader: cartProductsLoder,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "checkout",
        element: (
          <PrivetRoute>
            <Checkout></Checkout>
          </PrivetRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
