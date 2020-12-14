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
                <p class="font-weight-bold h3">${teddy.price / 100} €</p>
                <p class="h6">${teddy.description}</p>`
            
        titleSecondary.innerHTML += `${teddy.name}` // fin de la mise en page HTML dynamique

        const choix = document.getElementById("couleur-choix");
        const listOurs = teddy.colors;
        

        for (let i = 0; i < listOurs.length; i++) {
            let retour = listOurs[0 + i];
            choix.innerHTML += `<option type="texte" value>${retour}</option>`
        }
       

        let oursTab = [];

        var oursId = {
            name: teddy.name,
            img: teddy.imageUrl,
            price: teddy.price / 100,
            id : teddy._id,
            quantity: 1,
            colors : choix.value
        };

        // colors = addEventListener( "mouseover", event  => {
        //     oursId.colors = choix.value;
        // })

        color =  choix.querySelector.value;
    
        newOursId = true ;
        

        function add() {

            if (localStorage.getItem("ours") === null) {
                oursTab.push(oursId);
                localStorage.setItem("ours", JSON.stringify(oursTab));
            } else {
                oursTab = JSON.parse(localStorage.getItem('ours'));
                // const ours = oursTab.find(ours => ours.name === teddy.name)
                // console.log(ours);
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
        addArticle.addEventListener('click', event => {
            add();
            console.log(color);
        })

        const supArticle = document.getElementById("sup-article");
        supArticle.addEventListener('click', event => {
            localStorage.clear();
        })
    })



    //corbeille
    
    <a class="float-right mr--5"><i class="fas fa-trash-alt"></i></a>