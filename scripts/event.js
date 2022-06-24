//Add events on filter list items

const addSearchboxEvents = () => {
  const searchBoxes = document.querySelectorAll(".search__wrapper input");
  searchBoxes.forEach((input) => {
    input.addEventListener("focus", (event) => focusSecondarySearch(event));
    input.addEventListener("focusout", (event) => focusSecondarySearch(event));
    input.addEventListener("input", mainSearch);
  });

  document.getElementById("main__search").addEventListener("input", mainSearch);
};

const focusSecondarySearch = (event) => {
  const input = event.currentTarget;
  input.classList.toggle("secondary-input__focus");
  input.previousElementSibling.classList.toggle("sr-only");
  input.parentElement.classList.toggle("rotate-pseudo");
  input.parentElement.nextElementSibling.classList.toggle("hide__search");
  input.value = "";
};

const addLiEvents = () => {
  document.querySelectorAll(".search__list a").forEach((li) =>
    li.addEventListener("mousedown", (event) => {
      const tagElement = event.target.cloneNode(true);
      switch (li.closest("ul").id) {
        case "ingredients__list":
          createTag("ig-tag", tagElement);
          break;
        case "appareils__list":
          createTag("ap-tag", tagElement);
          break;
        case "ustensiles__list":
          createTag("us-tag", tagElement);
          break;
      }
    })
  );
};

//Creates Tags on click

const createTag = (tagType, tag) => {
  const img = document.createElement("img");
  img.setAttribute("alt", "Close tag icon");
  img.setAttribute("src", "../assets/images/remove.png");
  img.classList.add("remove__tag");

  tag.classList.add(tagType);
  tag.appendChild(img);
  tag.addEventListener("click", (event) => {
    event.target.parentElement.removeChild(event.target);
    mainSearch();
  });
  document.getElementById("resume__filter").appendChild(tag);
  mainSearch();
};
