// Esperar a que se cargue el contenido del DOM antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el botón del menú hamburguesa y el menú de navegación
    const hamburgerButton = document.querySelector(".hamb");
    const navMenu = document.querySelector("header .container nav");
    
    // Obtener todos los enlaces de navegación dentro del menú
    const navLinks = navMenu.querySelectorAll("a");
    
    // Agregar un evento de clic al botón hamburguesa
    hamburgerButton.addEventListener("click", function () {
        // Alternar la clase "active" en el menú de navegación
        navMenu.classList.toggle("active");
        
        // Alternar la clase para cambiar entre el ícono de hamburguesa y la "X"
        hamburgerButton.querySelector("i").classList.toggle("fa-rectangle-xmark");
    });
    
    // Agregar eventos de clic a cada enlace de navegación
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
            
            // Obtener el ID de la sección objetivo desde el atributo "href" del enlace
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calcular el desplazamiento necesario para que la sección objetivo quede en la parte superior de la ventana
                const offset = targetSection.getBoundingClientRect().top + window.scrollY;
                
                // Desplazarse suavemente hasta la sección objetivo
                window.scrollTo({
                    top: offset,
                    behavior: "smooth" // Agregar efecto de desplazamiento suave
                });
            }
            
            // Cerrar el menú al hacer clic en un enlace
            navMenu.classList.remove("active");
            hamburgerButton.querySelector("i").classList.remove("fa-rectangle-xmark");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const enviarButton = document.getElementById("enviar");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");

    enviarButton.addEventListener("click", function () {
        if (nombreInput.value.trim() === "" || emailInput.value.trim() === "") {
            alert("Por favor completa todos los campos.");
        } else {
            alert("Mensaje enviado exitosamente.");
        }
    });
});





