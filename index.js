document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("rentButton");
    const content = document.querySelector(".content");

    // Evento de clique no botão
    button.addEventListener("click", () => {
        window.open("https://wa.me/seuNumero", "_blank");
        content.style.display = "none";
    });

    document.addEventListener("click", (e) => {
        if (!content.contains(e.target)) {
            content.style.display = "none";
        }
    });
});
