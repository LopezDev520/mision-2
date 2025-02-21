
document.addEventListener("DOMContentLoaded", () => {

  const usuario = obtenerUsuario()
  $("#nombre-usuario").textContent = usuario.nombre
  
})