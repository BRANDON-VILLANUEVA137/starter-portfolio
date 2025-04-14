// Selecciona el botón para cambiar entre modo claro y oscuro
const toggleBtn = document.getElementById("modo-toggle");

// Agrega un listener al botón para cambiar la clase del <body> cuando se hace clic
toggleBtn.addEventListener("click", () => {
  // Alterna (agrega o quita) la clase 'dark-mode' al body
  document.body.classList.toggle("dark-mode");
});

// Selecciona todas las secciones del sitio (hero, sobre mí, proyectos, etc.)
const sections = document.querySelectorAll("section");

/**
 * Función para mostrar secciones conforme el usuario hace scroll.
 * Agrega la clase 'visible' cuando la sección entra al viewport.
 */
const showOnScroll = () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;

    // Si la sección está cerca de entrar en pantalla (100px antes del borde inferior del viewport)
    if (top < window.innerHeight - 100) {
      // Añade la clase 'visible' (se puede usar en CSS para animar la entrada)
      sec.classList.add("visible");
    }
  });
};

// Ejecuta showOnScroll cada vez que el usuario hace scroll
window.addEventListener("scroll", showOnScroll);

// También ejecuta showOnScroll al cargar la página para mostrar las secciones ya visibles
window.addEventListener("load", showOnScroll);
