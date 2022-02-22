async function start1(){

    let auth = 'Bearer '+localStorage.token
    const Response = await fetch("https://blog-portfolio-apis.herokuapp.com/api/users",{
    headers:{
        'Authorization' : auth,
      "content-type":"application/json; charset=UTF-8" 
    }
})
    const data = await Response.json()
    displaynumusers(data.length);
}

start1();
displaynumusers=(numusers)=>{
    document.getElementById("num-users").innerHTML =`<div><h3>NUMBER OF USERS</h3><h2  style="text-decoration:none;font-size:61px" >${numusers}</h1></div>`
  
}
async function start(){
    const Response = await fetch("https://blog-portfolio-apis.herokuapp.com/api/aarticles")
    const data = await Response.json()
    displaynumart(data.length)
   
}
start();


displaynumart=(numart)=>{
    document.getElementById("num-art").innerHTML =`<div><h3>NUMBER OF ARTICLES</h3><h2  style="text-decoration:none;font-size:61px" >${numart}</h1></div>`
}

async function showmsg(){

    let auth = 'Bearer '+localStorage.token
    const Response = await fetch("https://blog-portfolio-apis.herokuapp.com/api/amessages",{
    headers:{
        'Authorization' : auth,
      "content-type":"application/json; charset=UTF-8" 
    }
})
    const msg = await Response.json()
    displaynummsg(msg.length)
  
}

displaynummsg=(nummsg)=>{
    document.getElementById("num-msg").innerHTML =`<div><h3>NUMBER OF MESSAGES</h3><h2  style="text-decoration:none;font-size:61px" >${nummsg}</h1></div>`
  
}

showmsg();