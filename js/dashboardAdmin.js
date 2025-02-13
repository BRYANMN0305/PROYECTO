const body = document.body,
    sidebar = document.getElementById("sidebar"),
    toggle = document.getElementById("toggle"),
    modeSwitch = document.getElementById("modeSwitch"),
    modeText = document.getElementById("modeText");

// Verifica si el botón de menú existe antes de asignar el evento
if (toggle) {
    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close"); // Alterna la clase "close" para abrir/cerrar la barra lateral
    });
}

// Verifica si el switch de modo oscuro existe antes de asignar el evento
if (modeSwitch) {
    modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark"); // Alterna entre los modos claro y oscuro
        modeText.innerText = body.classList.contains("dark") ? "Light mode" : "Dark mode"; // Cambia el texto según el modo
    });
}

const out = () => {
    Swal.fire({
        title: "CORRECTO", // Título de la alerta
        text: "¡Ha cerrado sesión de manera correcta! Gracias por usar nuestros servicios", // Texto de la alerta
        icon: "success", // Icono de éxito
        customClass: {
            confirmButton: "botonaceptar" // Clase personalizada para el botón de confirmar
        }
    }).then(() => {
        window.location.href = "../index.html"; // Redirige a la página de inicio después de cerrar sesión
    });
}
