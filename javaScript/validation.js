const urlRecupId = window.location.search;
var searchParams = new URLSearchParams(urlRecupId);
const idRecup = searchParams.getAll("id");
const userRecup = searchParams.getAll("user");
const priceRecup = searchParams.getAll("price");

console.log(idRecup);
console.log(userRecup);
console.log(priceRecup);
console.log(typeof (priceRecup));


const pseudo = document.getElementById("pseudo");
const prix = document.getElementById("prix");
const boutonRetour = document.getElementById("bouton-retour");
const numCommande = document.getElementById("numcommande");

numCommande.innerText = idRecup;
pseudo.innerText = userRecup;
prix.innerText = parseInt(priceRecup).toFixed(2);

boutonRetour.addEventListener("click", event => {
    localStorage.clear();
    window.location = `index.html`
})