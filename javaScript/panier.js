const api = "http://localhost:3000/api/teddies/";

fetch(api)
    .then(response => response.json())

    .then(teddies => {

        window.addEventListener('load', event => {
            if (localStorage.getItem("ours") === null) {
                localStorage.clear();
                window.location = `panierVide.html`
            }
        })

        let retour = JSON.parse(localStorage.getItem('ours'));
        const fact = document.getElementById("table-p");

        var prixTotal = [];
        var products = [];



        for (let i = 0; i < retour.length; i++) {

            let p = retour[i];

            fact.innerHTML += `
            <tbody>
                <tr>
                    <td class="border" scope="row"><a class="mr-0" href="produits.html?produit=${p["id"]}"><img width="60" height="auto" src="${p["img"]}"> </a>${p["name"]}</td>
                    <td class="border" scope="row">${p["color"]}</td>
                    <td class="border">${p["price"].toFixed(2)} €</td>
                    <td class="border">${p["quantity"]}</td>
                    <td class""prix>${((p["price"])*(p["quantity"])).toFixed(2)} €</td>
                </tr>
            </tbody>    `
            prixGlobal = (p["price"]) * (p["quantity"]);

            prixTotal.push(prixGlobal);

            products.push(p["id"]);

        }

        // 

        console.log(products);

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

        const contact = {};
        const facture = {};

        function addPanier(object) {
            prenomId = document.getElementById("prenom");
            nomId = document.getElementById("nom");
            adresseId = document.getElementById("adresse");
            villeId = document.getElementById("ville");
            emailId = document.getElementById("email");
            contact.prenom = prenomId.value;
            contact.nom = nomId.value;
            contact.adresse = adresseId.value;
            contact.ville = villeId.value;
            contact.email = emailId.value;
            if (contact.prenom != "" && contact.nom != "" && contact.adresse != "" && contact.ville != "" && contact.email != "") {
                localStorage.setItem('products', JSON.stringify(contact));
                facture.prixFinal = prixFinaladd;
                facture.id = retour.id;
                localStorage.setItem('prixFinal', JSON.stringify(facture));
            }
        }

        const validForm = document.getElementById("confirmercommande");

        let forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            validForm.addEventListener('click', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
                addPanier(contact);
                if (localStorage.getItem("products") != null && localStorage.getItem("ours") != null && localStorage.getItem("prixFinal") != null) {
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
                    }
                    console.log(contact);
                    console.log(products);
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

                        console.log(content);
                        console.log(content.orderId);
                        window.setTimeout(function () {
                            window.location = `validation.html?id=${content.orderId}&price=${prixFinaladd}&user=${prenom.value}`, localStorage.removeItem('ours')
                        }, 2000)
                    })();
                }
            }, false);
        });
    })