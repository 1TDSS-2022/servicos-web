console.log("MSG ENVIADA NO ARQUIVO EXTERNO!")

//Utilizado para declarações globais [ var ]
//Quando se utiliza o var estamos dizendo para o interpretador
//que o escopo desta variavél será global.
var nome = "Franklin"


//ARRAYS OU VETOR = É UM OBJETO
//[] DETERMINA OS DADOS PARA O VETOR OU ARRAY
var frutas = ['laranja', 'banana', 'maça', 'uva']

//LEITURA DA ESTRUTURA COMPLETA :
//console.table(frutas)

//VERIFICAÇÃO DO TAMANHO DO ARRAY:
//console.log("O tamanho do array:" + frutas.length)

//TRAZENDO A PRIMEIRA POSIÇÃO DO ARRAY:
//console.log("Primeiro elemento do ARRAY:" + frutas[0])

//TRAZENDO A ULTIMA POSIÇÃO:
//console.log("Primeiro elemento do ARRAY:" + frutas[frutas.length - 1])

//DECLARAÇÃO LOOP FOR COM INDICE INCREMENTAVEL
//for(let  x = 0; x < frutas.length ; x++ ){
 //   console.log("Intens do array:" + frutas[x])
//}

//INTERAÇAÕ COM O FOROF
//for (let frutas of frutas){
//    console.log("Intens do array frutas:" + frutas)
//}

//INTERAÇAÕ COM O FORIN
//for (let indice in frutas){
 //   console.log("Intens do array frutas:" + frutas[indice])
//}




//Seleção de elemento com notação HTML
//const elementoH1 = document.getElementById("logo-tit")

//Seleção de elemento com notação CSS
const elementoH1 = document.querySelector ("#logo-tit")

elementoH1.addEventListener("click", function(){
    //Utilizado para declarações globais [ let ]
    //Quando se utiliza o var estamos dizendo para o interpretador
    //que o escopo desta variavél será global.
    let sobrenome = "Nascimento"

    
    elementoH1.innerHTML= "EQUIPE DE PONTA"
    console.log("O sobrenome é:" + sobrenome)

    elementoH1.addEventListener("dblclick", function(){
        elementoH1.innerHTML="Equipe de ponta"
    })


//Trabalhando com listas de elementos
//Utilizando a notação CSS também para recuperar alista de determinados seletores.
// EX:

const listaDeLi = document.querySelectorAll('li')

//INTERANDO COM O FOR NORMAL
//for(let x = 0; x < listaDeLi.length; x++){
 //   console.log("Console de lista de li:" +  listaDeLi[x].innerHTML)
//}

//INTERANDO COM O FOR OF
//for(const elemento of listaDeLi){
 //   console.log("Conteudo de lista de li:" + elemento.innerHTML)
//}

//INTERANDO COM O FOR IN
for(let indice in listaDeLi){
 //   if(listaDeLi[indice].innerHTML != undefined){
 //   console.log("Conteudo de lista de li:" + listaDeLi[indice].innerHTML)
//    }else{
//        console.log("Oconteudo é indefinido!")
 //   }

 switch(listaDeLi[indice].innerHTML) {
     case undefined
     case value:

         break
    default
 }
}








