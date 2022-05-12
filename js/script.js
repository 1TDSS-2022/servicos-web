
function LigaDesliga(){
   
    const btnOn = document.querySelector(".ButtonLiga")
    
    btnOn.addEventListener('click', function(){
        document.querySelector("img").src = "./img/pic_bulbon.gif"
        btnOn.replaceChildren("Desliga")
        

    })  

    btnOff.addEventListener('click', function(){
        document.querySelector("img").src = "./img/pic_bulboff.gif"        
    })





}
    


    //NORMALIZE ESSE EXERCÍCIO
    //TRANSFORME ESTAS LINHAS EM APENAS UMA FUNÇÃO!
    