async function getData(){
    let res=await fetch("https://champagne-salamander-kit.cyclic.app/handshop",{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }
    })
    let data=await res.json()
    console.log(data.data);
    appendData(data.data);
    }
    getData()
    function appendData(data){
    let cont=document.getElementById("container")
    cont.innerHTML=null;
    data.forEach((el,index)=>{
        let div=document.createElement("div")
        div.style.padding="5px"
        let img=document.createElement("img")
        let h2=document.createElement("h2")
        let h3=document.createElement("h3")
        let price=document.createElement("h2")
        let frag=document.createElement("h2")
        let btn=document.createElement("button")
        btn.innerText="ADD TO CART"
        btn.id="cart"
        btn.addEventListener("click",()=>{
            CartFun(el)
        })
        btn.style.borderRadius="7px"
        btn.style.padding="7px"
        btn.style.backgroundColor="#bb2660"
        btn.style.color="white"
        let btn2=document.createElement("button")
        btn2.innerText="WISHLIST"
        
        btn2.style.borderRadius="7px"
        btn2.style.padding="7px"
        btn2.style.backgroundColor="#bb2660"
        btn2.style.color="white"
        img.src=el.image
        h2.innerText=el.name
        h3.innerText=el.type
        price.innerText="$"+el.price
        frag.innerText=el.fragnance
    let div2=document.createElement("div")
    div2.style.display="flex"
    div2.style.justifyContent="space-evenly"
    div2.append(btn,btn2)
        div.append(img,h2,price,frag,h3,div2)
        cont.append(div)
    })
    }

    // Sorting Functionality
async function Sort() {
    let res=await fetch("https://champagne-salamander-kit.cyclic.app/airfreshner",{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }
    })
    let data=await res.json()
    let Data=data.data
    let H2L = document.getElementById("H2L");
    let L2H = document.getElementById("L2H");
    let round_box = document.getElementsByClassName("round-box")
    H2L.addEventListener("click",()=>{
        for(let el of round_box){
            el.style.backgroundColor = "#fff";
        }
        H2L.style.backgroundColor = "rgb(128, 96, 163)";
        Data.sort((a,b)=> b.price-a.price);
        appendData(Data);
    });
    L2H.addEventListener("click",()=>{
        for(let el of round_box){
            el.style.backgroundColor = "#fff";
        }
        L2H.style.backgroundColor = "rgb(128, 96, 163)";
        Data.sort((a,b)=> a.price - b.price);
        appendData(Data);
    })
}
Sort()

// Filtering Functionality
async function filter() {
    let res=await fetch("https://champagne-salamander-kit.cyclic.app/airfreshner",{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }
    })
    let data=await res.json()
    let Data=data.data
    let round_box = document.getElementsByClassName("round-box");

    document.getElementById("red").addEventListener("click",()=>{
        category("Floral","red");
    });
    document.getElementById("purple").addEventListener("click",()=>{
        category("Fruity","purple");
    });
    document.getElementById("white").addEventListener("click",()=>{
        category("Fresh","white");
    });
    document.getElementById("yellow").addEventListener("click",()=>{
        category("Sweet","yellow");
    });
   
    document.getElementById("clear").addEventListener("click",()=>{
        for(let el of round_box){
            el.style.backgroundColor = "#fff";
        }
        appendData(Data);
    });

   async  function category(frag,color) {
    console.log(color);
        let res=await fetch("https://champagne-salamander-kit.cyclic.app/airfreshner",{
            method:"GET",
            headers:{
                "Content-type":"application/json"
            }
        })
        let data=await res.json()
        let Data=data.data
        for(let el of round_box){
            el.style.backgroundColor = "#fff";
        }
        document.getElementById(`${color}`).style.backgroundColor = "rgb(128, 96, 163)";

        color= color.toLowerCase();
        let newData = Data.filter(el=>{
            if(el.fragnance == frag){
                return true;
            }
            return false;
        });

        appendData(newData);
    }
}

filter()

async function CartFun(el){
    let res=await fetch("https://champagne-salamander-kit.cyclic.app/cart/addcart",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
body:JSON.stringify(el)
    })
    let data=await res.json()
   console.log(data.msg);
   alert(data.msg)
}