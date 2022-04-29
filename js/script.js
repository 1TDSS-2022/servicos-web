console.log("MSG ENVIADA NO ARQUIVO EXTERNO!")

//Utilizado para declarações globais [ var ]
//Quando se utiliza o var estamos dizendo para o interpretador
//que o escopo desta variavél será global.
var nome = "Franklin"

const elementoH1 = document.getElementById("logo-tit")

elementoH1.addEventListener("click", function(){
    //Utilizado para declarações globais [ let ]
    //Quando se utiliza o var estamos dizendo para o interpretador
    //que o escopo desta variavél será global.
    let sobrenome = "Nascimento"
    
    elementoH1.innerHTML= "EQUIPE DE PONTA"
    console.log("O sobrenome é:" + sobrenome)
})

