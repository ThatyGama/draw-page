var nome = document.querySelector("#nome")
var salvar = document.querySelector("#salvar")
var lista = document.querySelector("#lista")
var sorteie = document.querySelector("#sorteie")
var resultado = document.querySelector("#resultado")

var participantes = []

function mostrarLista(){

    lista.innerHTML = " "

    for (participante of participantes){
        var itensLista = document.createElement("li")
        var textoLista = document.createTextNode(participante)

        itensLista.appendChild(textoLista)
        lista.appendChild(itensLista)

    }
}

mostrarLista()

function addParticipante(){
    var participante = nome.value

    if (participante <=1){
        alert("Para sortear, adicione os nomes dos participantes.")
    } else {
        var nomesParticipantes = document.querySelector("#nomesParticipantes")
        nomesParticipantes.style.borderTop = "4px solid #FADE58"
        nomesParticipantes.innerHTML = "Participantes:"
        participantes.push(participante)

    nome.value = " "
    }

    mostrarLista()

}

salvar.setAttribute('onclick', 'addParticipante()')


function sortear(){

    let sorteados = participantes.length;
    let nomeSorteado = Math.floor(Math.random() * sorteados);

    if (participantes == 0){
        document.querySelector("#resultado").innerHTML = "Adicione acima o nome dos participantes do sorteio"
    } else {
        document.querySelector("#resultado").innerHTML = "O vencedor é: " + participantes[nomeSorteado]
    }
}

sorteie.setAttribute('onclick', 'sortear()')