import { galleryItems } from './gallery-items.js';

// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(element => {
  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery__item';
  const galleryLink = document.createElement('a');
  galleryLink.className = 'gallery__link';
  galleryLink.href = element.original;
  const galleryImage = document.createElement('img');
  galleryImage.className = 'gallery__image';
  galleryImage.src = element.preview;
  galleryImage.setAttribute('data-source', element.original);
  galleryImage.alt = element.description;

  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
  items.push(galleryItem);
});

gallery.append(...items);

gallery.addEventListener('click', evt => {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const selectedImage = evt.target.getAttribute('data-source');
  const instance = basicLightbox.create(`<img src="${selectedImage}" width="800" heigth="600">`);

  instance.show();

  // close modal esc

  if (basicLightbox.visible()) {
    document.addEventListener('keydown', escClose);
  }

  function escClose({ key }) {
    if (key === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', escClose);
    }
  }
});