import { updateEquipes, loadEquipe } from "../connection/equipe_db.js";

const btnAlterar = document.querySelector("#alterar");
const idEquipe = localStorage.getItem('id_equipe');

async function alterarEquipe(){
    console.log(idEquipe);
    let login = document.querySelector("#login");
    let senha = document.querySelector("#senha");
    let membros = document.querySelector("#membros");

    let result = await updateEquipes(idEquipe, login.value, senha.value, membros.value);
    if(result > 0)
        window.alert('Equipe atualizada com sucesso.');
    else
        window.alert('ERRO!\nNão foi possível atualizar a equipe!!');
}

window.onload = async function(){
    let result = await loadEquipe(idEquipe);

    let login = document.querySelector("#login");
    let senha = document.querySelector("#senha");
    let membros = document.querySelector("#membros");

    login.value = result[0].login;
    senha.value = result[0].senha;
    membros.value = result[0].membros;
}

btnAlterar.addEventListener("click", alterarEquipe);