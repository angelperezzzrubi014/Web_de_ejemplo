function cambiarModo() {
  alert("el JS se ejecuta");

  const enlace = document.getElementById("tema-oscuro");
  enlace.disabled = !enlace.disabled;
}
