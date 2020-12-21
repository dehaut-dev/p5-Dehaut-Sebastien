const api = "http://localhost:3000/api/teddies";    // recupere l'api teddies

fetch(api)
    .then(response => response.json())
    .then(teddies => {
        
            const container = document.getElementById("products");    

            for (const teddy of teddies) { // création du le HTML pour chaque teddies present 
    
                container.innerHTML += `
            <div class="col-md-5 mr-auto text-center mt-5 justify-content-between border">          
                <h1>${teddy.name}</h1>
                <img class="img-fluid img-accueil" src="${teddy.imageUrl}"></img>
                <div>${(teddy.price/100).toFixed(2)} €</div>
                <a type="button" class="btn btn-danger my-2" href="produits.html?produit=${teddy._id}">Description produit</a>
            </div>`            
            }
    
            const panier = document.getElementById("lien-panier");
    
    
            panier.addEventListener("click", event => {                 // verification du panier 
                if (localStorage.getItem("ours") === null) {            
                    window.location = `panierVide.html`                 // redirection sur panier vide en cas de valeur null sur l'item ours du local-storage
                } else {
                    window.location = `panier.html`                     // sinon envoi du lien panier.html
                }
            })
        
    })
    .catch(function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      });