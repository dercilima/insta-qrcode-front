let compartilharButton = document.getElementById("compartilharPerfilButton")

// Forma menos usual de adicionar eventos aos botões
// compartilharButton.onclick = function() {
//     // Colocar meu código
// }

// Forma mais comum de adicionar eventos aos botões
compartilharButton.addEventListener('click', compartilharPerfilFn)

function compartilharPerfilFn() {
    navigator['share']("https://www.instagram.com/jornadadeprogramador/")
    .then(() => {
        window.alert("Share!")
    })
    .catch(() => {
        window.alert("Algo deu errado!")
    })
}

function copiarLink() {
    navigator.clipboard.writeText("https://www.instagram.com/jornadadeprogramador/")
    .then(() => {
        window.alert("Link copiado!")
    })
    .catch(() => {
        window.alert("Algo deu errado!")
    })
}
