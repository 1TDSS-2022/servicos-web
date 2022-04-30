console.log("Msg enviada no arquivo externo!")

//Utilizado para declarações globais [var]
//Quando se utiliza o var estamos dizendo ao interpretador 
//Que o escopo desta variável será global

var nome = "Alê"
constelementoH1 = document.getElementById("logo-tit")

elementoH1.addEventListener('click',function(){
//Utilizado para declarações locais [let]
//Quando se utiliza o var estamos dizendo ao interpretador 
//Que o escopo desta variável será locais
let sobrenome = "Carlos"

    elementoH1.innerHTML = "EQUIPE NOTA 10"
    console.log("O sobrenome é : " + sobrenome)
})