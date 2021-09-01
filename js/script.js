// Question 1

const url = "https://breakingbadapi.com/api/characters/6";

const detailsContainer = document.querySelector(".details")

async function fetchCharacter() {
    try {
        const response = await fetch(url);
        const result = await response.json();

        const details = result[0];

        createHTML(details)
    } catch (error) {
        console.log(error);
        detailsContainer.innerHTML = error;
    }
}

fetchCharacter();

function createHTML(details) {
    detailsContainer.innerHTML = `<h1 class="name">${details.name}</h1>
                                    <div class="image" style="background-image: url('${details.img}')"></div>
                                    <div class="status">Status: <b>${details.status}</b></div>`
}