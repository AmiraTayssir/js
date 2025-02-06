(function() {
    var $dc = {
        loadMenuItems: function(category) {
            var resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "Chargement des éléments du menu pour la catégorie : " + category;
            console.log("Chargement des éléments du menu pour la catégorie :", category);
        }
    };

    var categories = ["Lunch", "Dinner", "Sushi", "Breakfast", "Desserts"];

    function getRandomCategory() {
        var randomIndex = Math.floor(Math.random() * categories.length);
        return categories[randomIndex];
    }

    var specialsTile = document.querySelector(".specials-tile");
    specialsTile.addEventListener("click", function() {
        var randomCategory = getRandomCategory();
        $dc.loadMenuItems(randomCategory);
    });
})();
