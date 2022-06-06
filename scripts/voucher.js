var wallet = JSON.parse(localStorage.getItem('user'))

wallet.map(function(el){
    document.getElementById("wallet_balance").innerText= el.amount
})

async function getData(){
    try{
        let res = await fetch(" https://masai-vouchers-api.herokuapp.com/api/vouchers")
        let data = await res.json();
        console.log(data[0].vouchers)

        appendData(data[0].vouchers)
    }
    catch(error){
        console.log(error);
    }
}
getData()

let arr=[]
const appendData=(data)=>{

    document.getElementById("voucher_list").innerText = null;

    data.forEach(function(el){
        let box = document.createElement("div");

        let img = document.createElement("img");
        img .src= el.image
    
        let name = document.createElement("p")
        name.innerText= el.name;
    
        let price = document.createElement("p")
        price.innerText=el.price;
    
        let btn = document.createElement("button")
        btn.innerText= "Buy";
        btn.setAttribute("class","buy_voucher")
        btn.addEventListener("click",function(){
            arr.push(el);
            localStorage.setItem("purchase",JSON.stringify(arr))
        })
        div.append(img,name,price,btn)
        document.getElementById("voucher_list").append(div)
    })
}