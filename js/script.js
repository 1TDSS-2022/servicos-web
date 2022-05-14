// function LigaDesliga(){
//     const btnOnOff = document.querySelector(".ButtonLiga");
//     const on = document.querySelector("img").src = "./img/pic_bulbon.gif";
//     const off = document.querySelector("img").src = "./img/pic_bulboff.gif";;
//     const imagem = off
//     if(btnOnOff.innerHTML == "Desligar" ){
//         document.querySelector("img").src = "./img/pic_bulboff.gif";          
//         btnOnOff.replaceChildren("Ligar");
//         console.log(btnOnOff)
//         console.log(imagem)
//         return
//     }
//     if (imagem == off){
//         document.querySelector("img").src = "./img/pic_bulbon.gif";
//         btnOnOff.replaceChildren("Desligar");
//         console.log(imagem)
//         console.log(btnOnOff)
//         return
//     }
// }
// document.querySelector(".ButtonLiga").addEventListener('click', LigaDesliga);


    // const btnOn = document.querySelector(".ButtonLiga")

    // btnOn.addEventListener('click', function(){
    //     document.querySelector("img").src = "./img/pic_bulbon.gif"
    // })

    // const btnOff = document.querySelector(".ButtonDesliga")

    // btnOff.addEventListener('click', function(){
    //     document.querySelector("img").src = "./img/pic_bulboff.gif"        
    // })


    //NORMALIZE ESSE EXERCÍCIO
    //TRANSFORME ESTAS LINHAS EM APENAS UMA FUNÇÃO!

/* const cores = document.querySelector(".cores")
cores.innerHTML.value = "Arroz";

// Temos a classe pessoa

// COMO FAÇO PARA INSTANCIAR ESTA CLASSE NO JAVA
    Pessoa p = new Pessoa();

// COMO FAÇO PARA ACESSAR O ATRIBUTO 
    p.innerHTML

//Como colocar um valor neste atributo
    p.innerHTML = "texto" */
/*     
const elemento = document.querySelector(".box")

//Quando você chama o ponto de acessar os atributos
// do elemento.
elemento.innerHTML = "Valor que eu queria aqui" */

//FUNÇÕES MATEMÁTICAS

//Crie uma função que escreva o valor do atributo inner da div
//no console.log
var valorDoInner = document.querySelector(".box").innerHTML



//FUNÇÃO PARAMETRIZADA
function valor(parametro){
    //const elementoDiv = document.querySelector("#"+parametro)
    const elementoDiv = document.getElementById(parametro)
    console.log("PARÂMETRO PASSADO : " + elementoDiv.innerHTML)    
}

//Math.
//pow
//ceil
//random
//floor
//setTimeout
//setInterval


