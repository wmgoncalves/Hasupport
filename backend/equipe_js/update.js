import { updateEquipes, loadEquipe } from "../connection/equipe_db.js";

const btnAlterar = document.querySelector("#alterar");
const retornoUpEquipe = document.querySelector("#retorno-up-equipe");
const idEquipe = localStorage.getItem('id_equipe');

async function alterarEquipe(){
    console.log(idEquipe);
    let login = document.querySelector("#login");
    let senha = document.querySelector("#senha");
    let membros = document.querySelector("#membros");

    let result = await updateEquipes(idEquipe, login.value, senha.value, membros.value);
    if(result > 0){
        retornoUpEquipe.innerHTML = 'Equipe atualizada com sucesso.';
        retornoUpEquipe.style.color = 'green';
        setTimeout(function(){
            window.location = "../pages/adm_area.html";
        }, 3000);
    }
    else {
        retornoUpEquipe.innerHTML = 'ERRO!\nNão foi possível atualizar a equipe!!';
        retornoUpEquipe.style.color = 'red';
        setTimeout(function(){
            retornoUpEquipe.innerHTML = '';
        }, 3000);
    }
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