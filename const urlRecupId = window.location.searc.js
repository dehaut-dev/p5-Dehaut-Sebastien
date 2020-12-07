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


          // finction click valable 

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

