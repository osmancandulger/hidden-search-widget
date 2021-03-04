const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const title = document.querySelector(".title");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  title.classList.toggle("active");
  input.focus();

  input.onblur = function () {
    search.classList.remove("active");
    title.classList.remove("active");

  };
});
