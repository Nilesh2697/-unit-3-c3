let arr = JSON.parse(localStorage.getItem("purchase"))

arr.map(function(el){
    let div = document.createElement("div");

    let img = document.createElement("img");
    img .src= el.image

    let name = document.createElement("p")
    name.innerText= el.name;

    let price = document.createElement("p")
    price.innerText=el.price;
    
    div.append(img,name,price)
    document.getElementById("purchased_vouchers").append(div)
})