
function esHoraValida(hora1, hora2) {
  // Convertir las horas a minutos totales desde la medianoche
  function convertirAMinutos(hora) {
      const [hh, mm] = hora.split(':').map(Number);
      return hh * 60 + mm;
  }

  const minutosHora1 = convertirAMinutos(hora1);
  const minutosHora2 = convertirAMinutos(hora2);

  // Comparar los minutos totales
  return minutosHora1 > minutosHora2;
}

const solicitarSalida = event => {
  const { horaLlegada, horaSalida, motivo } = obtenerDatosFormulario(new FormData(event.target))
  
  if (!esHoraValida(horaLlegada, horaSalida)) {
    alert("La hora no es valida")
    return
  }

  if (!motivo) {
    alert("Escriba el motivo de su salida")
    return
  }

  

}