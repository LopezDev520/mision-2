
const obtenerDatosFormulario = formData => {
  const obj = {}
  formData.forEach((val, key) => obj[key] = val)
  return obj
}

const mostrarElemento = selector => document.querySelector(selector).classList.remove("hidden")
const ocultarElemento = selector => document.querySelector(selector).classList.add("hidden")