const urlRecupId = window.location.search;
const urlRecup = urlRecupId.substr(1);
const api = "http://localhost:3000/api/teddies/" + urlRecup;

fetch(api)
    .then(response => response.json())

    .then(teddy => {

        const container = document.getElementById("products");
        const titleSecondary = document.getElementById("title-secondary");
         // mise en place de la partie HTML dynamique
        container.innerHTML += `
            <div class="col-md-12 mr-auto text-center mt-2">
                <h1 class="text-center">${teddy.name}</h1>
                <img class="col-md-auto center-block" width="500" height="500" src="${teddy.imageUrl}"></img>
                <p class="font-weight-bold h3">${teddy.price / 100} €</p>
                <p class="h6">${teddy.description}</p>
                <a id="add-article" type="button" class="btn btn-danger my-2" href="produits.html?${teddy._id}">ajouter au panier</a>
                <a id="sup-article" type="button" class="btn btn-danger my-2" href="produits.html?${teddy._id}">vider panier</a>
            </div>`
            
        titleSecondary.innerHTML += `${teddy.name}` // fin de la mise en page HTML dynamique

        const choix = document.getElementById("couleur-choix");
        const listOurs = teddy.colors;

        for (let i = 0; i < listOurs.length; i++) {
            let retour = listOurs[0 + i];
            choix.innerHTML += `<option value="couleur">${retour}</option>`
        }

        let oursTab = [];

        var oursId = {
            name: teddy.name,
            img: teddy.imageUrl,
            price: teddy.price / 100,
            id : teddy._id,
            quantity: 1
        };

        newOursId = true ;
        

        function add() {

            if (localStorage.getItem("ours") === null) {
                oursTab.push(oursId);
                localStorage.setItem("ours", JSON.stringify(oursTab));
            } else {
                oursTab = JSON.parse(localStorage.getItem('ours'));
                oursTab.forEach((newOursTab) => {
                    if (teddy.name === newOursTab.name) {
                        newOursTab.quantity++;
                        newOursId = false;
                    }
                })
                if (newOursId) oursTab.push(oursId);
                localStorage.setItem('ours', JSON.stringify(oursTab))
            }
        }

        let click = {quantity: 1}

        function onClick (){
            if (localStorage.getItem("click") === null) {
                localStorage.setItem("click", JSON.stringify(click));
            } else {
                click = JSON.parse(localStorage.getItem('click'))
                for (newClick in click){
                click.quantity++;
            }
                localStorage.setItem("click", JSON.stringify(click));
            }
        }

        const addArticle = document.getElementById("add-article");
        addArticle.addEventListener('click', event => {
            add();
            onClick();
        })

        const supArticle = document.getElementById("sup-article");
        supArticle.addEventListener('click', event => {
            localStorage.clear();
        })

        let retourClick = JSON.parse(localStorage.getItem('click'));
        let retourFinal = document.getElementById("lien-panier");

        if (localStorage.getItem('click') === null) {
            retourFinal.innerHTML += `(vide)`
        } else {
            retourFinal.innerHTML += `(${retourClick.quantity})`
        }
    })