const urlRecupId = window.location.search;
const urlRecup = urlRecupId.substr(1);
const api = "http://localhost:3000/api/teddies/" + urlRecup;

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
        
        let oursTab = [];

    var oursId = {
        name : teddy.name,
        price : teddy.price,
        img : teddy.imageUrl,
        quantity : 1
    };

    newDifferentProduct = true;    

    console.log(oursId.quantity);
    function add (){

        if (localStorage.getItem("ours") === null) {
            oursTab.push(oursId);
            localStorage.setItem("ours", JSON.stringify(oursTab)); 
        } else {
            oursTab = JSON.parse(localStorage.getItem('ours'))
            oursTab.forEach((newOursTab) => {
              if (teddy.name === newOursTab.name) {
                newOursTab.quantity++;
                newDifferentProduct = false;
              }
            })
            if (newDifferentProduct) oursTab.push(oursId);
            localStorage.setItem('ours', JSON.stringify(oursTab))   
        }}
        

        const addArticle = document.getElementById("add-article");
        addArticle.addEventListener('click', event => {
            add();
        })
        
        const supArticle = document.getElementById("sup-article");
        supArticle.addEventListener('click', event => {
            localStorage.clear();
        })
    })