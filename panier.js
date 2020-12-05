const urlRecupId = window.location.search;
const urlRecup = urlRecupId.substr(1);
const api = "http://localhost:3000/api/teddies/" + urlRecup;
console.log(api);


fetch(api)
    .then(response => response.json())
    
    .then(teddy => {

        function panierOurs (){
            var monOurs_json = localStorage.getItem("ours");                                    //
            var oursObject = JSON.parse(monOurs_json);
            // Affichage dans la console
            console.log(monOurs_json);
            console.log(oursObject);
        }

        panierOurs();

        // function commander (){
        //     return new Promise (function(resolve, reject){
        //         var addOurs = panierOurs()
        //         addOurs.ready = function (err , addOurs){
        //             if (err) {
        //                 return reject(Error("erreur panier vide"))
        //             }
        //             return resolve(addOurs)
        //         }
        //     })
        // };

        // panierOurs();
        // console.log(panierOurs);
        // console.log(commander);
        
        
        // var monOurs_json = localStorage.getItem('');                                    //
        // var oursObject = JSON.parse(monOurs_json);
        // // Affichage dans la console
        // console.log(oursObject);

        // const container = document.getElementById("products");
        // const titleSecondary = document.getElementById("title-secondary");                  // mise en place de la partie HTML dynamique
        // container.innerHTML += `
        //     <div class="col-md-12 mr-auto text-center mt-2">  
        //         <p class="font-weight-bold h3">${oursObject} €</p>
        //         <a id="sup-article" type="button" class="btn btn-danger my-2" href="produits.html?${teddy._id}">vider panier</a>
        //     </div>`                                                                         // fin de la mise en page HTML dynamique
                                                   

        // var monOurs_json = localStorage.getItem("ours");
        // var oursObject = JSON.parse(monOurs_json);
        // // Affichage dans la console
        // console.log(oursObject);
    })



// const urlRecup = window.location.search;
// const urlUtils = urlRecup.substr(1)
// console.log(urlRecup);
// console.log(urlUtils)
