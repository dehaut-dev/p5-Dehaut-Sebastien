//version 1

    function add (){
        let oursTab = [];

        let oursId = {
            id : teddy._id,
            name : teddy.name,
            price : teddy.price,
            description : teddy.description,
            quantity : 0
        };
        oursTab.push(oursId); 
        localStorage.setItem("ours", JSON.stringify(oursTab));  
    }
    
    // version 2
        
    let oursTab = [];

    let oursId = {
        name : teddy.name,
        price : teddy.price,
        img : teddy.imageUrl,
        quantity : 1
    };

    function add (){

        if (localStorage.getItem("ours") === null) {
            oursTab.push(oursId);
            localStorage.setItem("ours", JSON.stringify(oursTab)); 
        } else {
            oursId.quantity ++ ;
            oursTab.push(oursId);
            localStorage.setItem("ours", JSON.stringify(oursTab)); 
        }   
    }
    
    //version 3 

    let oursTab = [];

    var oursId = {
        name : teddy.name,
        price : teddy.price,
        img : teddy.imageUrl,
        quantity : 1
    }; 

    function add (){

        if (localStorage.getItem("ours") === null) {
            oursTab.push(oursId);
            localStorage.setItem("ours", JSON.stringify(oursTab)); 
        } else {
            oursTab = JSON.parse(localStorage.getItem('ours'))
            for (newOursTab in oursTab){
                newOursTab.quantity++;
            }
            oursTab.push(oursId);
            localStorage.setItem('ours', JSON.stringify(oursTab))   
    }}

    // version 4

    let oursTab = [];

    var oursId = {
        name : teddy.name,
        price : teddy.price,
        img : teddy.imageUrl,
        quantity : 1
    }; 

    function add (){

        if (localStorage.getItem("ours") === null) {
            oursTab.push(oursId);
            localStorage.setItem("ours", JSON.stringify(oursTab)); 
        } else {
            oursTab = JSON.parse(localStorage.getItem('ours'))
            for (newOursTab in oursTab){
              if (teddy.name === newOursTab.name) {
                newOursTab.quantity++;
              }
            }
            oursTab.push(oursId);
            localStorage.setItem('ours', JSON.stringify(oursTab))   
    }}

    //version 5

    let oursTab = [];

    var oursId = {
        name: teddy.name,
        price: teddy.price,
        img: teddy.imageUrl,
        quantity: 1,
        newOurs : true
    };

    function add (){

        if (localStorage.getItem("ours") === null) {
            oursTab.push(oursId);
            localStorage.setItem("ours", JSON.stringify(oursTab)); 
        } else {
            oursTab = JSON.parse(localStorage.getItem('ours'))
            for (newOursTab of oursTab){
                newOursTab.quantity++;
                newOursTab = false ;
            }
            oursTab.push(newOursTab);
            localStorage.setItem('ours', JSON.stringify(oursTab))   
    }}


    //version 6

    let oursTab = [];

    var oursId = {
        name : teddy.name,
        price : teddy.price,
        img : teddy.imageUrl,
        quantity : 1
    };   
    
    function add (){

        if (localStorage.getItem("ours") === null) {
            oursTab.push(oursId);
            localStorage.setItem("ours", JSON.stringify(oursTab)); 
        } else {
            oursTab = JSON.parse(localStorage.getItem('ours'))
            oursTab.forEach((newOursTab) => {
              if (oursTab.name === newOursTab.name) {
                newOursTab.quantity++;
              }
            })
            oursTab.push(oursId);
            localStorage.setItem('ours', JSON.stringify(oursTab))   
    }}

 // vesion 6
 
 let oursTab = [];

 var oursId = {
     name: teddy.name,
     price: teddy.price,
     img: teddy.imageUrl,
     quantity: 1,
     newOurs : true
 };

    function add (){

        if (localStorage.getItem("ours") === null) {
            oursTab.push(oursId);
            localStorage.setItem("ours", JSON.stringify(oursTab)); 
        } else {
            oursTab = JSON.parse(localStorage.getItem('ours'))
            oursTab.forEach((newOursTab) => {
              if (teddy.name === newOursTab.name) {
                newOursTab.quantity++;
                newOurs = false;
              }
            })
            if (newOurs) oursTab.push(oursId);
            localStorage.setItem('ours', JSON.stringify(oursTab))   
        }}

        // version qui marche :)

        let oursTab = [];

        var oursId = {
            name: teddy.name,
            price: teddy.price,
            img: teddy.imageUrl,
            quantity: 1
        };

        newOursId = true;

        function add() {

            if (localStorage.getItem("ours") === null) {
                oursTab.push(oursId);
                localStorage.setItem("ours", JSON.stringify(oursTab));
            } else {
                oursTab = JSON.parse(localStorage.getItem('ours'))
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


        //version ameliorer panier 

        function add() {

            if (localStorage.getItem("ours") === null) {
                oursTab.push(oursId);
                localStorage.setItem("ours", JSON.stringify(oursTab));
            } else {
                oursTab = JSON.parse(localStorage.getItem('ours'));
                const ours = oursTab.find(ours => ours.name === teddy.name)
                oursTab.forEach((ours) => {
                        ours.quantity++;
                        newOursId = false;
                })
                if (newOursId) oursTab.push(oursId);
                localStorage.setItem('ours', JSON.stringify(oursTab))
            }
        }

        // panier inutile 

        function panier (){
            if (localStorage.getItem("ours") === null) {
                const vide = document.getElementById("panier");
                vide.innerHTML += `<a class="nav-link" href="panier-vide.html" id="lien-panier">Panier</a>`
            } else {
                const plein = document.getElementById("panier");
                plein.innerHTML += `<a class="nav-link" href="panier.html" id="lien-panier">Panier</a>`
            }
          }
          panier ();

        //click 


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


        let retourClick = JSON.parse(localStorage.getItem('click'));
        let retourFinal = document.getElementById("lien-panier");

        if (localStorage.getItem('click') === null) {
            retourFinal.innerHTML += `(vide)`
        } else {
            retourFinal.innerHTML += `(${retourClick.quantity})`
        }


        ///:


        // colors = addEventListener( "mouseover", event  => {
        //     oursId.colors = choix.value;
        // })

        for (let i = 0; i < listOurs.length; i++) {
            let retour = listOurs[0 + i];
            choix.innerHTML += `<option value="${retour}">${retour}</option>`
        }

        function change_valeur() {
            select = document.getElementById("couleur-choix");
            choice = select.selectedIndex  // Récupération de l'index du <option> choisi
            valeur_choisie = select.options[choice].value; 
            console.log(valeur_choisie);
        }

        //supp

        supp.addEventListener("click", function(event){
            suppressionArticle(event.target.id);
        });



//panier
        // for (let i = 0; i < retour.length; i++) {

        //     let p = retour[i];
            
        //     fact.innerHTML += `
        //     <tbody>
        //         <tr>
        //             <td class="border" scope="col"><a href="produits.html?${p["id"]}"><img width="80" src="${p["img"]}"></a><a class="ml-5"><i class="fas fa-trash-alt"></i></a></td>
        //             <td class="border" scope="row">${p["name"]}</td>
        //             <td class="border">${p["price"]} €</td>
        //             <td class="border">${p["quantity"]}</td>
        //             <td class""prix>${(p["price"])*(p["quantity"])} €</td>
        //         </tr>
        //     </tbody>
        //     `                
        //     prixGlobal = (p["price"])*(p["quantity"]);

        //     prixTotal.push(prixGlobal);
        // }


      //  supp panier 

      const supArticle = document.getElementById("sup-article");
        supArticle.addEventListener('click', event => {
            localStorage.clear();
        })