import React from "react";
import "./UsuariosPorPais";
function UsuariosPorPais(props) {
  const ul = document.getElementById("users");

  fetch(`https://randomuser.me/api/?nat=${props.nat}`)
    .then((resp) => resp.json())
    .then(function (data) {
      let users = data.results;
      return function (user) {
        let li = document.createElement("li");
        let img = document.createElement("img");
        let span = document.createElement("span");
        let p = document.createElement("p");
        img.src = user.picture.medium;
        span.innerHTML = `${user.name.first} ${user.name.last}`;
        p.innerHTML = `${user.email}`;
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(p);
        ul.appendChild(li);
      };
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <>
      <ul id="authors"></ul>
    </>
  );
}

export default UsuariosPorPais;
