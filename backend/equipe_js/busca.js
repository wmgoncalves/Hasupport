import { searchEquipes } from "../connection/equipe_db.js";

const btnBusca = document.querySelector("#buscar");

async function buscar(){
    let login = document.querySelector("#login").value;
    let result = document.querySelector("#result");

    let rows = await searchEquipes(login);

    if(rows.length > 0){
        window.alert('Nenhuma equipe encontrada!!');
    } else {
        for(i=0; i<rows.length; i++){
            result.innerHTML += `<br>Login: ${rows[i].login} / Membros: ${rows[i].membros}`;
        }
    }
}
btnBusca.addEventListener("click", buscar);