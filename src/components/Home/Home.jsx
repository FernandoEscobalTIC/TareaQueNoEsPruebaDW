import "./Home.css";
import React from "react";
function Home() {
  return (
    <>
      <a href="/usuarios">Ver tres usuarios</a>
      <h1>Ver usuarios por país:</h1>
      <ul>
        <li>
          <a href="/usuarios/es">Usuarios de España</a>
          <a href="/usuarios/br">Usuarios de Brasil</a>
          <a href="/usuarios/us">Usuarios de Estados Unidos</a>
        </li>
      </ul>
    </>
  );
}

export default Home;
