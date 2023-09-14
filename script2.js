function selectImage(imageElement) {
    const images = document.querySelectorAll('.image-gallery img');

    // Toggle the 'selected' class on the clicked image
    imageElement.classList.toggle('selected');

    // Remove the 'selected' class from other images
    images.forEach(image => {
        if (image !== imageElement) {
            image.classList.remove('selected');
        }
    });
}
