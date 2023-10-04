var setaDireita = window.document.getElementById("setadireita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display: flex; margin-top: 55px;"
}

function RolarParaEsquerda() {
    leonardo.style = "display: flex"
    bruna.style = "display: none"
    setaDireita.style = "display: flex; margin-top: 55px;"
    setaEsquerda.style = "display: none"
}