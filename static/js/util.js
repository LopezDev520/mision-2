
const obtenerDatosFormulario = formData => {
  const obj = {}
  formData.forEach((val, key) => obj[key] = val)
  return obj
}

const $ = sel => document.querySelector(sel)
const $$ = sel => document.querySelectorAll(sel)

const mostrarElemento = selector => $(selector).classList.remove("hidden")
const ocultarElemento = selector => $(selector).classList.add("hidden")