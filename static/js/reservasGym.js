
const solicitarReserva = event => {
    const solicitud = obtenerDatosFormulario(new FormData(event.target))
    alert("Reserva de gym enviada")
  }