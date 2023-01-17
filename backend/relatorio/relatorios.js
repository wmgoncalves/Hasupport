const btnLastCadast = document.querySelector("#btn-print-ult-adic");
const btnBusca = document.querySelector("#btn-busca");

async function chooseSearch() {
    let option = document.querySelector("#select-consultas").value;

    // console.log(option);

    if (option == 1) {
        // console.log("Todos usuários do SUS com Alto Risco.");
        window.location.href = "../../pages/";
    }
    else if (option == 2) {
        // console.log("Último usuário do SUS cadastrado.");
        window.location.href = "../../pages/relatorioTodosUsers.html";
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

