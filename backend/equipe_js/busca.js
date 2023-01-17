import { searchEquipes } from "../connection/equipe_db.js";

const btnBusca = document.querySelector("#buscar");
const retornoBuscaEquipe = document.querySelector('#retorno-busca-equipe');

const isEmpty = str => !str.trim().length;

async function buscar() {
    let login = document.querySelector("#login").value;
    let result = document.querySelector("#result");

    result.innerHTML = "";

    if (isEmpty(login)) {
        retornoBuscaEquipe.innerHTML = "ERRO -> Nenhum valor inserido na busca!";
        retornoBuscaEquipe.style.color = 'red';
        setTimeout(function () {
            retornoBuscaEquipe.innerHTML = "";
        }, 5000);
    }
    else {
        let rows = await searchEquipes(login);
        // console.log(rows.length);

        if (rows.length > 0) {
            for (let i = 0; i < rows.length; i++) {
                result.innerHTML += `<button class="equipe" onclick="selecionarEquipe(this)" value="${rows[i].id}">Login: ${rows[i].login} / Membros: ${rows[i].membros}</button><br>`;
            }
        } else {
            retornoBuscaEquipe.innerHTML = "Não foi encontrada nenhuma equipe com este login!!";
            retornoBuscaEquipe.style.color = 'green';
            setTimeout(function () {
                retornoBuscaEquipe.innerHTML = "";
            }, 3000);
        }
    }
}

btnBusca.addEventListener("click", buscar);