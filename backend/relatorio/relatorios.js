const btnLastCadast = document.querySelector("#btn-print-maior-risco");
const btnBusca = document.querySelector("#btn-print-ult-adic");

async function chooseSearch() {
    let option = document.querySelector(".form-select-pdf").value;

    console.log(option);

    if (option == 1) {
        console.log("Todos usuários do SUS com Alto Risco.");
        window.location = "./relatorioAltoRisco.html";
    }
    else if (option == 2) {
        console.log("Último usuário do SUS cadastrado.");
        //window.location = "./relatorioTodosUsers.html";
    }
}
async function buscaTodos() {
    let user = document.querySelector("#input-nome").value;
    let rows = await searchUserSus(user, idEquipe);

    //user -> todas as consultas

    //botao (consulta 1)
    //botao (consulta 2)
}
btnLastCadast.addEventListener("click", chooseSearch);
btnBusca.addEventListener("click", buscaTodos);

