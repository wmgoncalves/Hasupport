import { insertEquipe, equipeExists } from "../connection/equipe_db.js";

const btnCadast = document.querySelector("#cadastrar");

async function cadastrar(){
    let login = document.querySelector("#login").value;
    let senha = document.querySelector("#senha").value;
    let membros = document.querySelector("#membros").value;

    let rows = await equipeExists(login);

    if(rows.length > 0){
        window.alert('Equipe já cadastrada no sistema!!');
    } else {
        let result = insertEquipe(login, senha, membros);
        if(result > 0)
            window.alert('Equipe cadastrada com sucesso.');
        else
            window.alert('ERRO!\nNão foi possível cadastrar a equipe!!');
    }
}
btnCadast.addEventListener("click", cadastrar);