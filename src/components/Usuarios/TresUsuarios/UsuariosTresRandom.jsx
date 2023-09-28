import { useState } from "react";
import React from "react";
import "./UsuariosTresRandom.css";
function UsuariosTresRandom() {
  const ul = document.getElementById("users");

  fetch("https://randomuser.me/api/?results=3")
    .then((resp) => resp.json())
    .then(function (data) {
      let users = data.results;
      return users.map(function (user) {
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
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <>
      <div className="random-users">
        <ul id="users"></ul>
      </div>
    </>
  );
}

export default UsuariosTresRandom;
