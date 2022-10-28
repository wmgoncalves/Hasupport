import { selectEquipe } from "../connection/equipe_db.js";

const btnLogin = document.querySelector("#logar");

async function logar(){
    // console.log("COMEÇOU!");
    
    let login = document.querySelector("#login").value;
    let senha = document.querySelector("#senha").value;

    let retornoLogin = document.querySelector("#acesso-negado");

    // let sql = `SELECT * FROM usuario WHERE login='${login}' AND senha='${senha}'`;
    // console.log(sql);

    let rows = await selectEquipe(login, senha);
    // console.log(rows);

    if(rows.length > 0){
        // console.log("Usuário encontrado!");
        localStorage.setItem('id_equipe', rows[0].id);
        if(rows[0].id == 1){
            localStorage.setItem('ehAdmin', 'ehAdmin');

        }else{
            localStorage.setItem('ehAdmin', 'naoEhAdmin');

        }
        window.location = "../pages/adm_area.html";
    } else {
        // console.log("Acesso NEGADO!!");
        retornoLogin.innerHTML = 'Falha ao acessar o sistema!\nUsuário ou Senha incorreto(s)!';
        retornoLogin.style.color = 'red';
        setTimeout(function(){
            retornoLogin.innerHTML = "";
        }, 5000);
    }
    
}
btnLogin.addEventListener("click", logar);