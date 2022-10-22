import { searchEquipes } from "../connection/equipe_db.js";

const btnBusca = document.querySelector("#buscar");

async function buscar(){
    let login = document.querySelector("#login").value;
    let result = document.querySelector("#result");

    let rows = await searchEquipes(login);
    // console.log(rows.length);

    if(rows.length > 0){
        for(let i=0; i<rows.length; i++){
            result.innerHTML += `<button class="equipe" onclick="selecionarEquipe(this)" value="${rows[i].id}">Login: ${rows[i].login} / Membros: ${rows[i].membros}</button><br>`;
        }
    } else {
        window.alert("Nenhuma equipe encontrada!!!");
    }
}

btnBusca.addEventListener("click", buscar);