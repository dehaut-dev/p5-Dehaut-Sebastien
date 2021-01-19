const container = document.getElementById("products");

function generateLine(teddy){
    let divGener = document.createElement("div");                // création des elements 
    let titreGener = document.createElement("h1");
    let imgGener = document.createElement("img");
    let priceGener = document.createElement("p");
    let descriptionGener = document.createElement("a");

    divGener.setAttribute("class", "col-md-5 text-center mt-5 border");         // ajout des classes 
    imgGener.setAttribute("class", "img-fluid img-accueil");
    imgGener.setAttribute("src", teddy.imageUrl);
    descriptionGener.setAttribute("class", "btn btn-danger my-2")
    descriptionGener.setAttribute("href", "produits.html?produit=" + teddy._id);
    descriptionGener.setAttribute("type", "button")


    titreGener.textContent = teddy.name;                        // ajout du texte 
    priceGener.textContent = (teddy.price/100).toFixed(2) + " €";
    descriptionGener.textContent = "Description produit";


    container.appendChild(divGener);                            // hierarchisation des elements
    divGener.appendChild(titreGener);
    divGener.appendChild(imgGener);
    divGener.appendChild(priceGener);
    divGener.appendChild(descriptionGener);
} 

fetch("http://localhost:3000/api/teddies")
    .then(response => response.json())
    .then(teddies => {
            for (const teddy of teddies) { // création du le HTML pour chaque teddies present 
                generateLine(teddy);   
            }
    })
     