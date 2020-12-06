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


