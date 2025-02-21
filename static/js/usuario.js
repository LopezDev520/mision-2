
const usuarioPlantilla = {
  edad: null,
  formaciones: [],
  documento: null,
}

const guardarUsuario = usuario => {
  // Completar el usuario con otros datos
  usuario = { ...usuario, ...usuarioPlantilla }
  const strUsuario = JSON.stringify(usuario)

  localStorage.setItem("usuario", strUsuario)
}