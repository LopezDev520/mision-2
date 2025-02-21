
const eventos = [
  {
    id: 1,
    urlImagen: "/static/images/evento-1.jpg",
    nombre: "Charla",
    fecha: "22 de Febrero",
    hora: "3:00 P.M - 5:00 P.M",
    lugar: "Sena Tamaco"
  }, {
    id: 2,
    urlImagen: "/static/images/evento-2.jfif",
    nombre: "Actividad deportiva",
    fecha: "22 de Febrero",
    hora: "4:00 P.M - 6:00 P.M",
    lugar: "Sena Tamaco"
  }
]

const $eventos = $("#eventos")

const registrarEvento = evento => {
  registrarAEvento(evento)
  renderizarEventos()
}

const renderizarEventos = () => {
  $eventos.innerHTML = ""

  const usuario = obtenerUsuario()

  eventos.forEach((evento, i) => {
    
    const yaEstaRegistrado = Boolean(usuario.eventos.find(evt => evt.id == evento.id))

    const eventoHTML = `
    <div class="evento col">
      <img width="400" src="${evento.urlImagen}" alt="">

      <div class="col gap-05 padding-sm">
        <h3>${evento.nombre}</h3>
        <div class="row gap-05">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000000" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z"/></svg>
          ${evento.fecha}
        </div>

        <div class="row gap-05">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#000000" stroke-width="2"><circle cx="12" cy="12" r="7"/><path stroke-linecap="round" d="M5.965 3.136a4 4 0 0 0-2.829 2.829m14.899-2.829a4 4 0 0 1 2.829 2.829M12 8v3.75c0 .138.112.25.25.25H15"/></g></svg>
          ${evento.hora}
        </div>

        <div class="row gap-05">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000000" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"/></svg>
          ${evento.lugar}
        </div>

        <div class="row align-center justify-center">
          <button ${yaEstaRegistrado ? "disabled" : ""} onclick="registrarEvento(eventos[${i}]);">
            ${yaEstaRegistrado ? "Ya estas registrado" : "Registrarme"}
          </button>
        </div>
      </div>
    </div>
    `

    $eventos.innerHTML += eventoHTML
  })
}

renderizarEventos()