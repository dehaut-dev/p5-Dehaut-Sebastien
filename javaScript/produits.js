const urlRecupId = window.location.search;
console.log(urlRecupId);
var searchParams = new URLSearchParams(urlRecupId);
const urlRecup = searchParams.getAll("produit");
const api = "http://localhost:3000/api/teddies/" + urlRecup;

fetch(api)
    .then(response => response.json())

    .then(teddy => {

        const container = document.getElementById("fiche-article");
        const titleSecondary = document.getElementById("title-secondary");
        // mise en place de la partie HTML dynamique
        container.innerHTML += `
                <h1 class="text-center">${teddy.name}</h1>
                <img class="col-md-8 img-fluid" width="auto" height="300" src="${teddy.imageUrl}">
                <p class="font-weight-bold h3">${(teddy.price/100).toFixed(2)} €</p>
                <p class="h6">${teddy.description}</p>`

        titleSecondary.innerHTML += `${teddy.name}` // fin de la mise en page HTML dynamique

        const choix = document.getElementById("couleur-choix");
        const listOurs = teddy.colors;


        for (let i = 0; i < listOurs.length; i++) {
            let retour = listOurs[0 + i];
            choix.innerHTML += `<option value="${retour}">${retour}</option>`
        }

        function changeValeur(monObjet) {
            select = document.getElementById("quantité");
            choice = select.selectedIndex // Récupération de l'index du <option> choisi
            valeur_choisie = select.options[choice].value;
            oursId.quantity = parseInt(valeur_choisie);
        }

        function changeCouleur(monObjet) {
            select = document.getElementById("couleur-choix");
            choice = select.selectedIndex // Récupération de l'index du <option> choisi
            valeur_choisie = select.options[choice].value;
            oursId.color = valeur_choisie;
        }

        let oursTab = [];

        var oursId = {
            name: teddy.name,
            img: teddy.imageUrl,
            price: teddy.price / 100,
            id: teddy._id,
        };

        function add() {
            newOursId = true;
            if (localStorage.getItem("ours") === null) {
                oursTab.push(oursId);
                localStorage.setItem("ours", JSON.stringify(oursTab));
            } else {
                oursTab = JSON.parse(localStorage.getItem('ours'));
                const selectColor = document.getElementById("couleur-choix").value;
                oursTab.forEach((newOursTab) => {
                    // console.log(teddy._id +" === " + newOursTab.id +" && " + newOursTab.color +" == "+ selectColor);
                    if (teddy._id === newOursTab.id && newOursTab.color === selectColor) {
                        const quantité =  parseInt(document.getElementById("quantité").value);
                        newOursTab.quantity += quantité;
                        newOursId = false;
                    }
                })
                if (newOursId) oursTab.push(oursId);
                localStorage.setItem('ours', JSON.stringify(oursTab))
            }
        }

        const addArticle = document.getElementById("add-article");
        addArticle.textContent = "ajouter au panier ";

        window.alert = function (titre) {
            document.getElementById('alertPanel').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        }

        const retourCouleurs = document.getElementById("retouCouleurs");
        retourCouleurs.setAttribute("href", "produits.html" + urlRecupId)

        addArticle.addEventListener('click', event => {
            changeCouleur(oursId);
            changeValeur(oursId);
            add();
            alert();
        })

        const panier = document.getElementById("lien-panier");

        panier.addEventListener("click", event => {
            if (localStorage.getItem("ours") === null) {
                window.location = `panierVide.html`
            } else {
                window.location = `panier.html`
            }
        })
    })