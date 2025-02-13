// Selección del contenedor principal
const container = document.getElementById("cont");

// Selección de los botones para cambiar entre iniciar sesión y registrarse
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

// Evento para el botón de "Iniciar sesión", quita la clase "toggle" del contenedor
btnSignIn.addEventListener("click", () => {
  container.classList.remove("toggle");
});

// Evento para el botón de "Registrarse", añade la clase "toggle" al contenedor
btnSignUp.addEventListener("click", () => {
  container.classList.add("toggle");
});

// Función para manejar el proceso de iniciar sesión
const ingresar = () => {
  // Captura los valores ingresados por el usuario en los campos "Usuario" y "Contraseña"
  let user = document.getElementById("Usuario").value;
  let pass = document.getElementById("Contraseña").value;

  // Validación para campos vacíos
  if (user === "" || pass === "") {
    // Muestra una alerta con SweetAlert2 si alguno de los campos está vacío
    Swal.fire({
      icon: "error", // Tipo de icono de error
      title: "ERROR", // Título del mensaje
      text: "Algún campo está vacío, ingrese todos los datos", // Mensaje de alerta
      customClass: {
        confirmButton: "botonaceptar" // Clase CSS personalizada para el botón de confirmar
      }
    }).then(() => {
      // Limpia los campos de "Usuario" y "Contraseña" después de cerrar el mensaje
      document.getElementById("Usuario").value = "";
      document.getElementById("Contraseña").value = "";
    });
  } 
  // Verifica si los datos coinciden con las credenciales de administrador
  else if (user === "Admin" && pass === "12345") {
    // Muestra una alerta de éxito si las credenciales son correctas
    Swal.fire({
      title: "CORRECTO", // Título del mensaje
      text: "¡Ha iniciado sesión correctamente. Bienvenido, administrador: " + user + "!", // Mensaje de bienvenida
      icon: "success", // Tipo de icono de éxito
      customClass: {
        confirmButton: "botonaceptar" // Clase CSS personalizada para el botón de confirmar
      }
    }).then(() => {
      // Redirige al dashboard del administrador al hacer clic en el botón de confirmar
      window.location.href = "html/dashboardAdmin.html";
    });
  } 
  // Si las credenciales no coinciden, muestra un mensaje de error
  else {
    Swal.fire({
      icon: "error", // Tipo de icono de error
      title: "ERROR", // Título del mensaje
      text: "Los datos ingresados no son correctos. Intente nuevamente.", // Mensaje de error
      customClass: {
        confirmButton: "botonaceptar" // Clase CSS personalizada para el botón de confirmar
      }
    }).then(() => {
      // Limpia los campos de "Usuario" y "Contraseña" después de cerrar el mensaje
      document.getElementById("Usuario").value = "";
      document.getElementById("Contraseña").value = "";
    });
  }
};
