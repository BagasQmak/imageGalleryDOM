const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb, i) => {
  thumb.addEventListener("click", function () {
    jumbo.setAttribute("src", `img/${i + 1}.jpg`);
    jumbo.classList.add("fade");
    setTimeout(() => {
      jumbo.classList.remove("fade");
    }, 300);
  });
});
