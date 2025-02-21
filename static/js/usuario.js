
const usuarioPlantilla = {
  edad: null,
  formaciones: [],
  documento: null,
  eventos: []
}

const guardarUsuario = usuario => {
  // Completar el usuario con otros datos
  usuario = { ...usuario, ...usuarioPlantilla }
  const strUsuario = JSON.stringify(usuario)

  localStorage.setItem("usuario", strUsuario)
}

const obtenerUsuario = () => {
  const usuarioStr = localStorage.getItem("usuario")
  if(usuarioStr) {
    const usuario = JSON.parse(usuarioStr)
    return usuario
  } else return null
}