
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var message = document.querySelector('#message');
var messageErrorE = document.querySelector('#messageErrorE');
var messageErrorP = document.querySelector('#messageErrorP');
var btnLogin = document.querySelector('#btn-login');


function checkEmail() {
    if (email.value == "") {
        messageErrorE.innerHTML = "Vui lòng nhập Email !";
        return false;
    } else {
        messageErrorE.innerHTML = "";
    }
}

function checkPass() {
    if (password.value == "") {
        messageErrorP.innerHTML = "Vui lòng nhập Password !";
        return false;
    } else if (email.value < 3) {
        messageErrorP.innerHTML = "Mật khẩu phải lớn hơn 8 kí tự";
    }else {
        messageErrorP.innerHTML = "";

    }
}

btnLogin.addEventListener("click", function (e) {
    e.preventDefault();
    checkEmail();
    checkPass();
    if (messageErrorE.innerHTML == "" && messageErrorP.innerHTML == "") {
        message.innerHTML = "Dang nhap thanh cong";
    } else {
        message.innerHTML = "Bạn nhập thiếu dữ liệu. Vui lòng nhập lại !!!"
    }
});