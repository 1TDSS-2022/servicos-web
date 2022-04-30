console.log("Mensagem enviada da pasta")

//Utilizando para declarações globais [ var ]
// Quando se utiliza o var estamos dizendo ao interpretador
//que o escopo dessa variavel será global.

var nome = "Henrique"

//Arrays ou vetor é um objeto no script
var frutas = ['Laranja', 'Banana', 'Maça', 'Uva']
//Lê uma lista desse tipo de estrutura
console.table(frutas)

//Verificação do tamanho Array
console.log("Tamnho do Array: " + frutas.length)

//Trazendo o primeiro elemento do Array
console.log("Primeiro elemento do Array: " + frutas[0])

//Trazendo o ultimo elemento do Array
console.log("Primeiro elemento do Array: " + frutas[frutas.length - 1])

//Declaração loop FOR com indice incrementavel
    for(let x = 0; x < frutas.length; x ++ ){
        console.log("Itens do arrays frutas: " + frutas[x])
}

//Interação com FOR OF
    for (let fruta of frutas) {
        console.log("Itens do arrays fruta: " + fruta)
    }

//Interação com FOR IN
  

//Utilizando para declarações locais [ let ]
// Quando se utiliza o let estamos dizendo ao interpretador
//que o escopo dessa variavel será local.

//Seleção de elemento com notação HTML
//const elementoH1 = document.getElementById("logo-tit")

//Seleção de elemento com notação CSS
const elementoH1 = document.querySelector("#logo-tit")

    elementoH1.addEventListener("click",function(){
            
    let sobrenome = "Cesar"
    elementoH1.innerHTML = "Equipe nota 10"
    console.log("O sobrenome é: " + sobrenome)
})

//Trabalhando com listas de elementos
//Utilizamos a notação CSS também para recuperar a lista de determinados seletores
//EX:

const listaDeLi = document.querySelectorAll("li")

//Iterando com o for normal
for(let x = 0; x < listaDeLi; x++){
    console.log("Conteúdo de lista de li: " + listaDeLi[x].innerHTML)
}

//Iterando com for of
//for (let indice of listaDeLi) {
    //if(listaDeLi[indice].innerHTML != undefined){
    //console.log("Conteúdo de lista de li: " + listaDeLi[indice].innerHTML)
    //}else{
       // console.log("O conteúdo é indefinido!")
    //}    
//}


    switch (listaDeLi[indice].innerHTML) {
        case undefined:
            console.log("Conteúdo indefinido!")
            break;
    
        default:
            console.log("Contepudo da lista LI: " + listaDeLi[indice].innerHTML)
            break;
    }