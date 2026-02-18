export function setupLightbox() {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");

  if (!modal || !modalImg) return;

  window.openImage = (src) => {
    modalImg.src = src;
    modal.classList.add("active");
  };

  modal.addEventListener("click", () => {
    modal.classList.remove("active");
  });
}