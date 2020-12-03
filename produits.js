const urlRecupId = window.location.search;
const urlRecup = urlRecupId.substr(1);
const api = "http://localhost:3000/api/teddies/" + urlRecup;
console.log(api);


fetch(api)
    .then(response => response.json())
    
    .then(teddy => {
        
        const container = document.getElementById("products");
        const titleSecondary = document.getElementById("title-secondary");                  // mise en place de la partie HTML dynamique
        container.innerHTML += `
            <div class="col-md-12 mr-auto text-center mt-2">
                <h1 class="text-center">${teddy.name}</h1>
                <img class="col-md-auto center-block" src="${teddy.imageUrl}"></img>
                <p class="font-weight-bold h3">${teddy.price} €</p>
                <p class="h6">${teddy.description}</p>
                <a id="add-article" type="button" class="btn btn-danger my-2" href="produits.html?${teddy._id}">ajouter au panier</a>
                <a id="sup-article" type="button" class="btn btn-danger my-2" href="produits.html?${teddy._id}">vider panier</a>
            </div>`
        titleSecondary.innerHTML += `${teddy.name}`                                           // fin de la mise en page HTML dynamique


        let oursObject = {oursId : Id };
        let oursSelection = [];
            

        


        // // console.log(oursObject);
        // var monOurs_json = JSON.stringify(oursObject);
        // console.log(monOurs_json);

        // const addArticle = document.getElementById("add-article");              
        // addArticle.addEventListener('click', event => {
        //     oursObject.push(teddy._id);
        //     localStorage.setItem("ours", JSON.parse(monOurs_json));            
        // })
        // const supArticle = document.getElementById("sup-article");
        // supArticle.addEventListener('click', event => {
        //     localStorage.clear();
        // })

        // var monOursRetour_json = localStorage.getItem("ours");
        // var oursObject = JSON.parse(monOursRetour_json);
        // // Affichage dans la console
        // console.log(oursObject);
    })



// const urlRecup = window.location.search;
// const urlUtils = urlRecup.substr(1)
// console.log(urlRecup);
// console.log(urlUtils)
