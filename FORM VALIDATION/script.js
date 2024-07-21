let username = document.getElementById("username");
let password = document.getElementById("password");

let flag = 1;

function validateForm(){
    if(username.value == ""){
        document.getElementById("userError").innerHTML = "User Name is empty";
        flag = 0;
        // console.log("username empty")
    } else if(username.value.length < 3){
        document.getElementById("userError").innerHTML = "User Name require min 3 char";
        flag = 0;
    } else{
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }
    
    if(password.value == ""){
        document.getElementById("passError").innerHTML = "Password is empty";
        flag = 0;
    } else if(password.value.length < 3){
        document.getElementById("passError").innerHTML = "Password require min 3 length";
        flag = 0;
    } else{
        document.getElementById("passError").innerHTML = "";
        flag = 1;
    }
    
    if(flag){
        return true;
    } else {
        return false;
    }
}