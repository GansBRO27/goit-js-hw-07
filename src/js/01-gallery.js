import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach((galleryItem) => {
  const instance = basicLightbox.create(`
    <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg" width="800" height="600">
`);
  galleryContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="gallery__item">
      <a class="gallery__link" href =''>
        <img
          class="gallery__image"
          src=${galleryItem.preview}
          data-source=${galleryItem.original}
          alt=${galleryItem.description}
        />
      </a>
    </div>`
  );
});
galleryContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="800" height="600">
`);
  instance.show();

  window.addEventListener("keydown", (e) => {
    if (e.code !== "Escape") {
      return;
    }
    instance.close();
  });
});
