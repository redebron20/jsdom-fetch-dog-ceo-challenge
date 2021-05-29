
console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    loadImages();
});

function loadImages() {
    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(results => {
            results.message.forEach(image => addImage(image))
          });
}

function addImage(imageUrl) {
    let container = document.querySelector('#dog-image-container');
    let newImage = document.createElement('img');
    newImage.src = imageUrl;
    container.appendChild(newImage);
}

// -------------

let breeds = [];

function getDogBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'; 
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(results => {
            breeds = Object.keys(results.message);
            updateBreedList(breeds)
            
    });
}

function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    // removeChildren(ul);
    breeds.forEach(breed => addDogBreed(breed))
}

// function removeChildren(el) {
//     let child = element.lastElementChild;
//     while (child) {
//       element.removeChild(child);
//       child = el.lastElementChild;
//     }
//   }

function addDogBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    ul.appendChild(li);
}

