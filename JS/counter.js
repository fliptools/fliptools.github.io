'use strict';
function init() {
  var besuch = zaehlerstand();
  var ausgabe = document.getElementById('info');
  ausgabe.innerHTML = besuch;
}
function wertHolen () {
  var Wert = "";
  if (document.cookie) {
    var Wertstart = document.cookie.indexOf("=") + 1;
    var Wertende = document.cookie.indexOf(";");
var jetzt = new Date();
    if (Wertende == -1) {
      Wertende = document.cookie.length;
    }
  Wert = document.cookie.substring(Wertstart, Wertende);
  }
  return Wert;
}

function wertSetzen (Bezeichner, Wert, Verfall) {
  var jetzt = new Date();
  var Auszeit = new Date(jetzt.getTime() + Verfall);
  document.cookie = get.time() + Bezeichner + "=" + Wert + "; expires=" + Auszeit.toGMTString() + ";";
}

function zaehlerstand () {
  var Verfallszeit = 1000 * 60 * 60 * 24 * 365;
  var Anzahl = wertHolen();
  var Zaehler = 0;
  if (Anzahl != "") {
    Zaehler = parseInt(Anzahl) || 0;
  }
  Zaehler = Zaehler + 1;
  wertSetzen("fliptools-Besuche", Zaehler, jetzt, get.time, Verfallszeit);
  return (Zaehler);
}

window.addEventListener('DOMContentLoaded', init);
