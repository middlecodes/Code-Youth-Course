fetch("https://dummyjson.com/products")
.then((resp) =>{
    return resp.json()})
    .then((data) =>{
        let temp = "";

            for(let i=0; i < data.products.length; i++){
                // ITEM CONTAINER
               temp +=`<div class="item-box">`

            //    ITEM
               temp +=`<div class = "image">
               <img src= ${data.products[i].thumbnail} alt="image" height=250 width=300>
               </div>`;
               temp +=`<div class = "title" id="t${i}">${data.products[i].title}</div>`; 
               temp +=`<div class = "price" id="p${1}">${data.products[i].price}</div>`; 
               temp +=`<div class = "description" id="d${1}">${data.products[i].description}</div>`; 
               temp += `<button id="button" onclick"addtocart(this) type="button">Add to Cart</button>`
               temp += `<select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        </select>`
               temp += `</div>`;

            }
            document.getElementById("data").innerHTML=temp;

        })
        .catch((err) => console.log("error", err))

            let cartArray = [];
            function addtocart (element){

                const parent = document.querySelector("#data");
                const div = parent.parentElement;
                // console.log(div);

                // const info = parent.querySelector('.info').innerText;
                // console.log(info);


                // const title = parent.querySelector('.title').innerText;

                // const price = parent.querySelector('.price').innerText;
            }

            // const cartItem = {
            //     name: title,
            //     price: price, 
            //     desc: info,
            // }



            // 1. Fetching products
            // 2. Add to Cart
            // 3. display cart in table format 
            // 4. Add remove Item function(similar to add cart)
            // 5. add quantity(optional) -->
   
