


//NORMALIZE ESSE EXERCÍCIO
    //TRANSFORME ESTAS LINHAS EM APENAS UMA FUNÇÃO!
    //function LigaDesliga(){
        //const btnOnOff = document.querySelector(".ButtonLiga");
        //const on = document.querySelector("img").src = "./img/pic_bulbon.gif";
        //const off = document.querySelector("img").src = "./img/pic_bulboff.gif";;
        //const imagem = off
       // if(btnOnOff.innerHTML == "Desligar" ){
           // document.querySelector("img").src = "./img/pic_bulboff.gif";          
           // btnOnOff.replaceChildren("Ligar");
           // console.log(btnOnOff)
           // console.log(imagem)
           // return
       // }
       // if (imagem == off){
           // document.querySelector("img").src = "./img/pic_bulbon.gif";
          //  btnOnOff.replaceChildren("Desligar");
           // console.log(imagem)
           // console.log(btnOnOff)
           // return
       // }
   // }
    //document.querySelector(".ButtonLiga").addEventListener('click', LigaDesliga);


//const btnOn = document.querySelector(".ButtonLiga")

    //btnOn.addEventListener('click', function(){
      //  document.querySelector("img").src = "./img/pic_bulbon.gif"
    //})

    //const btnOff = document.querySelector(".ButtonDesliga")

    //btnOff.addEventListener('click', function(){
//document.querySelector("img").src = "./img/pic_bulboff.gif"        
   // })



 //SELECIONE A DIV E COLOQUE UM VALOR EM SEU ATRIBUTO INNERHTML

//const cores = document.querySelector(".cores");
//cores.innerHTML.value = "#0000FF";


//TEMOS A CLASSE PESSOA

//COMO EU FAÇO PARA INSTANCIAR ESTA CLASSE NO JAVA
//A CLASSE POSSUI UM ATRIBUTOS
//O atributo se chama innerHTML e é do tipo String

//Pessoa p = new Pessoa()

//Como eu acesso este atributo no objeto criado!
//p.innerHTML

//Como eu coloco um valor neste atributo?
//p.innerHTML = "TEXTO"


//SELECIONE A DIV E COLOQUE UM VALOR EM SEU ATRIBUTO INNERHTML
//const elemento = document.querySelector(".box");
//let umTextoQualquerDeAlgumLugar = "TEXTO"
//Quando você chama o ponto acessa os atributos 
//do ele elemento.
//elemento.innerHTML = "Valor que eu queria aqui"
//elemento.innerHTML = umTextoQualquerDeAlgumLugar


//FUNÇÕES MATEMÁTICAS
//Crie uma função que escreva o valor do atributo Inner da DIV
//no console.log

//function valor(){
  //  let valorDoInner = document.querySelector(".box").innerHTML
   // console.log("VALOR DO INNER : " + valorDoInner)
//}

//FUNÇÃO PARAMETRIZADA
function valor(parametro){
//const elementoDiv = document.querySelector("#"+parametro)
    const elementoDiv = document.getElementById(parametro)
    console.log("PARÂMETRO PASSADO : " + elementoDiv.innerHTML)    
}console.log("PARÂMETRO PASSADO : " + elementoDiv.innerHTML)    
