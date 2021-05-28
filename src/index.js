console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    loadImages();
});

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    fetch('imgUrl')
        .then(resp => resp.json())
        .then(results => {
            results.message.forEach(image => addImage(image))
          });
}

function renderImages(imgs) {

}