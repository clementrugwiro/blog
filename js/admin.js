async function start(){

    let auth = 'Bearer '+localStorage.token
    const Response = await fetch("https://blog-portfolio-apis.herokuapp.com/api/users",{
    headers:{
        'Authorization' : auth,
      "content-type":"application/json; charset=UTF-8" 
    }
})
    const data = await Response.json()
    displayuser(data)
}

start();

displayuser=(users)=>{

document.getElementById("users").innerHTML =`
${users.map(function(user){
    return `<div style="margin-left:100px;margin-top:-30px;width:300px"><h4>SECONDNAME: ${user.lastname}<br> USERNAME: ${user.username}<br> EMAIL: ${user.email}<br> role: ${user.role}</h4><br><button type="submit" onclick="deleteuser(value)" value="${user._id}" id="sendcmt">delete</button></div>`
}).join('')}
`
}



