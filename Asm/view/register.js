var namee = document.querySelector("#name");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var againPass = document.querySelector("#againPass");
var messageEN = document.querySelector("#messageErrorN");
var messageEE = document.querySelector("#messageErrorE");
var messageEP = document.querySelector("#messageErrorP");
var messageEAP = document.querySelector("#messageErrorAP");
var message = document.querySelector("#message");
var btnreg = document.querySelector("#btn-reg");

function checkName() {
    if (namee.value == "") {
        messageErrorN.innerHTML = "Vui lòng nhập tên !";
        return false;
    } else if (namee.value.length < 5) {
        messageErrorN.innerHTML = "Nhập thiếu kí tự, vui lòng nhập lại";
    }
     else {
        messageErrorN.innerHTML = "";
    }
}

function checkEmail() {
    if (email.value == "") {
        messageErrorE.innerHTML = "Vui lòng nhập Email !";
        return false;
    } else if(email.value.length < 10) {
        messageErrorE.innerHTML = "Nhập thiếu kí tự, vui lòng nhập lại";
    } 
     else {
        messageErrorE.innerHTML = "";
    }
}

function checkPass() {
    if (password.value == "") {
        messageErrorP.innerHTML = "Vui lòng nhập mật khẩu !";
        return false;
    } else {
        messageErrorP.innerHTML = "";
    }
}

function checkAgainPass() {
    if (againPass == "") {
        messageErrorAP.innerHTML = "Vui lòng nhập lại mật khẩu";
    }else if (againPass.value != password.value) { 
        messageErrorAP.innerHTML = "Mật khẩu nhập lại không khớp, vui lòng nhập lại";
    } else {
        messageErrorAP.innerHTML = "";
    }
}

btnreg.addEventListener("click", function (e) {
    e.preventDefault();
    checkName();
    checkEmail();
    checkPass();
    checkAgainPass();
    if (messageEN.innerHTML == "" && messageEE.innerHTML == "" && messageEP.innerHTML == "" && messageEAP.innerHTML == "") {
        message.innerHTML = "Đăng nhập thành công";
    } else {
        message.innerHTML = "Bạn nhập thiếu hoặc bị sai thông tin ! "
    }
});