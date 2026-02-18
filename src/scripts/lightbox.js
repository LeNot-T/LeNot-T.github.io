export function setupLightbox() {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");

  if (!modal || !modalImg) return;

  document.addEventListener("click", (e) => {
    const wrapper = e.target.closest(".image-wrapper");
    if (!wrapper) return;

    const src = wrapper.dataset.image;
    if (!src) return;

    modalImg.src = src;
    modal.classList.add("active");
  });

  modal.addEventListener("click", () => {
    modal.classList.remove("active");
  });
}