const Signup=()=>{
    window.location.href="signUp.html"
}

function carticon(){
    let ci=document.getElementById("carticon")

    ci.style.display="none"

//     btn.addEventListener("click",()=>{
//         localStorage.setItem("loginstatus",false)
//     })
//     console.log(localStorage.getItem("loginstatus"))
   if(localStorage.getItem("loginstatus")===true){
    ci.style.display="block"
  
   }
   else if(localStorage.getItem("loginstatus")===false)
   {
    ci.style.display="none"
  
   }
// console.log(ci)
}

carticon()

// let btn=document.getElementById("logout")
// btn.addEventListener("click",()=>{
//      let ci=document.getElementById("carticon")
//     let btn=document.getElementById("logout")
//     ci.style.display="block"
//     btn.style.display="block"
// })