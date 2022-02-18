async function showmsg(){

    let auth = 'Bearer '+localStorage.token
    const Response = await fetch("http://blog-portfolio-apis.herokuapp.com/api/amessages",{
    headers:{
        'Authorization' : auth,
      "content-type":"application/json; charset=UTF-8" 
    }
})
    const msg = await Response.json()
    console.log(msg)
    displaymsg(msg)
}

showmsg();

displaymsg=(msg)=>{

    document.getElementById("inbox-box").innerHTML =`
${msg.map(function(message){
    return `<div style="border-left: 1px solid black;margin-left:10px;padding-left:20px;margin-top:30px"><div><h4>NAME: ${message.uname}<br> EMAIL: ${message.email}<br> SUBJECT: ${message.subject}<br> MESSAGE: "${message.message}"</h4></div><div><button id="del-btn" onclick="deletemsg(value)" value="${message._id}">delete</button></div></div>`
}).join('')}
`
}