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
    const addArticle = document.getElementById("add-article");
    addArticle.addEventListener('click', event => {
        add();    
    })
        
    const supArticle = document.getElementById("sup-article");
    supArticle.addEventListener('click', event => {
        localStorage.clear();
    })
    
    // version 2
        
    let oursTab = [];

    let oursId = {
        name : teddy.name,
        price : teddy.price,
        img : teddy.imageUrl,
        quantity : 1
    };

    console.log(oursId.quantity);
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

    const addArticle = document.getElementById("add-article");
    addArticle.addEventListener('click', event => {
        add();
    })
        
    const supArticle = document.getElementById("sup-article");
    supArticle.addEventListener('click', event => {
        localStorage.clear();
    })
    
    //version 3 

    let oursTab = [];

    var oursId = {
        name : teddy.name,
        price : teddy.price,
        img : teddy.imageUrl,
        quantity : 1
    }; 

    console.log(oursId.quantity);
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

    const addArticle = document.getElementById("add-article");
    addArticle.addEventListener('click', event => {
        add();
    })
        
    const supArticle = document.getElementById("sup-article");
    supArticle.addEventListener('click', event => {
        localStorage.clear();
    })

    // version 4

    let oursTab = [];

    var oursId = {
        name : teddy.name,
        price : teddy.price,
        img : teddy.imageUrl,
        quantity : 1
    }; 

    console.log(oursId.quantity);
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
    
    const addArticle = document.getElementById("add-article");
    addArticle.addEventListener('click', event => {
        add();
    })
    
    const supArticle = document.getElementById("sup-article");
    supArticle.addEventListener('click', event => {
        localStorage.clear();
    })

    //version 5

    let oursTab = [];

    var oursId = {
        name : teddy.name,
        price : teddy.price,
        img : teddy.imageUrl,
        quantity : 1
    };   

    console.log(oursId.quantity);
    function add (){

        if (localStorage.getItem("ours") === null) {
            oursTab.push(oursId);
            localStorage.setItem("ours", JSON.stringify(oursTab)); 
        } else {
            oursTab = JSON.parse(localStorage.getItem('ours'))
            oursTab.forEach((newOursTab) => {
              if (teddy.name === newOursTab.name) {
                newOursTab.quantity++;
              }
            })
            oursTab.push(oursId);
            localStorage.setItem('ours', JSON.stringify(oursTab))   
    }}
        
    const addArticle = document.getElementById("add-article");
    addArticle.addEventListener('click', event => {
        add();
    })
        
    const supArticle = document.getElementById("sup-article");
    supArticle.addEventListener('click', event => {
        localStorage.clear();
    })


 // vesion 6
 
    let oursTab = [];

    var oursId = {
        name : teddy.name,
        price : teddy.price,
        img : teddy.imageUrl,
        quantity : 1
    };

    newDifferentProduct = true;    

    console.log(oursId.quantity);
    function add (){

        if (localStorage.getItem("ours") === null) {
            oursTab.push(oursId);
            localStorage.setItem("ours", JSON.stringify(oursTab)); 
        } else {
            oursTab = JSON.parse(localStorage.getItem('ours'))
            oursTab.forEach((newOursTab) => {
              if (teddy.name === newOursTab.name) {
                newOursTab.quantity++;
                newDifferentProduct = false;
              }
            })
            if (newDifferentProduct) oursTab.push(oursId);
            localStorage.setItem('ours', JSON.stringify(oursTab))   
        }}
        

        const addArticle = document.getElementById("add-article");
        addArticle.addEventListener('click', event => {
            add();
        })
        
        const supArticle = document.getElementById("sup-article");
        supArticle.addEventListener('click', event => {
            localStorage.clear();
        })


