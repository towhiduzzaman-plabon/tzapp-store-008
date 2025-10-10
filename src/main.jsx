import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import AppDetails from "./pages/AppDetails";
import Installations from "./pages/Installations";
import Error404 from "./pages/Error404";
import "@fortawesome/fontawesome-free/css/all.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // root-rendering/loader error
    errorElement: <Error404 />,

    children: [
      { index: true, element: <Home /> },
      { path: "apps", element: <Apps /> },
      { path: "apps/:id", element: <AppDetails /> },
      { path: "installation", element: <Installations /> },

      // UNMATCHED child routes => 404 (header/footer)
      { path: "*", element: <Error404 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
