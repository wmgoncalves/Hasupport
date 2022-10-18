import { selectEquipe, insertEquipe } from "./connection/db_connect.js";

const btnLogin = document.querySelector("#cadastrar");

async function cadastrar(){
    let login = document.querySelector("#login").value;
    let senha = document.querySelector("#senha").value;
    let membros = document.querySelector("#membros").value;

    let rows = await selectEquipe(login, senha);

    if(rows.length > 0){
        window.alert('Usuário já cadastrado no sistema!!');
    } else {
        let result = insertEquipe(login, senha, membros);
        if(result > 0)
            window.alert('Usuário cadastrado com sucesso.');
        else
            window.alert('ERRO!\nNão foi possível cadastrar o usuário!!');
    }
}
btnLogin.addEventListener("click", cadastrar);