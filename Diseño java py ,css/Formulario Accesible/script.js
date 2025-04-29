document.getElementById("formulario-contacto").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Referencias
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
  
    // Mensajes de error
    let errores = 0;
  
    // Limpiar errores anteriores
    document.getElementById("error-nombre").textContent = "";
    document.getElementById("error-correo").textContent = "";
    document.getElementById("error-mensaje").textContent = "";
  
    // Validación nombre
    if (nombre === "") {
      document.getElementById("error-nombre").textContent = "El nombre es obligatorio.";
      errores++;
    }
  
    // Validación correo
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      document.getElementById("error-correo").textContent = "Correo electrónico no válido.";
      errores++;
    }
  
    // Validación mensaje
    if (mensaje === "") {
      document.getElementById("error-mensaje").textContent = "El mensaje es obligatorio.";
      errores++;
    }
  
    // Enviar si no hay errores
    if (errores === 0) {
      alert("Formulario enviado correctamente.");
      // Aquí podrías reiniciar el formulario o enviar los datos
      this.reset();
    }
  });
  