/* //Add events on filter list items

function addLiEvents() {
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
        case "ustensiles-list":
          createTag("us-tag", tagElement);
          break;
      }
    })
  );
}

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

addLiEvents();
createTag();
 */
