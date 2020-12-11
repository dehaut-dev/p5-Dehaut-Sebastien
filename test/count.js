const countPanier = document.getElementById("lien-panier");

oursCount = localStorage.getItem('ours');

console.log(oursCount);

let p = (JSON.parse(localStorage.getItem('ours'))).length;
        console.log(p);