const editarDatos = () => {
  const usuario = obtenerUsuario()

  // cargar los datos al modal
  $("input[name='nombre']").value = usuario.nombre
  $("input[name='correo'").value = usuario.correo
  $("input[name='documento'").value = usuario.documento

  mostrarElemento("#informacion-modal")
}

const modificarUsuario = event => {
  const usuarioModificado = obtenerDatosFormulario(new FormData(event.target))
  let usuario = obtenerUsuario()
  usuario = { ...usuario, ...usuarioModificado }

  persistirUsuario(usuario)
  window.location.href = "/perfil"
}