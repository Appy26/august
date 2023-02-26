function displaydata(data){
    let card=document.getElementById("card-items")
    card.innerHTML=null;
    data.map((el,index)=>{
        let div=document.createElement("div")
        div.style.padding="5px"
        let img=document.createElement("img")
        let h2=document.createElement("h2")
        let h3=document.createElement("h3")
        let price=document.createElement("h2")
        let frag=document.createElement("h2")
        let btn=document.createElement("button")
        btn.innerText="DELETE"
        btn.id="cart"
        btn.addEventListener("click",()=>{
            CartDelete(el._id)
        })
        btn.style.borderRadius="7px"
        btn.style.padding="7px"
        btn.style.backgroundColor="#bb2660"
        btn.style.color="white"
       
        img.src=el.image
        h2.innerText=el.name
        h3.innerText=el.type
        price.innerText="$"+el.price
        frag.innerText=el.fragnance
    let div2=document.createElement("div")
    div2.append(btn)
        div.append(img,h2,price,frag,h3,div2)
        card.append(div)

    })
    }

const getData=async ()=>{
    let res=await fetch("https://champagne-salamander-kit.cyclic.app/cart",{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }
    })
    let data=await res.json()
   console.log(data.data);
   document.getElementById("total-items").innerText=data.data.length
   let items=data.data
   let sum=0
  for(let i=0;i<items.length;i++){
    console.log(typeof(items[i].price));
sum+=items[i].price
  }
   document.getElementById("total-price").innerText=sum
   displaydata(data.data)
}
getData()



async function CartDelete(Id){
    let res=await fetch(`https://champagne-salamander-kit.cyclic.app/cart/delete/${Id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json"
        }
    })
    let data=await res.json()
   console.log(data.msg);
   alert(data.msg)
   getData()
}
