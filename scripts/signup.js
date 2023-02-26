// let su=document.getElementById("suoo")
// su.addEventListener("click",()=>{
//     Signup()
// })

function SignUp(){
    let email=document.getElementById("em").value;
    let name=document.getElementById("namee").value ;
    let pass=document.getElementById("pass").value;
    console.log({email,name,pass})
    addData({email,name,pass})
}

async function addData({email,name,pass}){
   let payload={name,email,pass}
   console.log(payload)
    let res=await fetch(`https://champagne-salamander-kit.cyclic.app/user/register`,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    let out=await res.json()
    console.log(out)
   if(out.msg==="Successfully Registered"){
 alert(out.msg)
 window.location.href="signIn.html"
   }
   else
   {
    alert(out.msg)
   }
    
}