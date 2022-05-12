
    const btnOn = document.querySelector("#ligar")

    btnOn.addEventListener('click', function() {
        document.querySelector("img").src = "./img/pic_bulbon.gif"
    })

    const btnOff = document.querySelector("#desligar")

    btnOff.addEventListener('click', function() {
        document.querySelector("img").src = "./img/pic_bulboff.gif"

    })


