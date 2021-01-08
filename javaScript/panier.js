const retour = JSON.parse(localStorage.getItem('ours'));
const prenomId = document.getElementById("prenom");
const nomId = document.getElementById("nom");
const adresseId = document.getElementById("adresse");
const villeId = document.getElementById("ville");
const emailId = document.getElementById("email");
const fact = document.getElementById("table-p");
const contact = {};

if (localStorage.getItem("ours") === null) {
    window.location = `index.html` // redirection sur panier vide en cas de valeur null sur l'item ours du local-storage
}

function deleteItem(i) { // fonction de supression de l'article dans le panier
    retour.splice(i, 1);
    localStorage.setItem('ours', JSON.stringify(retour));
    if (retour.length > 0) {
        window.location = "panier.html";
    } else {
        window.location = "index.html"; // si le panier est vide redirige vers la page index.html
        localStorage.clear()
    }
    // window.location.href = retour.length > 1 ? "panier.html" : "index.html";
    return
}

function generateLine(p, i) {
    return `
        <tr>
            <td class="border" scope="row"><a class="mr-0" href="produits.html?produit=${p["id"]}"><img class="float-left" width="60" height="auto" src="${p["img"]}"> 
            </a><p>${p["name"]}<a href="#"><i class="far fa-trash-alt float-right pr-4 mt-2" onclick="deleteItem(${i})"></i></a></p></td>
            <td class="border" scope="row">${p["color"]}</td>
            <td class="border">${p["price"].toFixed(2)} €</td>
            <td class="border">${p["quantity"]}</td>
            <td class""prix>${((p["price"])*(p["quantity"])).toFixed(2)} €</td>
        </tr>`
}


let prixTotal = [];
let products = [];

for (let i = 0; i < retour.length; i++) {
    let p = retour[i];
    fact.innerHTML += generateLine(p, i); //  pour chaque teddy present dans le local crée une ligne dans le tableau
    prixGlobal = (p["price"]) * (p["quantity"]); // multiplie la quantité par le prix 
    prixTotal.push(prixGlobal); // affiche le prix global des teddies
    products.push(p["id"]); // push l'Id dans products
}

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

function addPanier(object) { //   stock les information du formulaire dans contact
    contact.prenom = prenomId.value;
    contact.nom = nomId.value;
    contact.adresse = adresseId.value;
    contact.ville = villeId.value;
    contact.email = emailId.value;
    if (contact.prenom != "" && contact.nom != "" && contact.adresse != "" && contact.ville != "" && contact.email != "") {
        localStorage.setItem('products', JSON.stringify(contact));
    }
}


const form = document.getElementById("formulaire");

//--Ecoute soumission formulaire
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validPrenom(form.prenom) && validNom(form.nom) &&
        validAdresse(form.adresse) && validVille(form.ville) &&
        validEmail(form.email)) {
        form.submit();
    } else {
        alert("Hop là, coquinou ! Tous les champs sont obligatoire et doivent être valide");
    }

});

//--Validation prenom

const validPrenom = function(inputPrenom) {
    let prenomRegExp = new RegExp('^[a-zA-ZÀ-ú\-\s]*', 'g');

    console.log(validPrenom);

    if (inputPrenom.value == "" || inputPrenom.value.length < 2) {
        return false;
    } else if (prenomRegExp.test(inputPrenom.value)) {
        return true;
    } else {
        return false;
    }
};

//--Validation Nom
const validNom = function(inputNom) {
    let nomRegExp = new RegExp('^[a-zA-ZÀ-ú\-\s]*', 'g');

    if (inputNom.value == "" || inputNom.value.length < 3) {
        return false;
    } else if (nomRegExp.test(inputNom.value)) {
        return true;
    } else {
        return false;
    }
};

//--Validation Adresse
const validAdresse = function(inputAdresse) {
    let adresseRegExp = new RegExp('^[a-zA-ZÀ-ú\-\s]*', 'g');

    if (inputAdresse.value == "" || inputAdresse.value.length < 8) {
        return false;
    } else if (adresseRegExp.test(inputAdresse.value)) {
        return true;
    } else {
        return false;
    }
};

//--Validation Ville
const validVille = function(inputVille) {
    let villeRegExp = new RegExp('^[a-zA-ZÀ-ú\-\s]*', 'g');

    if (inputVille.value == "" || inputVille.value.length == 0) {
        return false;
    } else if (villeRegExp.test(inputVille.value)) {
        return true;
    } else {
        return false;
    }
};

//--Validation Email
const validEmail = (inputEmail) => {
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

    if (emailRegExp.test(inputEmail.value)) {
        return true;
    } else {
        return false;
    }
};