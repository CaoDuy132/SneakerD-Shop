var user = JSON.parse(localStorage.getItem("user"));
if(user){
    for(let key of user){
       var ten =  key.username;
       document.getElementById("name").innerHTML = ten;
    }
}