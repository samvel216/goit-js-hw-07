import { galleryItems } from './gallery-items.js';
const galleryEl = document.querySelector('.gallery');
const createGallery = galleryItems.map((item) =>
    `<div class="gallery__item">
<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/>
</a>
</div>`).join("");
galleryEl.insertAdjacentHTML("beforeend", createGallery);
// Change code below this line
var lightbox = new SimpleLightbox('.gallery a', { "captionDelay": 250});
