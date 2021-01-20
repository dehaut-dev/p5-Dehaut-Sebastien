const retour = JSON.parse(localStorage.getItem('ours'));
const prenomId = document.getElementById("prenom");
const nomId = document.getElementById("nom");
const adresseId = document.getElementById("adresse");
const villeId = document.getElementById("ville");
const emailId = document.getElementById("email");
const fact = document.getElementById("table-p");
const btnPanier = document.getElementById("confirmercommande");
const selecTeddy = document.getElementById("select-teddy");
const contact = {};

if (localStorage.getItem("ours") === null) {
    window.location = `index.html` // redirection sur panier vide en cas de valeur null sur l'item ours du local-storage
}

function deleteItem(i) { // fonction de supression de l'article dans le panier
    retour.splice(i, 1);
    localStorage.setItem('ours', JSON.stringify(retour));
    if (retour.length > 0) {
        window.location.reload();
    } else {
        window.location = "index.html"; // si le panier est vide redirige vers la page index.html
        localStorage.clear()
    }
}

function generateTeddy (i, p){
        let trGener = document.createElement("tr");     // création des elements 
        let tdGener = document.createElement("td");
        let tdGener1 = document.createElement("td");
        let tdGener2 = document.createElement("td");
        let tdGener3 = document.createElement("td");
        let tdGener4 = document.createElement("td");
        let pGener = document.createElement("p");
        let imgGener = document.createElement("img");
        let lienImg = document.createElement("a");
        let priceGener = document.createElement("p");
        let qteGener = document.createElement("p");
        let colorGener = document.createElement("p");
        let trash = document.createElement("i");
        let prixGerner = document.createElement("p")

        prixGerner.textContent = ((p["price"])*(p["quantity"])).toFixed(2)          // ajout du texte 
        pGener.textContent = p["name"];
        priceGener.textContent = (p["price"]).toFixed(2) + " €";
        qteGener.textContent = p["quantity"];
        colorGener.textContent = p["color"];

        imgGener.setAttribute("class", "float-left");                       // ajout des classes 
        imgGener.setAttribute("src", p["img"]);
        lienImg.setAttribute("href", "produits.html?produit=" + p["id"]);
        imgGener.setAttribute("width", '60');
        tdGener.setAttribute("class", "border");
        tdGener1.setAttribute("class", "border");
        tdGener2.setAttribute("class", "border");
        tdGener3.setAttribute("class", "border");
        tdGener4.setAttribute("class", "border");
        trash.setAttribute("class", "far fa-trash-alt float-right pr-4 mt-2");
        trash.setAttribute("id", i)                                     

        fact.appendChild(trGener);                                         // hierarchisation des elements
        trGener.appendChild(tdGener);
        trGener.appendChild(tdGener1);
        trGener.appendChild(tdGener2);
        trGener.appendChild(tdGener3);
        trGener.appendChild(tdGener4);
        
        tdGener.appendChild(lienImg);
        lienImg.appendChild(imgGener);
        tdGener.appendChild(pGener);
        pGener.appendChild(trash);
        tdGener1.appendChild(colorGener);
        tdGener2.appendChild(priceGener);
        tdGener3.appendChild(qteGener)
        tdGener4.appendChild(prixGerner)

        trash.addEventListener("click", event =>{                       // ecoute du click sur les corbeilles 
            deleteItem(trash.id)
        })
}

let prixTotal = [];
let products = [];

retour.forEach((p, i) => {
    p = retour[i];
    prixGlobal = (p["price"]) * (p["quantity"]); // multiplie la quantité par le prix 
    prixTotal.push(prixGlobal); // affiche le prix global des teddies
    products.push(p["id"]); // push l'Id dans products
    generateTeddy (i, p);   //  pour chaque teddy present dans le local crée une ligne dans le tableau
})

const prixFinal = document.getElementById("prix-final")
const reducer = (accumulator, currentValue) => accumulator + currentValue;

let prixFinaladd = prixTotal.reduce(reducer);

prixFinal.innerHTML +=
    `${(prixFinaladd).toFixed(2)} €`

const supArticle = document.getElementById("sup-article");
supArticle.addEventListener('click', event => { // supression total du panier lors du click 
    localStorage.clear();
    window.location = `panierVide.html`
})

const form = document.getElementById("formulaire");

function retourFormulaire(){
    if (localStorage.getItem("ours") != null) {
        const data = {
            contact: {
                firstName: prenomId.value,
                lastName: nomId.value,
                address: adresseId.value,
                city: villeId.value,
                email: emailId.value
            },
            products
        };
        fetch(`http://localhost:3000/api/teddies/order`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(response => response.json())
          .then((responseJson) => {content = responseJson;})
    }
}

form.addEventListener('submit', function(e) {                   // ecoute soumission formulaire
    e.preventDefault();
    if (validPrenom(form.prenom) && validNom(form.nom) &&
        validAdresse(form.adresse) && validVille(form.ville) &&
        validEmail(form.email)) {
            btnPanier.textContent = "Veuillez patienter ...";
            retourFormulaire()
            window.setTimeout(function () {
                document.location.replace(`validation.html?id=${content.orderId}&price=${prixFinaladd}&user=${prenom.value}`);
                localStorage.clear();
            }, 2000)
    }
});

const nomValidRegExp = /[0-9$£°&+,:;=?@#|'<>.^*()!"{}_]/;

function validPrenom (inputPrenom) {                     // validation prenom
    if (inputPrenom.value == "" || inputPrenom.value.length < 2) {
        alert("les champs prenon est vide ou comporte une erreur!!!!")
        return false;
    } else if (!RegExp(nomValidRegExp).test(inputPrenom.value)) {
        return true;
    } else {
        alert("les champs prenon comporte une erreur !!!!")
        return false;
    }
};

function validNom(inputNom) {                           //   validation Nom
    if (inputNom.value == "" || inputNom.value.length < 3) {
        alert("les champs nom est vide ou comporte une erreur!!!!")
        return false;
    } else if (!RegExp(nomValidRegExp).test(inputNom.value)) {
        return true;
    } else {
        alert("les champs nom comporte une erreur !!!!")
        return false;
    }
};

const adresseValidRegExp = /[$£°&+,:;=?@#|'<>.^*()!"{}_]/;

function validAdresse (inputAdresse) {                   // validation Adresse
    if (inputAdresse.value == "" || inputAdresse.value.length < 8) {
        alert("les champs adresse est vide ou comporte une erreur!!!!")
        return false;
    } else if (!RegExp(adresseValidRegExp).test(inputAdresse.value)) {
        return true;
    } else {
        alert("les champs adresse comporte une erreur !!!!")
        return false;
    }
};

function validVille (inputVille) {                       // validation Ville
    if (inputVille.value == "" || inputVille.value.length == 0) {
        alert("les champs ville est vide ou comporte une erreur!!!!")
        return false;
    } else if (!RegExp(nomValidRegExp).test(inputVille.value)) {
        return true;
    } else {
        alert("les champs ville comporte une erreur !!!!")
        return false;
    }
};

function validEmail (inputEmail) {                            // validation Email
    const emailRegExp = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
    if (RegExp(emailRegExp).test(inputEmail.value)) {
        return true;
    } else {
        alert("les champs mail comportte une erreur !!!!")
        return false;
    }
};