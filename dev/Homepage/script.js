document.addEventListener("DOMContentLoaded", function () {
    const filterForm = document.getElementById("filterForm");
    const articles = document.querySelectorAll(".articleContainer .article");

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
});