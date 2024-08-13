const fiterItem = document.querySelector(".items-links");
let filterImg = document.querySelectorAll(".project-img");

window.addEventListener("load", () => {
  fiterItem.addEventListener("click", (selectedItem) => {
    if (selectedItem.target.classList.contains("item-link")) {
      document.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");

      let filterName = selectedItem.target.getAttribute("data-name");
      filterImg.forEach((image) => {
        let filterImg = image.getAttribute("data-name");
        if (filterImg == filterName || filterName == "all") {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    }
  });
});
