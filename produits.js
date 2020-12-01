const urlRecupId = window.location.search;
const urlRecup = urlRecupId.substr(1);
const api = "http://localhost:3000/api/teddies/" + urlRecup;
console.log(api);


fetch(api)
    .then(response => response.json())
    
    .then(teddy => {
        
        const container = document.getElementById("products");
        const titleSecondary = document.getElementById("title-secondary");
        container.innerHTML += `
            <div class="col-md-12 mr-auto text-center mt-5">
                <h1 class="text-center">${teddy.name}</h1>
                <img class="col-md-auto center-block" src="${teddy.imageUrl}"></img>
                <div>${teddy.price} €</div>
                <p>${teddy.description}</p>
                <a type="button" class="btn btn-danger my-2" href="produits.html?${teddy._id}">ajouter</a>
            </div>`
        titleSecondary.innerHTML += `${teddy.name}`

        
    })

// const urlRecup = window.location.search;
// const urlUtils = urlRecup.substr(1)
// console.log(urlRecup);
// console.log(urlUtils)

