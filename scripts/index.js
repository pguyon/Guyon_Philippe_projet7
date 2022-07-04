"use strict";

const template = document.querySelector("template");

// Create HTML content for recipes cards
const createCard = (data) => {
  // Reset HTML of cards gallery
  document.querySelector(".recipe__gallery").innerHTML = "";

  // Creates card and set content
  data.forEach((food) => {
    // Initialize variables
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
};

const createLists = (data) => {
  // Create array
  const ingredientList = [],
    appareilsList = [],
    ustensilList = [];
  const lists = [ingredientList, appareilsList, ustensilList];

  // Reset HTML of secondary search lists
  document
    .querySelectorAll(".search__list")
    .forEach((searchlist) => (searchlist.innerHTML = ""));

  // Generate list
  data.forEach((food) => {
    food.ingredients.forEach((item) =>
      ingredientList.indexOf(item.ingredient) === -1
        ? ingredientList.push(item.ingredient)
        : ""
    );
    appareilsList.indexOf(food.appliance) === -1
      ? appareilsList.push(food.appliance)
      : "";
    food.ustensils.forEach((ustensil) =>
      ustensilList.indexOf(ustensil) === -1 ? ustensilList.push(ustensil) : ""
    );
  });

  // Generate list items depending on value in searchbox input
  lists.forEach((list) => {
    list.sort();
    list.forEach((item) => {
      // Creates list item
      const itemLi = template.content.cloneNode(true).children[2];
      itemLi.firstElementChild.textContent = `${item
        .slice(0, 1)
        .toUpperCase()}${item.slice(1).toLowerCase()}`;

      // Adds list item to HTML

      const addItemToList = (listType) => {
        const inputItem = document
          .getElementById(`${listType}__search`)
          .value.toLowerCase();
        if (
          itemLi.firstElementChild.textContent.toLowerCase().includes(inputItem)
        ) {
          document.getElementById(`${listType}__list`).appendChild(itemLi);
        }
      };

      // Checks for list item type
      switch (list) {
        case ingredientList:
          addItemToList("ingredients");
          break;
        case appareilsList:
          addItemToList("appareils");
          break;
        case ustensilList:
          addItemToList("ustensiles");
          break;
      }
    });
  });
};

// Update card gallery and search list items
const updateContent = (data) => {
  createCard(data);
  createLists(data);
  addLiEvents();
};

updateContent(recipes);
mainSearch();
addSearchboxEvents();
