import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../Usuarios.css";

function UsuariosPorPais() {
  const [user, setUser] = useState({});
  const { nat } = useParams();

  //No me preguntes el por qué utilizé manipulación del dom en react mientras estaba en la clase, realmente ni yo me entiendo.
  useEffect(() => {
    async function getUsuariosPorPais() {
      const response = await fetch(`https://randomuser.me/api/?nat=${nat}`);
      const data = await response.json();
      const firstUser = data.results[0];
      setUser({
        name: `${firstUser.name.first} ${firstUser.name.last}`,
        email: firstUser.email,
        picture: firstUser.picture.large,
        country: firstUser.location.country,
      });
    }
    getUsuariosPorPais();
  }, [nat]);

  return (
    <div>
      <div className="users-container">
        <div className="user-container">
          <p>{user.country}</p>
          <img className="users-image" src={user.picture} />
          <p>
            <span>Nombre:</span> {user.name}
          </p>
          <p>
            <span>Email:</span> {user.email}
          </p>
        </div>
      </div>
      <Link to="/">Link para volver</Link>
    </div>
  );
}

export default UsuariosPorPais;
