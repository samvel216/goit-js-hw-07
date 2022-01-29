import { galleryItems } from './gallery-items.js';
const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);
console.log(galleryEl);
const createGallery = galleryItems.map((item) =>
    `<div class="gallery__item">
  <a class="gallery__link" href=""> <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"/></a>
</div>`).join("");
galleryEl.insertAdjacentHTML("beforeend", createGallery);

const handleClick = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    let imgLink = event.target.dataset.source;
    let imgDescrip = event.target.alt;
    let imageToLightBox = basicLightbox.create(`<img src="${imgLink}" alt="${imgDescrip}">`);
    imageToLightBox.show();

    const escapeCloseFunk = (event) => {
        if (event.code === "Escape") {
            imageToLightBox.close();
        }
    }
    window.addEventListener('keyup', escapeCloseFunk);
    window.addEventListener('keydown', escapeCloseFunk);
}
galleryEl.addEventListener('click', handleClick);