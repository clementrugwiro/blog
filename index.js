


function createart(){
    alert("here you are");
    let ARTICLEform =  JSON.parse(localStorage.getItem('ARTICLEform')) || [];
    ARTICLEform.push(
        {
             A_title : document.getElementById("a-title").value,
             A_txt : document.getElementById("article").value,
             A_likes: 0,
             A_dislikes:0,
             
            })
    localStorage.setItem("ARTICLEform",JSON.stringify(ARTICLEform))

    console.log(localStorage.getItem("ARTICLEform"))
    document.querySelector("form").reset();
    
}
function displayart(){
    console.log(localStorage.getItem("ARTICLEform"))
if(localStorage.getItem("ARTICLEform")){
let output = document.getElementById("dash-cont");
output.innerhtml ="";
JSON.parse(localStorage.getItem('ARTICLEform')).forEach(element => {
    output.innerHTML+=`
    <div style="width:500px;">
    <div><h3>${element.A_title  }</h3></div>
    <div><p id="blog-p">${element.A_txt}></p></div>
    <div><div></div><div></div></div>
    <div style="float: right;padding-right: 20px;">
        <input type="button" id="send-btn" value="delete">
    </div>
    </div>
    `
});

    };

}
function displayartUser(){
    console.log("in here!!")
    console.log(localStorage.getItem("ARTICLEform"))
if(localStorage.getItem("ARTICLEform")){
let output = document.getElementById("dash-cont");
output.innerhtml ="";
JSON.parse(localStorage.getItem('ARTICLEform')).forEach(element => {
    output.innerHTML+=`
    <div style="width:500px;">
    <div><h3>${element.A_title  }</h3></div>
    <div><p id="blog-p">${element.A_txt}></p></div>
    <div id="cmtsct"><div id="rect"><p id="rect-p"><button onclick="liked()" id="likebtn" value="${element}"><img src="../images/like.png" alt=""></button>${element.A_likes}</p></div><div id="rect"><p id="rect-p"><button><img src="../images/dislike.png" alt=""></button>${element.A_dislikes}</p></div><div id="rect"><p id="rect-p"><button><img src="../images/chat.png" alt=""></button>50</p></div></div>
    </div>
    `
    console.log(element)
});

    };

}

const liked = () =>{
    console.log("you liked it",document.querySelector('#likebtn').value)
}

const register = () =>{
    alert("you registered!!");
    let registerData =  JSON.parse(localStorage.getItem('registerData')) || [];
    registerData.push({
        id : registerData.length || localStorage.length,
        f_name: fnamevalue,
        l_name: lnamevalue,
        U_name: Unamevalue,
        u_email: uemailvalue,
        u_pwd: upwdvalue,
    })
    localStorage.setItem('registerData',JSON.stringify(registerData));
    console.log(localStorage)

    
}


function storelocal(){
    console.log("in here!!")
    // let contactform = {
    //  name : document.getElementById("con-name").value,
    //  email : document.getElementById("con-email").value,
    //  subject : document.getElementById("con-subject").value,
    //  msg : document.getElementById("con-msg").value,
    // }

    let contactform =  JSON.parse(localStorage.getItem('contactform')) || [];
    contactform.push(
        {
             name : document.getElementById("con-name").value,
             email : document.getElementById("con-email").value,
             subject : document.getElementById("con-subject").value,
             msg : document.getElementById("con-msg").value,
            })
    localStorage.setItem("contactform",JSON.stringify(contactform))

    console.log(localStorage.getItem("contactform"))
    document.querySelector("form").reset();

}

function displaymsg(){
    console.log(localStorage.getItem("contactform"))
if(localStorage.getItem("contactform")){
let output = document.getElementById("inbox-box");
output.innerhtml ="";
JSON.parse(localStorage.getItem('contactform')).forEach(element => {
    output.innerHTML+=`
   <div  style=" border-bottom: 1px solid rgb(255, 242, 242);overflow:hidden;margin-top:50px">
        <h3 >${element.name}</h3>
        <h4 style=" " >${element.email}</h4>
        <h5>${element.subject}</h5>
        <p stle="white-space:pre-line ">${element.msg}</p> 
    </div>
    `
});

    };

}

let form =document.getElementById("form");
let Aname = document.getElementById("con-name");
let email = document.getElementById("con-email");
let subject = document.getElementById("con-subject");
let msg = document.getElementById("con-msg");
let form1 =document.getElementById("login-form")
let namelogin = document.getElementById("name-login");
let pwdlogin = document.getElementById("pwd-login");
let form2 = document.getElementById("form-art");
let Atitle= document.getElementById("a-title");
let article= document.getElementById("article");
let form3 = document.getElementById("pers-form");
let pname = document.getElementById("p-name");
let puname = document.getElementById("p-uname");
let paddress = document.getElementById("p-address")
let pjob = document.getElementById("p-job");
let pperoid = document.getElementById("p-peroid");
let pemail = document.getElementById("p-email");
let pphone= document.getElementById("p-phone");
let form4 =document.getElementById("reg-form");
let fname =document.getElementById("fname");
let lname =document.getElementById("lname");
let Uname = document.getElementById("Uname");
let uemail = document.getElementById("U-email");
let upwd = document.getElementById("upwd");
let repwd = document.getElementById("re-pwd");
let currentuser ;



let validaterform =() =>{
    let check4 = true;
    fnamevalue = fname.value.trim();
    lnamevalue = lname.value.trim();
    Unamevalue =Uname.value.trim();
    uemailvalue = uemail.value.trim();
    upwdvalue = upwd.value.trim();
    repwdvalue = repwd.value.trim();

    if(fnamevalue===""){
        setError(fname,"required");
        check4=false;
    }
    else{
        setsucces(fname);
        
    }
    if(lnamevalue===""){
        setError(lname,"required");
        check4=false;
    }
    else{
        setsucces(lname);    
    }
    if(Unamevalue===""){
        setError(Uname,"required");
        check4=false;
    }
    else{
        setsucces(Uname);
        
    }
    if(uemailvalue===""){
        setError(uemail,"required");
        check4=false;
    }
    else{
        setsucces(uemail);
        
    }
    if(upwdvalue===""){
        setError(upwd,"required");
        check4=false;
    }
    else{
        setsucces(upwd);
        
    }
    if(repwdvalue===""){
        setError(repwd,"required");
        check4=false;
    }
    else if(repwdvalue!=upwdvalue){
        setError(repwd,"doesn't match");
        check4=false; 
    }
    else{
        setsucces(repwd);
        
    }
    if(check4===true){
        register();
        location.reload();
    }

}









const validatepform = ()=>{
    let check3 = true;
    let pnamevalue = pname.value.trim();
    let punamevalue = puname.value.trim();
    let paddressvalue =paddress.value.trim();
    let pjobvalue = pjob.value.trim();
    let pperoidvalue =pperoid.value.trim();
    let pemailvalue =pemail.value.trim();
    let pphonevalue =pphone.value.trim();

    
    if(pnamevalue===""){
        setError(pname,"required");
        check3=false;
    }
    else{
        setsucces(pname);
        
    }
    if(punamevalue===""){
        setError(puname,"required");
        check3=false;
    }
    else{
        setsucces(puname);
        
    }
    if(paddressvalue===""){
        setError(paddress," required");
        check3=false;
    }
    else{
        setsucces(paddress);
        
    }
    if(pjobvalue===""){
        setError(pjob," required");
        check3=false;
    }
    else{
        setsucces(pjob);
        
    }
    if(pperoidvalue===""){
        setError(pperoid," required");
        check3=false;
    }
    else{
        setsucces(pperoid);
        
    }
    if(pphonevalue===""){
        setError(pphone,"  required");
        check3=false;
    }
    else{
        setsucces(pphone);
        
    }
    if(pemailvalue===""){
        setError(pemail,"required");
        check=false;
    }
    else if(!validemail(pemailvalue)){
        setError(pemail,"enter a valid email");
        check=false;
    }
    else{
        setsucces(pemail)
        
    }
}


const validateaform =() =>{
    let check2 = true;
    let Atitlevalue = Atitle.value.trim();
    let articlevalue = article.value.trim();

    if(Atitlevalue===""){
        setError(Atitle,"a title is required");
        check2=false;
    }
    else{
        setsucces(Atitle);
        
    }
    if(articlevalue===""){
        setError(article,"article is required");
        check2=false
    }
    else if(articlevalue.length<100){
        setError(article,"article must be more than 100");
        check2=false
    }
    else{
        setsucces(article);
       
    }
    if(check2===true){
       console.log("everything is correct");
       createart()
       location.reload();
    }

}


 const validatelform = () =>{
    let check1 =true;
    let nameloginvalue = namelogin.value.trim();
    let pwdloginvalue = pwdlogin.value.trim();

    if(nameloginvalue===""){
        setError(namelogin,"names are required");
        check1=false
    }
    else{
        setsucces(namelogin);
    }
    if(pwdloginvalue===""){
        setError(pwdlogin,"password are required");
        check1=false
    }
    else{
        setsucces(pwdlogin);
        
    }
    if(check1===true){
     login();  
    }


 }

 const login=()=>{
     let check=false;
    JSON.parse(localStorage.getItem('registerData')).forEach(element =>{
        if(element.U_name===namelogin.value){
            check=true;
            if(element.u_pwd===pwdlogin.value){
                alert("you are logged in")
                window.location.href="../index.html"   
                 currentuser = element;   
               localStorage.setItem('name',currentuser.U_name);
               localStorage.setItem('email',currentuser.u_email);
               
            }
            else{
                setError(pwdlogin,"wrong password")
            }
        }
        
    if(check==false){
        setError(namelogin,"wrong username")
        setError(pwdlogin,"")
    }
    });
}

const logout = () =>{
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    window.location.href="../index.html"  
}


checklogg = () =>{
    console.log("hellooooooooooooooo",);
        if(localStorage.getItem('name')){
            document.querySelector('.login').style.display = 'none'; 
            document.querySelector('.logout').style.display = 'inline'; 
        }
        else{
            document.querySelector('.login').style.display = 'inline'; 
            document.querySelector('.logout').style.display = 'none'; 
        }
}




if(form!=null){
form.addEventListener('submit', e =>{
    e.preventDefault();
    validateform();
})
}
if(form1!=null){
form1.addEventListener('submit', e =>{
    e.preventDefault();
    validatelform();
})
}
if(form2!=null){
    form2.addEventListener('submit', e =>{
        e.preventDefault();
        validateaform();
    })
    }
if(form3!=null){
    form3.addEventListener('submit', e =>{
    e.preventDefault();
    validatepform();
    }) 
}
if(form4!=null){
    form4.addEventListener('submit', e =>{
    e.preventDefault();
    validaterform();
    }) 
}

const validemail = email =>{
    const re =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLocaleLowerCase());
}
const setError= (element,message)=>{
    const inputcontrol = element.parentElement;
    const errordisplay =  inputcontrol.querySelector(".error")

    errordisplay.innerText=message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');
}

const setsucces = (element) =>{
    const inputcontrol = element.parentElement;
    const errordisplay = inputcontrol.querySelector(".error");

    errordisplay.innerText ='';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');
}

const validateform = () =>{
    let namevalue =Aname.value.trim();
    let emailvalue = email.value.trim();
    let subjectvalue = subject.value.trim();
    let msgvalue = msg.value.trim();
    let check = true
    

    if(namevalue===""){
        setError(Aname,"names are required");
        check=false
    }
    else{
        setsucces(Aname);
        
    }
    if(emailvalue===""){
        setError(email,"email is required");
        check=false;
    }
    else if(!validemail(emailvalue)){
        setError(email,"enter a valid email");
        check=false;
    }
    else{
        setsucces(email)
        
    }
    if(subjectvalue===""){
        setError(subject,"subject is required");
        check=false;
    }
    else{
        setsucces(subject)
        
    }
    if(msgvalue===""){
        setError(msg,"message is required");
        check=false;
    }
    else{
        setsucces(msg)
        check=true;
    }
    if(check===true){
        storelocal();
        location.reload();
    }
}