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
}

const form = document.getElementById("formulaire");

form.addEventListener('submit', function(e) {                   // ecoute soumission formulaire
    e.preventDefault();
    if (validPrenom(form.prenom) && validNom(form.nom) &&
        validAdresse(form.adresse) && validVille(form.ville) &&
        validEmail(form.email)) {
            addPanier();
            if (localStorage.getItem("ours") != null) {
                const data = {
                    contact: {
                        firstName: contact.prenom,
                        lastName: contact.nom,
                        address: contact.adresse,
                        city: contact.ville,
                        email: contact.email
                    },
                    products
                };
                fetch(`http://localhost:3000/api/teddies/order`, {
                    method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                }).then(response => response.json())
                  .then((responseJson) => {
                    content = responseJson;
                    console.log(responseJson);
                    window.setTimeout(function () {
                        document.location.replace(`validation.html?id=${content.orderId}&price=${prixFinaladd}&user=${prenom.value}`), localStorage.removeItem('ours');
                        localStorage.clear();
                    }, 2000)
                  })
            }
        
    }
});

const nomValidRegExp = /[0-9$£°&+,:;=?@#|'<>.^*()!"{}_]/;

function validPrenom (inputPrenom) {                     // validation prenom
    

    if (inputPrenom.value == "" || inputPrenom.value.length < 2) {
        alert("les champs prenon est vide!!!!")
        return false;
    } else if (!RegExp(nomValidRegExp).test(inputPrenom.value)) {
        return true;
    } else {
        alert("les champs prenon comporte une erreur 2!!!!")
        return false;
    }
};

function validNom(inputNom) {                           //   validation Nom

    if (inputNom.value == "" || inputNom.value.length < 3) {
        alert("les champs nom comportte une erreur 1!!!!")
        return false;
    } else if (!RegExp(nomValidRegExp).test(inputNom.value)) {
        return true;
    } else {
        alert("les champs nom comportte une erreur 2!!!!")
        return false;
    }
};

function validAdresse (inputAdresse) {                   // validation Adresse
    let adresseRegExp = new RegExp('^[a-zA-ZÀ-ú\-\s]*');

    if (inputAdresse.value == "" || inputAdresse.value.length < 8) {
        alert("les champs adresse comportte une erreur 1!!!!")
        return false;
    } else if (adresseRegExp.test(inputAdresse.value)) {
        return true;
    } else {
        alert("les champs adresse comportte une erreur 2!!!!")
        return false;
    }
};

function validVille (inputVille) {                       // validation Ville
    let villeRegExp = new RegExp('^[a-zA-ZÀ-ú\-\s]*');

    if (inputVille.value == "" || inputVille.value.length == 0) {
        alert("les champs ville comportte une erreur 1!!!!")
        return false;
    } else if (villeRegExp.test(inputVille.value)) {
        return true;
    } else {
        alert("les champs ville comportte une erreur 2!!!!")
        return false;
    }
};

function validEmail (inputEmail) {                            // validation Email
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');

    if (emailRegExp.test(inputEmail.value)) {
        return true;
    } else {
        alert("les champs mail comportte une erreur 1!!!!")
        return false;
    }
};