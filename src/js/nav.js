javascript
// ========================================
// MENU RESPONSIVO
// ========================================

export function initMenuToggle() {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    // Verifica se os elementos existem no HTML
    if (!menuToggle || !navMenu) {
        return;
    }

    // ====================================
    // ABRIR / FECHAR MENU
    // ====================================

    menuToggle.addEventListener("click", () => {

        // Alterna a classe "active" no menu
        navMenu.classList.toggle("active");

        // Verifica se o menu está aberto
        const isExpanded = navMenu.classList.contains("active");

        // Atualiza o atributo de acessibilidade
        menuToggle.setAttribute(
            "aria-expanded",
            String(isExpanded)
        );
    });

    // ====================================
    // FECHAR MENU AO CLICAR EM UM LINK
    // ====================================

    document.querySelectorAll(".nav-links a").forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            // Mantém a acessibilidade atualizada
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

