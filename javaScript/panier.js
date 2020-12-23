const api = "http://localhost:3000/api/teddies/";

const retour = JSON.parse(localStorage.getItem('ours'));
const prenomId = document.getElementById("prenom");
const nomId = document.getElementById("nom");
const adresseId = document.getElementById("adresse");
const villeId = document.getElementById("ville");
const emailId = document.getElementById("email");
const fact = document.getElementById("table-p");
const contact = {};

function deleteItem(i) {
    retour.splice(i,1);
    localStorage.setItem('ours', JSON.stringify(retour));
    window.location.href = retour.length > 0 ? "panier.html" : "index.html";
    return
}

function generateLine (p, i){
    return `
        <tr>
            <td class="border" scope="row"><a class="mr-0" href="produits.html?produit=${p["id"]}"><img class="float-left" width="60" height="auto" src="${p["img"]}"> 
            </a><p>${p["name"]}<a href="#"><i class="far fa-trash-alt float-right pr-4 mt-2" value="${i}" onclick="deleteItem(${i})"></i></a></p></td>
            <td class="border" scope="row">${p["color"]}</td>
            <td class="border">${p["price"].toFixed(2)} €</td>
            <td class="border">${p["quantity"]}</td>
            <td class""prix>${((p["price"])*(p["quantity"])).toFixed(2)} €</td>
        </tr>`
}


fetch(api)
    .then(response => response.json())
    .then(teddies => {
        let prixTotal = [];
        let products = [];

        for (let i = 0; i < retour.length; i++) {
            let p = retour[i];
            fact.innerHTML += generateLine(p,i);
            prixGlobal = (p["price"]) * (p["quantity"]);
            prixTotal.push(prixGlobal);
            products.push(p["id"]);
        }     
        
        const prixFinal = document.getElementById("prix-final")
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        let prixFinaladd = prixTotal.reduce(reducer);

        prixFinal.innerHTML +=
            `${(prixFinaladd).toFixed(2)} €`

        const supArticle = document.getElementById("sup-article");
        supArticle.addEventListener('click', event => {
            localStorage.clear();
            window.location = `panierVide.html`
        })

        function addPanier(object) {
            contact.prenom = prenomId.value;
            contact.nom = nomId.value;
            contact.adresse = adresseId.value;
            contact.ville = villeId.value;
            contact.email = emailId.value;
            if (contact.prenom != "" && contact.nom != "" && contact.adresse != "" && contact.ville != "" && contact.email != "") {
                localStorage.setItem('products', JSON.stringify(contact));
            }
        }

        const validForm = document.getElementById("confirmercommande");

        const forms = document.getElementsByClassName('needs-validation');
        let validation = Array.prototype.filter.call(forms, function (form) {
            validForm.addEventListener('click', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
                addPanier(contact);
                if (localStorage.getItem("products") != null && localStorage.getItem("ours") != null) {
                    validForm.innerHTML = `Veuillez patienter ....`
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
                    (async () => {
                        const Response = await fetch('http://localhost:3000/api/teddies/order', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data)
                        });
                        const content = await Response.json();
                        window.setTimeout(function () {
                            window.location = `validation.html?id=${content.orderId}&price=${prixFinaladd}&user=${prenom.value}`, localStorage.removeItem('ours');
                            localStorage.clear();
                        }, 2000)
                    })();
                }
            }, false);
        });
    })
   