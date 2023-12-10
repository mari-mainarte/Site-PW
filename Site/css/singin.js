let btn = document.querySelector('.bi-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector("#senha")

    if(inputSenha.getAttribute("type")=="password"){
        inputSenha.setAttribute("type", "text")
    }
    else{
        inputSenha.setAttribute("type", "password")
    }
})

function entrar(){
    let usuário = document.querySelector("#usuário")
    let userLabel = document.querySelector("#userLabel")

    let senha = document.querySelector("#senha")
    let senhaLabel = document.querySelector("#senhaLabel")

    let msgError = document.querySelector("#msgError")
    let listaUser = []

    let userValid={
        nome: '',
        user ' ',
        senha:''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item)=>) {
        if(usuario.valeu == item.userCad && senha.value==item.senhaCad){

            useeValid = {
                nome: item.nomeCad
                user :item. userCard,
                senha: item.senhaaCad
            }
        }

        
    };
}