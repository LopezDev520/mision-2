
const registro = event => {
  const usuario = obtenerDatosFormulario(new FormData(event.target))
  guardarUsuario(usuario)

  document.querySelector("#nombre-usuario").textContent = usuario.nombre
  mostrarElemento("#modal-bienvenida")
  setTimeout(() => {
    window.location.href = "/inicio"
  }, 5000)
}