function openPopup() {
  document.querySelector(".popup").classList.add("active");
}

document
  .querySelector(".popup .btn-yes")
  .addEventListener("click", function () {
    location.reload();
  });

function openVideoPopup() {
  document.querySelector(".clip").classList.add("active");
  document.querySelector("video").play();
}

document.querySelector(".close-video").addEventListener("click", function () {
  location.reload();
});

document.querySelector("video").addEventListener("ended", function () {
  location.reload();
});
