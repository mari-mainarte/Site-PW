
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    nextImg()
}, 5000)

function nextImg(){
    cont++
    if(cont > 4){
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true
}