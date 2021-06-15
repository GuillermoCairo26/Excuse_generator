/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function excusa() {
    let quien = ["El perro", "Mi abuela", "Su tortuga", "Mi pájaro"];
    let accion = ["se comió", "orinó", "destrozó", "rompió"];
    let que = ["mi tarea", "las llaves", "el auto"];
    let cuando = [
      "antes de clase",
      "justo en la hora",
      "cuando terminé",
      "durante mi almuerzo",
      "mientras jugaba"
    ];

    let quienindex = Math.floor(Math.random() * quien.length);
    let accionindex = Math.floor(Math.random() * accion.length);
    let queindex = Math.floor(Math.random() * que.length);
    let cuandoindex = Math.floor(Math.random() * cuando.length);

    document.getElementById("excusa").innerHTML =
      quien[quienindex] +
      " " +
      accion[accionindex] +
      " " +
      que[queindex] +
      " " +
      cuando[cuandoindex];
  }

  console.log(excusa());
};
