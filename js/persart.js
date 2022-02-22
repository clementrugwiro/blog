async function start(){

  let auth = 'Bearer '+localStorage.token
    const Response = await fetch("https://blog-portfolio-apis.herokuapp.com/api/articles",{
      headers:{
          'Authorization' : auth,
        "content-type":"application/json; charset=UTF-8" 
      }
  })
    const data = await Response.json()
    console.log(data)
    displayart(data)
}
start();

displayart=(articles)=>{
document.getElementById("dash-cont").innerHTML =`
${articles.map(function(article){
    return `<div id="one-art" style="margin-left:30px; margin-top:40px">
    <h2>title: ${article.title}</h2><br>
    <h4> content: ${article.content}</h4><br>
     <div id="cmtsct">
     <div id="rect">
     <p id="rect-p"><img src="../images/like.png" alt="">${article.likes}</p>
     </div>
     <div id="rect"><p id="rect-p"><img src="../images/dislike.png" alt="">${article.dislikes}</p>
     </div>
     <div id="rect"><p id="rect-p"><img src="../images/chat.png" alt="">${article.comment}</p>
     </div><br>
     <div><button type="submit" onclick="deleteart(value)" value="${article._id}" id="sendcmt">delete</button><button type="submit" onclick=(checkForm(value,)) value="${article._id}" id="sendcmt">update</button></div>
    </div>
    </div>`
}).join('')}
`
}
