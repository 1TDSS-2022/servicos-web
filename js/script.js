console.log("MSG ENVIADA NO ARQUIVO EXTERNO!")

//Utilizado para declarações globais [ var ]
//Quando se utiliza o var estamos dizendo ao interpretador
// que o escopo desta variável será global.
var nome = "Alê"


//ARRAYS OU VETOR
var frutas = ['laranja', 'banana', 'maçã', 'uva']
//Leitura da estrutura completa console.table(frutas)
//Verificação do tamanho do Array console.log("Tamanho do array : " + frutas.lenght)
//Trazendo a primeira posição console.log("PRIMEIRO ELEMENTO DO ARRAY: " + frutas[0])
//Trazendo a última posição console.log("ÚLTIMO ELEMENTO DO ARRAY: " + frutas[frutas.lenght - 1])

//Declaração loop FOR com indice incrementavel
//for(let x = 0; x < frutas.lenght ; x++ ){
//    console.log("ITENS DO ARRAY FRUTAS : " + frutas[x])
//}

//Iteração com forof
//for (let fruta of frutas) {
//    console.log("ITENS DO ARRAY FRUTAS : " + fruta)    
//}

//Iteração com forin
// for (let indice in frutas) {
//     console.log("ITENS DO ARRAY FRUTAS : " + frutas[indice])
// }

//Seleção de elemento com notação HTML
//const elementoH1 = document.getElementById("logo-tit")

//Seleção de elemento com notação CSS
const elementoH1 = document.querySelector("#logo-tit")
              
elementoH1.addEventListener('click',function(){
    //Utilizado para declarações locais [ let ]
    //Quando se utiliza o let estamos dizendo ao interpretador
    // que o escopo desta variável será local.
    let sobrenome = "Carlos"

    elementoH1.innerHTML = "EQUIPE NOTA 10"
    console.log("O sobrenome é : " + sobrenome)
})

elementoH1.addEventListener('dbclick',function(){
    elementoH1.innerHTML = "Equipe de Ponta"
})

//Trabalhando com listas de elementos
//Utilizamos a notação CSS também para recuperar a lista de determinados seletores.
// Ex:


const listaDeLi = document.querySelectorAll("li")

//Iterando com o for normal
// for(let x = 0; x < listaDeLi.lenght ; x++){
//    console.log("CONTEÚDO DE LISTA DE LI : " + listaDeLi[x].innerHTML)
// }

//Iterando com o forof
// for (const iterator of listaDeLi) {
//    console.log("CONTEÚDO DE LISTA DE LI : " + elementoH1.innerHTML)
// }

//Iterando com o forin
for (let indice in listaDeLi) {
    // if(listaDeLi[indice].innerHTML != undefined){
    //     console.log("CONTEÚDO DE LISTA DE LI : " + listaDeLi[indice].innerHTML)
    // }else{
    //    console.log("O CONTEÚDO É INDEFINIDO!")
    // }

    switch (listaDeLi[indice].innerHTML) {
        case undefined:
            console.log("O CONTEÚDO É INDEFINIDO!")
            break;
        default:
            console.log("CONTEÚDO DE LISTA DE LI : " + listaDeLi[indice].innerHTML)
            break;
    }

}
