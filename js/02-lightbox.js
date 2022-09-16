import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const cardMarkup = createGalleryPicMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', cardMarkup);


function createGalleryPicMarkup (items) {
    return items.map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" 
            title = "${description}" />
            </a>`;
        }).join('');
   
};

galleryEl.addEventListener('click', onGalleryItemClick);



function onGalleryItemClick(evt) {
    evt.preventDefault();
    if (evt.target.NodeName !== "IMG") {
        return;
    };
}; 

new SimpleLightbox('.gallery a', { captionDelay: 250 });

console.log(galleryItems);

