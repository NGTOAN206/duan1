document.addEventListener("DOMContentLoaded", function () {
  const nextPageButton = document.getElementById("nextPageButton");
  const previousPageButton = document.getElementById("previousPageButton");
  const page1 = document.querySelector(".container");
  const page2 = document.getElementById("page2");

  nextPageButton.addEventListener("click", function () {
    page1.classList.add("zoom-in");
    setTimeout(() => {
      page1.style.display = "none";
      page2.style.display = "flex";
      page2.classList.add("zoom-out");
    }, 1000);
  });

  previousPageButton.addEventListener("click", function () {
    page2.classList.remove("zoom-out");
    page2.classList.add("zoom-in");
    setTimeout(() => {
      page2.style.display = "none";
      page1.style.display = "flex";
      page1.classList.remove("zoom-in");
      page1.classList.add("zoom-out");
    }, 1000);
  });
});
