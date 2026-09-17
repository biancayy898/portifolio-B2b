id="k7m2px"
// ========================================
// SCRIPT PRINCIPAL
// ========================================

import { initMenuToggle } from "./src/js/nav.js";
import { initTestimonials } from "./src/js/testimonials.js";

// ========================================
// INICIALIZAÇÃO DA PÁGINA
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // Inicializa o menu responsivo
    initMenuToggle();

    // Inicializa a seção de testimonials
    initTestimonials();
});

