import { galleryItems } from './gallery-items.js';

// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(element => {
  const galleryList = document.createElement('li');
  galleryList.className = 'gallerry__item';
  const galleryLink = document.createElement('a');
  galleryLink.className = 'gallery__link';
  galleryLink.href = element.original;
  const galleryImage = document.createElement('img');
  galleryImage.className = 'gallery__image';
  galleryImage.src = element.preview;
  galleryImage.setAttribute('title', element.description);
  galleryImage.alt = element.description;

  galleryList.append(galleryLink);
  galleryLink.append(galleryImage);
  items.push(galleryList);
});
gallery.append(...items);

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionData: 'alt',
});