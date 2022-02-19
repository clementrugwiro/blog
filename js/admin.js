async function start(){

    let auth = 'Bearer '+localStorage.token
    const Response = await fetch("https://blog-portfolio-apis.herokuapp.com/api/users",{
    headers:{
        'Authorization' : auth,
      "content-type":"application/json; charset=UTF-8" 
    }
})
    const data = await Response.json()
    console.log(data)
    displayuser(data)
}
start();

displayuser=(users)=>{
    console.log("you here")
document.getElementById("users").innerHTML =`
${users.map(function(user){
    return `<div><h4>SECONDNAME: ${user.lastname}<br> USERNAME: ${user.username}<br> EMAIL: ${user.email}<br> role: ${user.role}</h4></div>`
}).join('')}
`
}



