import { insertEquipe, equipeExists } from "../connection/equipe_db.js";

const btnCadast = document.querySelector("#cadastrar");
const retornoCadEquipe = document.querySelector("#retorno-cad-equipe");

async function cadastrar(){
    let login = document.querySelector("#login").value;
    let senha = document.querySelector("#senha").value;
    let membros = document.querySelector("#membros").value;

    let rows = await equipeExists(login);

    if(rows.length > 0){
        retornoCadEquipe.innerHTML = "Equipe já cadastrada no sistema!!";
        //window.alert('Equipe já cadastrada no sistema!!');
        setTimeout(function(){
            retornoCadEquipe.innerHTML = "";
        }, 3000);

    } else {
        let result = await insertEquipe(login, senha, membros);
        if(result > 0){
            retornoCadEquipe.innerHTML = "Equipe cadastrada com sucesso.";
            retornoCadEquipe.style.color = 'green';
            window.location = "./adm_area.html";
            
        }
        else {
            retornoCadEquipe.innerHTML = "ERRO!\nNão foi possível cadastrar a equipe!!";
            retornoCadEquipe.style.color = 'red';
            setTimeout(function(){
                retornoCadEquipe.innerHTML = "";
            }, 3000);
        }
    }
}
btnCadast.addEventListener("click", cadastrar);