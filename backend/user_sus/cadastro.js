import { insertUserSus, userSusExists } from "../connection/userSus_db.js";

const btnCadast = document.querySelector("#cadastrar");
const idEquipe = localStorage.getItem('id_equipe');
const retornoCadUserSucess = document.querySelector('#retorno-cad-user-sucess');

async function cadastrar(){
    let cartSus = document.querySelector("#cartSus").value;
    let cpf = document.querySelector("#cpf").value;
    let nome = document.querySelector("#nome").value;
    let dataNasc = document.querySelector("#dataNasc").value;
    let sexo = document.querySelector('input[name="sexo"]:checked').value;

    let rows = await userSusExists(cartSus, cpf);

    if(rows.length > 0){
        window.alert('Usuário(a) do SUS já cadastrado(a) no sistema!!');
    } else {
        let result = await insertUserSus(cartSus, cpf, nome, dataNasc, sexo, idEquipe);
        if(result > 0){
            retornoCadUserSucess.innerHTML = 'Usuário(a) cadastrado(a) com sucesso.';
            //window.alert('Usuário(a) cadastrado(a) com sucesso.');
            setTimeout(function(){
                window.location = "../pages/menu1.html";

            }, 3000);
        }
        else
            retornoCadUserSucess.innerHTML = 'ERRO!\nNão foi possível cadastrar o(a) Usuário(a)!!';
            //window.alert('ERRO!\nNão foi possível cadastrar o(a) Usuário(a)!!');
    }
}
btnCadast.addEventListener("click", cadastrar);