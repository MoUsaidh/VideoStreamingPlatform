const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});
function addToMyList() {
  var button = document.getElementById("addButton");
  var icon = document.getElementById("icon");
  var text = document.getElementById("text");

  if (button.classList.contains("added")) {
    button.classList.remove("added");
    icon.classList.remove("fa-check");
    icon.classList.add("fa-plus");
    text.textContent = "Add to List";
  } else {
    button.classList.add("added");
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-check");
    text.textContent = "Added";
  }
}
function addToMyList2() {
  var button = document.getElementById("addButton2");
  var icon = document.getElementById("icon2");
  var text = document.getElementById("text2");

  if (button.classList.contains("added")) {
    button.classList.remove("added");
    icon.classList.remove("fa-check");
    icon.classList.add("fa-plus");
    text.textContent = "Add to List";
  } else {
    button.classList.add("added");
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-check");
    text.textContent = "Added";
  }
}
function toggleAddToList(button) {
  button.classList.toggle("added");

  var icon = button.querySelector("i");
  if (button.classList.contains("added")) {
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-check");
  } else {
    icon.classList.remove("fa-check");
    icon.classList.add("fa-plus");
  }
}
document.querySelector('.profile-picture').addEventListener('click', function() {
  var dropdown = document.querySelector('.dropdown');
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'block';
  }
});
