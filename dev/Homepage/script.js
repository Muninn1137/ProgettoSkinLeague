document.addEventListener("DOMContentLoaded", function () {
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


