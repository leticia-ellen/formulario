const form = document.querySelector(".formulario")
const nome = document.querySelector(".input.nome")
const email = document.querySelector(".input.email")
const tel = document.querySelector(".input.tel")
const textao = document.querySelector(".input.textao")
const spannome = document.querySelector(".texto-obrigatorio.nome")
const spanemail = document.querySelector(".texto-obrigatorio.email")
const spantel = document.querySelector(".texto-obrigatorio.tel")
const spantextao = document.querySelector(".texto-obrigatorio.textao")


form.addEventListener("submit", (e) => {
    e.preventDefault()

    checkInputs()

})

function checkInputs() {
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const telValue = tel.value.trim()
    const textaoValue = textao.value.trim()

    if (nomeValue === "") {
        nome.classList.add("obrigatorio");
        spannome.classList.add("obrigatorio");
    }else{
        nome.classList.add("aprovado");
    }

    if (emailValue === "") {
        email.classList.add("obrigatorio");
        spanemail.classList.add("obrigatorio");
    }else{
        email.classList.add("aprovado");
    }


    if (telValue === "") {
        tel.classList.add("obrigatorio");
        spantel.classList.add("obrigatorio");
    }else{
        tel.classList.add("aprovado");
    }


    if (textaoValue === "") {
        textao.classList.add("obrigatorio");
        spantextao.classList.add("obrigatorio");
    }else{
        textao.classList.add("aprovado");
    }

}
