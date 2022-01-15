function storelocal(){
    console.log("in here!!")
    let name = document.getElementById("con-name").value
    let email = document.getElementById("con-email").value
    let subject = document.getElementById("con-subject").value
    let msg = document.getElementById("con-msg").value

    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("subject",subject)
    localStorage.setItem("message",msg)

    console.log(localStorage.getItem("name"))
    console.log(localStorage.getItem("email"))
    console.log(localStorage.getItem("subject"))
    console.log(localStorage.getItem("message"))
}