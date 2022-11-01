import { insertEquipe, equipeExists, selectEquipe } from "../connection/equipe_db.js";

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
            /*Busca id da ultima equipe cadastrada*/
            let idExt = await selectEquipe(login, senha);
            localStorage.setItem('id_equipe', idExt[0].id);
            if(idExt[0].id == 1){
                localStorage.setItem('ehAdmin', 'ehAdmin');
    
            }else{
                localStorage.setItem('ehAdmin', 'naoEhAdmin');
    
            }
            console.log('ID: ', idExt[0].id);
            retornoCadEquipe.innerHTML = "Equipe cadastrada com sucesso.";
            retornoCadEquipe.style.color = 'green';
            setTimeout(function(){
                retornoCadEquipe.innerHTML = "";
                window.location = "./adm_area.html";
            }, 2000);
            
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