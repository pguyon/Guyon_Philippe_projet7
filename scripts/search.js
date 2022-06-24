const result = document.getElementById("main__search");

//Searchbar function

function mainSearch() {
  let filteredRecipes = recipes;

  result.addEventListener("input", (e) => {
    let inputValue = e.target.value.toLowerCase();
    if (inputValue.length >= 3) {
      const newRecipeTable = [];
      for (let i = 0; i < filteredRecipes.length; i++) {
        const food = filteredRecipes[i];
        let ingredientsIncluded = false;
        for (let j = 0; j < food.ingredients.length; j++) {
          if (
            food.ingredients[j].ingredient.toLowerCase().includes(inputValue)
          ) {
            ingredientsIncluded = true;
          }
        }
        if (
          food.name.toLowerCase().includes(inputValue) ||
          food.description.toLowerCase().includes(inputValue) ||
          ingredientsIncluded
        ) {
          newRecipeTable.push(food);
        }
      }

      if (filteredRecipes.length === 0) {
        document.querySelector(".recipe__gallery").textContent =
          "Aucune recette ne correspond à vos critères";
      } else {
        createCard(newRecipeTable);
      }
    } else {
      createCard(filteredRecipes);
    }
  });
}
mainSearch();
