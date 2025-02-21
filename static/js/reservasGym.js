
const solicitarHoraReserva = event => {
    const solicitud = obtenerDatosFormulario(new FormData(event.target))
    console.log(solicitud)
  }