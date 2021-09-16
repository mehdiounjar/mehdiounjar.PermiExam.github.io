
function info(){
    var u = document.getElementById('username').value
    var p = document.getElementById('password').value
    localStorage.setItem("pass", p)
    localStorage.setItem("nom", u)
    window.location="login.html";
}
function confirm()
{
        var u = document.getElementById("username").value;
        var p = document.getElementById("password").value;
        if (u == window.localStorage.getItem("nom") && p == window.localStorage.getItem("pass")) 
        {
               window.location="officiel.html";
        } else{
            alert("Wrong information");
             }       
}
function back()
{
    window.location="registre.html";
}
function signup()
{
    window.location="login.html";
}
