const boxs = document.querySelectorAll(".gallery_section .box");
const popupAll = document.querySelector(".popup_all_images");
const closePopup = document.querySelector(".icon_close");

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    popupAll.classList.add("active");
  });
});

closePopup.addEventListener("click", () => {
  popupAll.classList.remove("active");
});
