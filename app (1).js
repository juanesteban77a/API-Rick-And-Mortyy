const inputFilter = document.querySelector(".inputFilter");
const containerCards = document.querySelector(".containerCards");

window.addEventListener('DOMContentLoaded', () => {
    let URL = 'https://rickandmortyapi.com/api/character';
    dataRequest(URL)
})

inputFilter.addEventListener("keyup", () => {
    let URLFilter = `https://rickandmortyapi.com/api/character/?name=${inputFilter.value}`
    dataRequest(URLFilter);
});

function dataRequest(URL){
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        containerCards.textContent=(null)
        data.results.map( character => createCharacter(character));
    });
}


function createCharacter(character) {
    const img = document.createElement("img");
    let divTitle = document.createElement("div");

    img.src = character.image;
    img.setAttribute('alt', character.name);
    img.classList.add("imgcard");
    
    const h2 = document.createElement("h2");
    h2.textContent = character.name;

    const p = document.createElement("span");
    p.textContent = character.status;

    const p2 = document.createElement("span");
    p2.textContent = character.species;

    const p3 = document.createElement("span");
    p3.textContent = character.gender;

 

    const div = document.createElement("div");
    div.classList.add("divCard")
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);
    containerCards.appendChild(div);
}

