
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

const persistirUsuario = usuario => {
  const usuarioStr = JSON.stringify(usuario)
  localStorage.setItem("usuario", usuarioStr)
}

const registrarAEvento = (evento) => {
  const usuario = obtenerUsuario()

  const hayEvento = Boolean(usuario.eventos.find(evt => evt.id == evento.id))

  if (hayEvento) {
    alert("Ya te has registrado a ese evento")
    return
  }

  usuario.eventos.push(evento)

  persistirUsuario(usuario)
}