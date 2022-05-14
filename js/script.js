// console.log("MSG ENVIADA NO ARQUIVO EXTERNO!")

//Utilizado para declarações globais [ var ]
//Quando se utiliza o var estamos dizendo ao interpretador
// que o escopo desta variável será global.
// var nome = "Alê"


//ARRAYS OU VETOR
// var frutas = ['laranja', 'banana', 'maçã','uva']
//Leitura da estrutura completa console.table(frutas)
//Verificação do tamanho do Array console.log("Tamanho do array : " + frutas.length)
//Trazendo a primeira posição console.log("PRIMEIRO ELEMENTO DO ARRAY : " + frutas[0])
//Trazendo a última posição console.log("ÚLTIMO ELEMENTO DO ARRAY : " + frutas[frutas.length - 1])

//Declaração loop FOR com indice incrementavel
// for(let x = 0; x < frutas.length ; x++ ){
//     console.log("ITENS DO ARRAY FRUTAS : " + frutas[x])
// }

//Iteração com forof
// for (let fruta of frutas) {
//     console.log("ITENS DO ARRAY FRUTAS : " + fruta)
// }

//Iteração com forin
// for (let indice in frutas) {
//     console.log("ITENS DO ARRAY FRUTAS : " + frutas[indice])
// }

//Seleçao de elemento com notação HTML
//const elementoH1 = document.getElementById("logo-tit")

//Seleçao de elemento com notação CSS
// const elementoH1 = document.querySelector("#logo-tit")

// elementoH1.addEventListener('click',function(){
    //Utilizado para declarações locais [ let ]
    //Quando se utiliza o let estamos dizendo ao interpretador
    // que o escopo desta variável será local.
//     let sobrenome = "Carlos"

//     elementoH1.innerHTML = "EQUIPE NOTA 10"
//     console.log("O sobrenome é : " + sobrenome)
// })

// elementoH1.addEventListener('dblclick',function(){
//     elementoH1.innerHTML = "Equipe de Ponta"
// })

//Trabalhando com listas de elementos
//Utilizamos a notação CSS também para recuperar a lista de determinados seletores.
// Ex:

// const listaDeLi = document.querySelectorAll("li")

//Iterando com o for normal
// for(let x = 0; x < listaDeLi.length ; x++){
//     console.log("CONTEÚDO DE LISTA DE LI : " + listaDeLi[x].innerHTML)
// }

//Iterando com o forof
// for (const elemento of listaDeLi) {
//      console.log("CONTEÚDO DE LISTA DE LI : " + elemento.innerHTML)
// }

//Iterando com o forin
// for (let indice in listaDeLi) {
    // if(listaDeLi[indice].innerHTML != undefined){
    //     console.log("CONTEÚDO DE LISTA DE LI : " + listaDeLi[indice].innerHTML)
    // }else{
    //     console.log("O CONTEÚDO É INDEFINIDO!")
    // }

    // switch (listaDeLi[indice].innerHTML) {
    //     case undefined:
    //         console.log("O CONTEÚDO É INDEFINIDO!")
    //         break;
    //     default:
    //         console.log("CONTEÚDO DE LISTA DE LI : " + listaDeLi[indice].innerHTML)
    //         break;
    // }

// }

///////////////////////////lampada

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
    //LUCKGON = OK

//SELECIONE A DIV E COLOQUE UM VALOR EM SEU ATRIBUTO INNERHTML

// const cores = document.querySelector(".cores");
// cores.innerHTML.value = "#0000FF";


//TEMOS A CLASSE PESSOA

//COMO EU FAÇO PARA INSTANCIAR ESTA CLASSE NO JAVA
//A CLASSE POSSUI UM ATRIBUTOS
//O atributo se chama innerHTML e é do tipo String

// Pessoa p = new Pessoa()

// //Como eu acesso este atributo no objeto criado!
// p.innerHTML

// //Como eu coloco um valor neste atributo?
// p.innerHTML = "TEXTO"

//SELECIONE A DIV E COLOQUE UM VALOR EM SEU ATRIBUTO INNERHTML
// const elemento = document.querySelector(".box")

// let umTextoQualquerDeAlgumLugar = "TEXTO"

// //Quando você chama o ponto acessa os atributos 
// // do elemento.
// elemento.innerHTML = umTextoQualquerDeAlgumLugar

//FUNÇÕES MATEMÁTICAS

//Crie uma função que escreva o valor do atributo Inner da DIV
//no console.log
// var valorDoInner = document.querySelector(".box").innerHTML


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



    