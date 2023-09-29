import React, { useState, useEffect } from "react";
import "../../Usuarios/Usuarios.css";
import { Link } from "react-router-dom";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchRandomUsers() {
      const response = await fetch("https://randomuser.me/api/?results=3");
      const data = await response.json();
      const usersData = data.results.map((user) => ({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        picture: user.picture.large,
        country: user.location.country,
      }));
      setUsers(usersData);
    }

    fetchRandomUsers();
  }, []);

  return (
    <div>
      <h1 className="users-title">3 Usuarios Aleatorios</h1>
      <ul className="users-container">
        {users.map((user, index) => (
          <li className="user-container">
            <p>{user.country}</p>
            <img className="users-image" src={user.picture} />
            <p>
              <span>Nombre:</span> {user.name}
            </p>
            <p>
              <span>Email:</span> {user.email}
            </p>
          </li>
        ))}
      </ul>
      <Link to="/">Link para volver</Link>
    </div>
  );
}

export default App;
