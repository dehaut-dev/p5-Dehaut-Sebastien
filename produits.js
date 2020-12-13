const urlRecupId = window.location.search;
const urlRecup = urlRecupId.substr(1);
const api = "http://localhost:3000/api/teddies/" + urlRecup;

fetch(api)
    .then(response => response.json())

    .then(teddy => {

        const container = document.getElementById("fiche-article");
        const titleSecondary = document.getElementById("title-secondary");
         // mise en place de la partie HTML dynamique
        container.innerHTML += `
                <h1 class="text-center">${teddy.name}</h1>
                <img class="col-md-auto center-block" width="500" height="500" src="${teddy.imageUrl}"></img>
                <p class="font-weight-bold h3">${(teddy.price/100).toFixed(2)} €</p>
                <p class="h6">${teddy.description}</p>
            </div>`
            
        titleSecondary.innerHTML += `${teddy.name}` // fin de la mise en page HTML dynamique

        const choix = document.getElementById("couleur-choix");
        const listOurs = teddy.colors;
        

        for (let i = 0; i < listOurs.length; i++) {
            let retour = listOurs[0 + i];
            choix.innerHTML += `<option value="${retour}">${retour}</option>`
        }

        function change_valeur(monObjet) {
            select = document.getElementById("couleur-choix");
            choice = select.selectedIndex  // Récupération de l'index du <option> choisi
            valeur_choisie = select.options[choice].value;
            oursId.colors = valeur_choisie
        }

        

        let oursTab = [];

        var oursId = {
            name: teddy.name,
            img: teddy.imageUrl,
            price: teddy.price / 100,
            id : teddy._id,
            quantity: 1,
        };

        newOursId = true ;
        
        function add() {

            if (localStorage.getItem("ours") === null) {
                oursTab.push(oursId);
                localStorage.setItem("ours", JSON.stringify(oursTab));
            } else {
                oursTab = JSON.parse(localStorage.getItem('ours'));
                // const ours = oursTab.find(ours => ours.name === teddy.name)
                // console.log(ours);
                // console.log(quantityAdd);
                oursTab.forEach((newOursTab) => {
                    if (teddy._id === newOursTab.id) {
                        newOursTab.quantity++;
                        newOursId = false;
                    }
                })
                if (newOursId) oursTab.push(oursId);
                localStorage.setItem('ours', JSON.stringify(oursTab))
            }
        }   

        const addArticle = document.getElementById("add-article");
        addArticle.textContent = "ajouter au panier ";

        var count = 0;
        function countOurs(){
            count ++
        }

        addArticle.addEventListener('click', event => {
            change_valeur(oursId);
            add(); 
            countOurs();            
            if (count === 1) {
                addArticle.textContent = count + " article" +  " ajouté au panier";
            } else {
                addArticle.textContent = count + " articles" +  " ajoutés au panier";
            } 
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