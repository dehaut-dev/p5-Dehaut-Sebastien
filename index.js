const api = "http://localhost:3000/api/teddies";

fetch(api)
    .then(response => response.json())
    .then(teddies => {
        const container = document.getElementById("products");
        for (const teddy of teddies) {

            container.innerHTML += `
        <div class="col-md-5 mr-auto text-center mt-5 justify-content-between border">
            <h1>${teddy.name}</h1>
            <img class="col-md-auto center-block" src="${teddy.imageUrl}"></img>
            <div>${teddy.price} €</div>
            <a type="button" class="btn btn-danger my-2" href="produits.html?${teddy._id}">information</a>
        </div>`

        }
        let p = teddies.length;
        console.log(p);
  
    })