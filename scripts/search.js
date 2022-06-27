//Searchbar function
const mainSearch = () => {
  let filteredRecipes = recipes;

  // Get value of searchbar input and put it in lower case
  const result = document.getElementById("main__search").value.toLowerCase();

  // Filter recipies by tags
  document.querySelectorAll("#resume__filter a").forEach((tag) => {
    const tagValue = tag.textContent.toLocaleLowerCase();
    filteredRecipes = filteredRecipes.filter(
      (food) =>
        food.ingredients.some((item) =>
          item.ingredient.toLowerCase().includes(tagValue)
        ) ||
        food.appliance.toLowerCase().includes(tagValue) ||
        food.ustensils.some((ustensil) =>
          ustensil.toLowerCase().includes(tagValue)
        )
    );
    updateContent(filteredRecipes);
  });

  // SearchBar
  if (result.length >= 3) {
    filteredRecipes = filteredRecipes.filter((recipe) => {
      recipe.description.toLowerCase().includes(result) ||
        recipe.name.toLowerCase().includes(result) ||
        recipe.ingredients.some((i) =>
          i.ingredient.toLowerCase().includes(result)
        );
    });
    if (filteredRecipes.length === 0) {
      document.querySelector(".recipe__gallery").textContent =
        "Aucunes recettes ne correspond à vos critères";
    } else {
      updateContent(newRecipeArray);
    }
  } else {
    updateContent(filteredRecipes);
  }
};
