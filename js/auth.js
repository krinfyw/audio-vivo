
const formulario = document.querySelector("#form-login");
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 2. Escuchar el evento submit
formulario.addEventListener("submit", function (e) {
  e.preventDefault(); // Detiene la recarga

  const camposRequeridos = formulario.querySelectorAll("[required]");
  let formularioValido = true;

  // Validar campos requeridos
  camposRequeridos.forEach(function (campo) {
    if (campo.value.trim() === "") {
      campo.classList.add("campo-error");
      formularioValido = false;
    } else {
      campo.classList.remove("campo-error");
    }
  });

  //  Validar formato del correo electrónico
  const correo = document.querySelector("#correo");
  if (!patronCorreo.test(correo.value.trim())) {
    correo.classList.add("campo-error");
    formularioValido = false;
  }

  // Validar longitud de la contraseña
  const password = document.querySelector("#password");
  const claveTexto = password.value.trim();

  if (claveTexto.length < 12) {
    password.classList.add("campo-error"); // Aplica el borde rojo y fondo rosado[cite: 1, 3]
    formularioValido = false;
  }

  //Mostrar mensaje de confirmación o error según corresponda
  const mensajeConfirmacion = document.querySelector("#mensaje-login");

  if (formularioValido) {
    localStorage.setItem("sesionIniciada", "true"); // Guarda la sesión activa

    mensajeConfirmacion.textContent = "¡Sesión iniciada correctamente!";
    mensajeConfirmacion.style.color = "#2e7d32";

    setTimeout(function () {
      window.location.href = "index.html";
    }, 1000);
  } else {
    // Mensaje de error según el caso
    if (claveTexto.length > 0 && claveTexto.length < 12) {
      mensajeConfirmacion.textContent = "La contraseña debe tener al menos 12 caracteres.";
    } else {
      mensajeConfirmacion.textContent = "Por favor, completa los campos requeridos.";
    }
    mensajeConfirmacion.style.color = "#a3242f";
  }
});