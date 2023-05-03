import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(SimpleLightbox);

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

createGalleryItems();

function createGalleryItems() {
  for (const galleryItem of galleryItems) {
    const galleryLi = document.createElement('li');
    galleryLi.classList.add('gallery__li');
    gallery.append(galleryLi);

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__item');
    galleryLink.href = galleryItem.original;
    galleryLi.append(galleryLink);

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.src = galleryItem.preview;
    galleryImage.alt = galleryItem.description;
    galleryImage.dataset.source = galleryItem.original;
    galleryLink.append(galleryImage);
  }
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});

const openImage = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
};

gallery.addEventListener('click', openImage);
console.log(galleryItems);
