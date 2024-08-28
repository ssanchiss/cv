function toggleImage(imagePath) {
    const imageContainer = document.getElementById('project-image');
    if (imageContainer.style.backgroundImage === `url("${imagePath}")`) {
        imageContainer.style.backgroundImage = '';
    } else {
        imageContainer.style.backgroundImage = `url("${imagePath}")`;
        imageContainer.style.height = '400px'; // Ajusta la altura según la imagen
        imageContainer.style.backgroundSize = 'contain';
        imageContainer.style.backgroundRepeat = 'no-repeat';
        imageContainer.style.backgroundPosition = 'center';
    }
}
