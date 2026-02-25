// Animación al hacer scroll: mostrar secciones suavemente
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.classList.add('fade-in');
    }
  });
});

// Mensaje al enviar formulario
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Gracias por tu mensaje! Te contactaré pronto.');
  form.reset();
});
