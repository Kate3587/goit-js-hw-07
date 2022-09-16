import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('div.gallery');
const cardMarkup = createGalleryPicMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', cardMarkup);


function createGalleryPicMarkup (items) {
    return items
        .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `;
        })
        .join('');
   
};

galleryEl.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) return;
    const dataSource = evt.target.dataset.source;


    const instance = basicLightbox.create(`
    <img src="${dataSource}" width="800" height="600">
`)

    instance.show();

    galleryEl.addEventListener('keydown', onTargetKeyClick);
        function onTargetKeyClick(evt) {
            if (evt.code === 'Escape') {
            instance.close();
        };
    };
}

console.log(galleryItems);