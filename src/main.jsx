import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import UsuariosPorPais from "./components/Usuarios/PorPais/UsuariosPorPais.jsx";
import UsuariosTresRandom from "./components/Usuarios/TresUsuarios/UsuariosTresRandom.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/usuarios",
    element: <UsuariosTresRandom />,
  },
  {
    path: "/usuarios/es",
    element: <UsuariosPorPais nat={"es"} />,
  },
  {
    path: "/usuarios/br",
    element: <UsuariosPorPais nat={"br"} />,
  },
  {
    path: "/usuarios/us",
    element: <UsuariosPorPais nat={"us"} />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
