async function start(){
    const Response = await fetch("https://blog-portfolio-apis.herokuapp.com/api/aarticles")
    const data = await Response.json()
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
     <p id="rect-p"><button  id="likebtn" onclick="like(value)" value="${article._id}"><img src="../images/like.png" alt=""></button>${article.likes}</p>
     </div>
     <div id="rect"><p id="rect-p"><button onclick="dislike(value)" value="${article._id}"><img src="../images/dislike.png" alt=""></button>${article.dislikes}</p>
     </div>
     <div id="rect"><p id="rect-p"><button onclick="opencmt()"><img src="../images/chat.png" alt=""></button>${article.comment}</p>
     </div><br>
    <div id="inputcontrol">
     <form  action="/" id="fcmt" >
     <div class="error"></div> 
     <textarea name="comment"  id="commenttxt" cols="40" rows="6"></textarea><br>
     <button type="submit"  value="${article._id}" id="sendcmt">send</button>
     </form>
    </div>
    </div>
    </div>`
}).join('')}
`
}

