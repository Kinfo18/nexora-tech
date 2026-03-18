// src/scripts/scrollReveal.ts
// Inicializa el Intersection Observer que activa las animaciones de scroll.
// Se importa UNA sola vez desde BaseLayout para que funcione en todas las páginas.

export function initScrollReveal() {
  const elements = document.querySelectorAll<HTMLElement>('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('is-visible');
          // Una vez visible no vuelve a ocultarse
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((el) => observer.observe(el));
}

// Ejecutar al cargar y en cada navegación de Astro (View Transitions)
document.addEventListener('DOMContentLoaded', initScrollReveal);
document.addEventListener('astro:page-load',   initScrollReveal);
