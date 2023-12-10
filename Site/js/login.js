if (!localStorage.getItem("token")) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "./assets/Site/signin.html"
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#Logado");
Logado.innerHTML = 'Olá ${userLogado.nome}';

function sair(){
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href="./assets/Site/signin.html";

}
