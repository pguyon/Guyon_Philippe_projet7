"use strict";
//Searchbar function
const mainSearch = () => {
  let filteredRecipes = recipes;

  // Get value of searchbar input and put it in lower case
  const result = document.getElementById("main__search").value.toLowerCase();

  // Filter recipies by tags
  document.querySelectorAll("#resume__filter a").forEach((tag) => {
    const tagValue = tag.textContent.toLocaleLowerCase();
    filteredRecipes = filteredRecipes.filter(
      (recipe) =>
        recipe.ingredients.some((item) =>
          item.ingredient.toLowerCase().includes(tagValue)
        ) ||
        recipe.appliance.toLowerCase().includes(tagValue) ||
        recipe.ustensils.some((ustensil) =>
          ustensil.toLowerCase().includes(tagValue)
        )
    );
    updateContent(filteredRecipes);
  });

  // SearchBar
  if (result.length >= 3) {
    filteredRecipes = filteredRecipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(result) ||
        recipe.description.toLowerCase().includes(result) ||
        recipe.ingredients.some((item) =>
          item.ingredient.toLowerCase().includes(result)
        )
    );
  } else {
    updateContent(filteredRecipes);
  }
  filteredRecipes.length === 0
    ? (document.querySelector(".recipe__gallery").textContent =
        "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.")
    : updateContent(filteredRecipes);
};
