const api = "http://localhost:3000/api/teddies";

fetch(api)
    .then(response => response.json())
    .then(teddies => {
        const container = document.getElementById("products");

        for (const teddy of teddies) {

            container.innerHTML += `
        <div class="col-md-5 mr-auto text-center mt-5 justify-content-between border">
            <h1>${teddy.name}</h1>
            <img class="col-md-auto" width="200" height="auto" src="${teddy.imageUrl}"></img>
            <div>${(teddy.price/100).toFixed(2)} €</div>
            <a type="button" class="btn btn-danger my-2" href="produits.html?produit=${teddy._id}">Description produit</a>
        </div>`

        }

        const panier = document.getElementById("lien-panier");


        panier.addEventListener("click", event => {
            if (localStorage.getItem("ours") === null) {
                window.location = `panierVide.html`
            } else {
                window.location = `panier.html`
            }
        })

        const panierBis = document.getElementById("panierBis");

        if (localStorage.getItem("ours") != null) {
            panierBis.addEventListener("click", event => {
                if (localStorage.getItem("ours") === null) {
                    window.location = `panierVide.html`
                } else {
                    window.location = `panier.html`
                }
            })
        } else {}

        let p = teddies.length;
        console.log(p);

    })