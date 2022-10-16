import { selectEquipe } from "./connection/db_connect.js";

const btnLogin = document.querySelector("#Logar");

async function logar(){
    console.log("COMEÇOU!");

    let login = document.querySelector("#Login").value;
    let senha = document.querySelector("#senha_login").value;

    let sql = `SELECT * FROM usuario WHERE login='${login}' AND senha='${senha}'`;
    console.log(sql);

    let rows = await selectEquipe(login, senha);
    console.log(rows);

    if(rows.length > 0){
        console.log("Usuário encontrado!");
        window.location = "../pages/menu1.html";
    } else {
        console.log("Acesso NEGADO!!");
        window.alert('Falha ao acessar o sistema!\nUsuário ou Senha incorreto(s)!');
    }
    
}
btnLogin.addEventListener("click", logar);