const $seccionFormaciones = $("#seccion-formaciones")
const $seccionEventos = $("#seccion-eventos")
const $seccionSolicitudSalidas = $("#seccion-solicitud-salidas")

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

const cargarFormaciones = () => {

  $seccionFormaciones.innerHTML = ""

  obtenerFormacionesActuales().forEach(formacion => {
    const htmlArticle = 
    `<article class="mini-contenedor">
      <b>${formacion.nombre}</b>
      <p>${formacion.ficha}</p>
    </article>`

    $seccionFormaciones.innerHTML += htmlArticle
  })
  
}

const cargarEventos = () => {
  $seccionEventos.innerHTML = ""

  obtenerEventosInscritos().forEach(evento => {
    const htmlArticle = 
    `<article class="mini-contenedor">
      <b>${evento.nombre}</b>
      <p>De ${evento.hora}</p>
      <p>${evento.fecha}</p>
    </article>`

    $seccionEventos.innerHTML += htmlArticle
  })
}

const cargarSolicitudesSalida = () => {
  $seccionSolicitudSalidas.innerHTML = ""

  obtenerSolicitudesSalidas().forEach(solicitudSalida => {
    const htmlArticle =
    `<article class="mini-contenedor">
      <b>Motivo: ${solicitudSalida.motivo}</b>
      <p>Desde las <b>${solicitudSalida.horaSalida}</b> hasta las <b>${solicitudSalida.horaLlegada}</b>
      <p>Estado: ${(() => {
        if (solicitudSalida.pendiente) return "<b class='pendiente'>Pendiente</b>"
        else if (solicitudSalida.permitida) return "<b class='permitida'>Permitida</b>"
        else return "<b class='no-permitida'>NO Permitida</b>"
      })()}</p>
    </article>`

    $seccionSolicitudSalidas.innerHTML = htmlArticle
  })
}

cargarFormaciones()
cargarEventos()
cargarSolicitudesSalida()