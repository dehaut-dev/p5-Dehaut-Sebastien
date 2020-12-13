const api = "http://localhost:3000/api/teddies/";
console.log(api);


fetch(api)
    .then(response => response.json())

    .then(teddies => {

        let retour = JSON.parse(localStorage.getItem('products'));
        let retourPrix = JSON.parse(localStorage.getItem('prixFinal'));

        const pseudo = document.getElementById("pseudo");
        const prix = document.getElementById("prix");
        const boutonRetour = document.getElementById("bouton-retour");

        pseudo.innerText = retour.nom;
        prix.innerText = retourPrix.prixFinal;

        boutonRetour.addEventListener("click", event => {
            localStorage.clear();
            window.location = `index.html`
        })

    })