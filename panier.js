const api = "http://localhost:3000/api/teddies/";
console.log(api);


fetch(api)
    .then(response => response.json())

    .then(teddies => {

        let retour = JSON.parse(localStorage.getItem('ours'));
        const fact = document.getElementById("table-p");

        var prixTotal = [];


        for (let i = 0; i < retour.length; i++) {

            let p = retour[i];

            fact.innerHTML += `
            <tbody>
                <tr>
                    <td class="border" scope="col"><a class="mr-0" href="produits.html?${p["id"]}"><img width="60" height="auto" src="${p["img"]}"></a><a class="float-right mr--5"><i class="fas fa-trash-alt"></i></a></td>
                    <td class="border" scope="row">${p["name"]}</td>
                    <td class="border">${p["price"].toFixed(2)} €</td>
                    <td class="border">${p["quantity"]}</td>
                    <td class""prix>${((p["price"])*(p["quantity"])).toFixed(2)} €</td>
                </tr>
            </tbody>
            `
            prixGlobal = (p["price"]) * (p["quantity"]);

            prixTotal.push(prixGlobal);
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

        const contact = {};
        const facture = {};

        function addPanier(object) {
            prenomId = document.getElementById("prenom");
            nomId = document.getElementById("nom");
            adresseId = document.getElementById("adresse");
            villeId = document.getElementById("ville");
            emailId = document.getElementById("email");
            prenom = prenomId;
            nom = nomId;
            adresse = adresseId;
            ville = villeId;
            email = emailId;
            contact.prenom = prenom.value;
            contact.nom = nom.value;
            contact.adresse = adresse.value;
            contact.ville = ville.value;
            contact.email = email.value;
            if (contact.prenom != "" && contact.nom != "" && contact.adresse != "" && contact.ville != "" && contact.email != "") {
                localStorage.setItem('products', JSON.stringify(contact));
                facture.prixFinal = prixFinaladd;
                localStorage.setItem('prixFinal', JSON.stringify(facture));
            }
        }

        const validForm = document.getElementById("confirmercommande");

        window.addEventListener('load', function () {
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
                        window.setTimeout(function () {
                        window.location = `validation.html`, localStorage.removeItem('ours');
                    }, 2000);
                    }
                }, false);
            });
        }, false);
    })