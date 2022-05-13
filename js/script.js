
function LigaDesliga(){
    const btnOnOff = document.querySelector(".ButtonLiga");
    const on = document.querySelector("img").src = "./img/pic_bulbon.gif";
    const off = document.querySelector("img").src = "./img/pic_bulboff.gif";;
    const imagem = off
    if(btnOnOff.innerHTML == "Desligar" ){
        document.querySelector("img").src = "./img/pic_bulboff.gif";          
        btnOnOff.replaceChildren("Ligar");
        console.log(btnOnOff)
        console.log(imagem)
        return
    }
    if (imagem == off){
        document.querySelector("img").src = "./img/pic_bulbon.gif";
        btnOnOff.replaceChildren("Desligar");
        console.log(imagem)
        console.log(btnOnOff)
        return
    }
}
document.querySelector(".ButtonLiga").addEventListener('click', LigaDesliga);

    //NORMALIZE ESSE EXERCÍCIO
    //TRANSFORME ESTAS LINHAS EM APENAS UMA FUNÇÃO!
    