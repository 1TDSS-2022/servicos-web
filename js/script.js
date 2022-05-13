
function LigaDesliga(){
    const btnOnOff = document.querySelector(".ButtonLiga");
    const imagem = document.querySelector('#lampada').src;
    const on = document.querySelector("img").src = "./img/pic_bulbon.gif";
    const off = document.querySelector("img").src = "./img/pic_bulboff.gif";
    if (imagem == off){
        document.querySelector("img").src = "./img/pic_bulboff.gif";
        btnOnOff.replaceChildren("Ligar");
    }else{
        document.querySelector("img").src = "./img/pic_bulbon.gif";          
        btnOnOff.replaceChildren("Desligar");
    }
    

    // btnOff.addEventListener('click', function(){
    //     document.querySelector("img").src = "./img/pic_bulboff.gif"        
    // })
}
document.querySelector(".ButtonLiga").addEventListener('click', LigaDesliga);

    //NORMALIZE ESSE EXERCÍCIO
    //TRANSFORME ESTAS LINHAS EM APENAS UMA FUNÇÃO!
    