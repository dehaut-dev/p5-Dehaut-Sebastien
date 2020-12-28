const api = "http://localhost:3000/api/teddies";    // recupere l'api teddies
const container = document.getElementById("products");
const panier = document.getElementById("lien-panier");  

function verifPanier (){
    if (localStorage.getItem("ours") === null) {            
        window.location = `panierVide.html`                 // redirection sur panier vide en cas de valeur null sur l'item ours du local-storage
    } else {
        window.location = `panier.html`                     // sinon envoi du lien panier.html
    }
}

function generateLine (teddy){                          // creation des div pour les differents teddies
    return `
    <div class="col-md-5 text-center mt-5 border">
        <h1>${teddy.name}</h1>
        <img class="img-fluid img-accueil" src="${teddy.imageUrl}"></img>
        <div>${(teddy.price/100).toFixed(2)} €</div>
        <a type="button" class="btn btn-danger my-2" href="produits.html?produit=${teddy._id}">Description produit</a>
    </div>` 
}

fetch(api)
    .then(response => response.json())
    .then(teddies => {
        
            for (const teddy of teddies) { // création du le HTML pour chaque teddies present 
                container.innerHTML += generateLine (teddy);   
            }
    })
    panier.addEventListener("click", event => {                 // verification du panier 
        verifPanier ()
    }) 