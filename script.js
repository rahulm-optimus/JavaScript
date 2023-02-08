const frame = document.querySelector(".frame");
const btn = document.querySelector(".btn");

frame.addEventListener("click", function () {
  frame.classList.add("hidden");
  console.log("clicked");
});

btn.addEventListener("click", function () {
  location.reload();
  frame.classList.remove("hidden");
});
