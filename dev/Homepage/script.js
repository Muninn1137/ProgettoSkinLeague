document.addEventListener("DOMContentLoaded", function () {

    const filterForm = document.getElementById("filterForm");
    const articles = document.querySelectorAll(".articleContainer .article");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    const cardContainer = document.querySelector(".card-container");

    // Imposta la larghezza per ogni card
    const cardWidth = document.querySelector(".card").offsetWidth + 20; // Aggiungi 20px per il gap

    // Funzione per spostare il carousel a sinistra
    leftArrow.addEventListener("click", function () {
        cardContainer.scrollBy({
            left: -cardWidth, // Sposta a sinistra
            behavior: "smooth", // Movimento fluido
        });
    });

    // Funzione per spostare il carousel a destra
    rightArrow.addEventListener("click", function () {
        cardContainer.scrollBy({
            left: cardWidth, // Sposta a destra
            behavior: "smooth", // Movimento fluido
        });
    });
});

filterForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita il refresh della pagina

    const selectedCost = document.getElementById("cost").value;
    const selectedRarity = document.getElementById("rarity").value;
    const selectedYear = document.getElementById("year").value; // Corretto id
    const selectedBundle = document.getElementById("bundle").value;

    articles.forEach(article => {
        let shouldShow = true;
        // Controlla la rarità
        if (selectedRarity !== "all" && article.dataset.rarity !== selectedRarity) {
            shouldShow = false;
        }

        // Controlla l'anno di uscita
        if (selectedYear !== "all" && article.dataset.year !== selectedYear) {
            shouldShow = false;
        }

        // Controlla il bundle
        if (selectedBundle !== "any" && article.dataset.bundle !== selectedBundle) {
            shouldShow = false;
        }

        // Mostra o nasconde l'articolo
        article.style.display = shouldShow ? "block" : "none";
    });
});