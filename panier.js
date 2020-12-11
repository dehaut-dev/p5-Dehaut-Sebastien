const api = "http://localhost:3000/api/teddies/";
console.log(api);


fetch(api)
    .then(response => response.json())

    .then(teddies => {

        if (localStorage.getItem("ours") != null) {

            let retour = JSON.parse(localStorage.getItem('ours'));
            const fact = document.getElementById("table-p");

            var prixTotal = [];


            for (let i = 0; i < retour.length; i++) {

                let p = retour[i];

                fact.innerHTML += `
            <tbody>
                <tr>
                    <td class="border" scope="col"><a class="mr-0" href="produits.html?${p["id"]}"><img width="60" height="auto" src="${p["img"]}"></a><a class="float-right mr--5"><i class="fas fa-trash-alt"></i></a></td>
                    <td class="border" scope="row">${p["name"]}</td>
                    <td class="border">${p["price"].toFixed(2)} €</td>
                    <td class="border">${p["quantity"]}</td>
                    <td class""prix>${((p["price"])*(p["quantity"])).toFixed(2)} €</td>
                </tr>
            </tbody>
            `
                prixGlobal = (p["price"]) * (p["quantity"]);

                prixTotal.push(prixGlobal);
            }


            const prixFinal = document.getElementById("prix-final")
            const reducer = (accumulator, currentValue) => accumulator + currentValue;

            let prixFinaladd = prixTotal.reduce(reducer);

            prixFinal.innerHTML +=
                `${(prixFinaladd).toFixed(2)} €`

            const supArticle = document.getElementById("sup-article");
            supArticle.addEventListener('click', event => {
                localStorage.clear();
            })

        } else {

            const videPlein = document.getElementById("plein");
            
            videPlein.replaceWith("");

            const vide = document.getElementById("vide");
            vide.innerHTML += `<p class="h1 text-center mt-5">Votre panier est vide !!!</p>`
        }





    })