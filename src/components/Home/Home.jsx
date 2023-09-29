import { Link } from "react-router-dom";
import "./Home.css";
import React from "react";
function Home() {
  return (
    <>
      <h1>Bienvenido, elije un link a continuación:</h1>
      <div className="user-links-container">
        <div className="random-users-section">
          <h2>Ver usuarios random:</h2>
          <Link to="/usuarios">Ver tres usuarios</Link>
        </div>
        <div className="nat-user-section">
          <h2>Ver usuarios por país:</h2>
          <Link to="/usuarios/es">Usuarios de España</Link>
          <Link to="/usuarios/br">Usuarios de Brasil</Link>
          <Link to="/usuarios/us">Usuarios de Estados Unidos</Link>
        </div>
      </div>
    </>
  );
}

export default Home;
