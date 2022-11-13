document.querySelector('.signup').addEventListener('submit', formSubmit)
var arr = JSON.parse(localStorage.getItem('verify')) || [];

function formSubmit(event){
    event.preventDefault();
    var formObj = {
        name: document.querySelector("#name").value,
        last: document.querySelector("#last").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
    }
    var name = formObj.name;
    var last = formObj.last;
    var email = formObj.email;
    var pass = formObj.password;

    if (name == "" || last == "" || email == "" || pass == "") {
        alert("Fill all Fields")
        return
    }
    else{
        alert("Sign up successfull")
        window.location = './login.html'
        arr.push(formObj)
        localStorage.setItem('verify', JSON.stringify(arr));
        return;
    }
}

var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
console.log(cartArr);
var cc = cartArr.length;
document.getElementById("cc").innerText=cc;