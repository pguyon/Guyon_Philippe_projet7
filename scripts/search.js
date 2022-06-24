//Searchbar function

const mainSearch = () => {
  let filteredRecipes = recipes;
  const result = document.getElementById("main__search").value.toLowerCase();

  // Tag filters
  document.querySelectorAll("#resume__filter a").forEach((tag) => {
    const tagInput = tag.textContent.toLocaleLowerCase();
    filteredRecipes = filteredRecipes.filter(
      (food) =>
        food.ingredients.some((item) =>
          item.ingredient.toLowerCase().includes(tagInput)
        ) ||
        food.appliance.toLowerCase().includes(tagInput) ||
        food.ustensils.some((ustensil) =>
          ustensil.toLowerCase().includes(tagInput)
        )
    );
    updateContent(filteredRecipes);
  });

  // SearchBar

  if (result.length >= 3) {
    const newRecipeTable = [];
    for (let i = 0; i < filteredRecipes.length; i++) {
      const food = filteredRecipes[i];
      let ingredientsIncluded = false;
      for (let j = 0; j < food.ingredients.length; j++) {
        if (food.ingredients[j].ingredient.toLowerCase().includes(result)) {
          ingredientsIncluded = true;
        }
      }
      if (
        food.name.toLowerCase().includes(result) ||
        food.description.toLowerCase().includes(result) ||
        ingredientsIncluded
      ) {
        newRecipeTable.push(food);
      }
    }

    if (filteredRecipes.length === 0) {
      recipeGallery.textContent = "Aucune recette ne correspond à vos critères";
    } else {
      updateContent(newRecipeTable);
    }
  } else {
    updateContent(filteredRecipes);
  }
};
