const api = "http://localhost:3000/api/teddies/";
console.log(api);


fetch(api)
    .then(response => response.json())
    
    .then(teddies => {

        let retour = JSON.parse(localStorage.getItem('ours'));
        const fact = document.getElementById("table");

        var prixTotal = [];

        for (let i = 0; i < retour.length; i++) {

            let p = retour[i];
            
            fact.innerHTML += `
            <tbody>
                <tr>
                    <td class="border" scope="col"><a href="produits.html?${p["id"]}"><img width="80" src="${p["img"]}"></a></td>
                    <td class="border" scope="row">${p["name"]}</td>
                    <td class="border">${p["price"]} €</td>
                    <td class="border">${p["quantity"]}</td>
                    <td class""prix>${(p["price"])*(p["quantity"])} €</td>
                </tr>
            </tbody>
            `    
            prixGlobal = (p["price"])*(p["quantity"]);

            prixTotal.push(prixGlobal);
        }

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
            
        let prixFinal = prixTotal.reduce(reducer);

        fact.innerHTML += `
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="border">Prix Total :</td>
                    <td>${(prixFinal)} €</td>
                </tr>
            </tbody>
            ` 
        let retourClick = JSON.parse(localStorage.getItem('click'));
        let retourFinal = document.getElementById("lien-panier");

        if (localStorage.getItem('click') === null) {
            retourFinal.innerHTML += `(vide)`
        } else {
            retourFinal.innerHTML += `(${retourClick.quantity})`
        }
    })