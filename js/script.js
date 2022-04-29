console.log("MSG ENVIADA NO ARQUIVO EXTERNO")

//Ultizando para declarações globais [ o var ]
//Quando se utiliza o var estamos dizendo ao interpretador que o escopo desta variavel sera global
var nome = "Duda"

//ARRAYS ou VETOR - no js é um objeto
var frutas = ['laranja', 'banana', 'maçã', 'uva']
//Leitura da estrutura completa console.table(fruta)
//Verificação do tamanho do array console.log("Tamanho do array: " + frutas.length) 
//Trazendo a primeira posição console.log("PRIMEIRO ELEMENTO DO ARRAY: " + frutas[0])
//Trazendo a última posição console.log("PRIMEIRO ELEMENTO DO ARRAY: " + frutas[frutas.length - 1])

//Declaração loop FOR com indice incrementável
//for(let x = 0; x < frutas.length ; x++ ){
//    console.log("ITENS DO ARRAY FRUTAS: " + frutas[x])
//}

//Interação com forof
//for (let fruta of frutas) {
//    console.log("ITENS DO ARRAY FRUTAS: " + frutas)
//}

//Interação com forin
//for (let fruta in frutas) {
//    console.log("ITENS DO ARRAY FRUTAS: " + frutas[indice])
//}

//Seleção do elemento com notação HTML
//const elementoH1 = getElementById("logo-tit")


//Seleção de elemento com notação CSS
const elementoH1 = document.querySelector("#logo-tit")



const elementoH1 = document.getElementById("logo-tit")

elementoH1.addEventListener('click', function(){
    //Utilizando para declarações locais [ let ]
    //Quando se utiliza o var estamos dizendo ao interpretador que o escopo desta variavel sera global
    let sobrenome = "Gomes"

    elementoH1.innerHTML = "EQUIPE NOTA 10"
    console.timeLog("O sobrenome é " + sobrenome)
})

elementoH1.addEventListener('dblclick', function(){
    elementoH1.innerHTML = "EQUIPE NOTA 10"
})

//Trabalhando com listas de elementos
//Utilizamos a notação CSS também para recuperar a lista de determinaados seletores
//Ex.
const listaDeli = document.querySelectorAll("li")

//Iterando com o for normal
//for(let x = 0; x < listaDeli.length ; x++){
//    console.log("CONTEUDO DE LISTA DE LI : " + listaDeli[x].innerHTML)
//}

//Iterando com o forof
//for (const elemento of listaDeli) {
//    console.log("CONTEÚDO DE LISTA DE LI : " + elemento.innerHTML )
//}

//Iterando com o forin
for (let indice of listaDeli) {
    //if(listaDeli[indice].innerHTML != undefined)
    //console.log("CONTEÚDO DE LISTA DE LI : " + listaDeli[indice].innerHTML )
    //}else{
    //    console.log("O CONTEÚDO É INDEFINIDO")
    //}
    
}
