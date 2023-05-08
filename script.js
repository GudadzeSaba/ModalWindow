"use strict";
const openModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlayHidden = document.querySelector(".overlay");

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", function () {
    modal.style.display = "block";
    overlayHidden.classList.remove("hidden");
  });
}
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
  overlayHidden.classList.add("hidden");
});
overlayHidden.addEventListener("click", function () {
  modal.style.display = "none";
  overlayHidden.classList.add("hidden");
});
