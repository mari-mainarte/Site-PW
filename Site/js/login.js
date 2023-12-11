let user = document.getElementById("usuário")
let passwd = document.getElementById("senha")

function entrar(){
    if(user.value == 'admin' && passwd.value == '123456'){
        alert("Bem vindo de volta!")
        window.location.href="../index.html";
    }else{
        alert("Conta inexistente, crie sua conta!")
        window.location.href="../cadastro.html";
    }
}

function esq_senha(){
    alert("Sua senha é 123456")
}

function cadastrar(){
    alert("Seja bem vindo!")
    window.location.href="../index.html";
}
