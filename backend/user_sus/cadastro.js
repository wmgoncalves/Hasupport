import { insertUserSus, userSusExists } from "../connection/userSus_db.js";

const btnCadast = document.querySelector("#cadastrar");
const idEquipe = localStorage.getItem('id_equipe');

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
            window.alert('Usuário(a) cadastrado(a) com sucesso.');
            window.location = "../pages/menu1.html";
        }
        else
            window.alert('ERRO!\nNão foi possível cadastrar o(a) Usuário(a)!!');
    }
}
btnCadast.addEventListener("click", cadastrar);