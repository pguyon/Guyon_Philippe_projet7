const template = document.querySelector("template");

function createCard(data) {
  // Reset HTML of cards gallery
  document.querySelector(".recipe__gallery").innerHTML = "";

  // Creates card and set content for each object of Array from data param
  data.forEach((food) => {
    // Initialize variables for readability
    const card = template.content.cloneNode(true).children[0];
    const title = card.querySelector(".recipe__title");
    const time = card.querySelector(".recipe__time");
    const ingredientsList = card.querySelector(".recipe__ingredients__list");
    const recipe = card.querySelector(".recipe");

    // Generate card content
    title.innerText = food.name;
    time.innerText = `${food.time}min`;
    recipe.innerText = food.description;

    // Generate card list of ingredients
    food.ingredients.forEach((ingredient) => {
      const li = template.content.cloneNode(true).children[1];
      li.querySelector(".bold").innerText = `${ingredient.ingredient}:`;
      ingredient.quantity
        ? (li.querySelector(".quantity").innerText = ` ${ingredient.quantity}`)
        : (li.querySelector(".bold").innerText = `${ingredient.ingredient}`);
      ingredient.unit
        ? (li.querySelector(".unit").innerText = ` ${ingredient.unit}`)
        : "";
      Array.from(li.children).forEach((child) =>
        child.innerText ? "" : li.removeChild(child)
      );
      ingredientsList.appendChild(li);
    });

    // Add card to gallery
    document.querySelector(".recipe__gallery").appendChild(card);
  });
}

createCard(recipes);
