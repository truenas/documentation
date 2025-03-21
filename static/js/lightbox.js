let currentImageIndex = 0;
let images = [];

function openLightbox(imageSrc) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");

  // Move the lightbox to the correct location in the DOM
  const container = document.querySelector("main.container.flex");
  if (container && lightbox.parentNode !== container) {
    container.appendChild(lightbox);
  }

  // Set the current image
  lightboxImage.src = imageSrc;
  lightbox.style.display = "flex";

  // Find the index of the current image
  currentImageIndex = images.indexOf(imageSrc);
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

function prevImage(event) {
  event.stopPropagation(); // Prevent closing the lightbox
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-image").src = images[currentImageIndex];
}

function nextImage(event) {
  event.stopPropagation(); // Prevent closing the lightbox
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById("lightbox-image").src = images[currentImageIndex];
}

// Initialize the images array
document.addEventListener("DOMContentLoaded", () => {
  images = Array.from(document.querySelectorAll(".screenshot-thumbnail")).map(
    (img) => img.src
  );
});