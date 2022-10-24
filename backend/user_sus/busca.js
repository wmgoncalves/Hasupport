import { searchUserSus } from "../connection/userSus_db.js";

const btnBusca = document.querySelector("#buscar");
const idEquipe = localStorage.getItem('id_equipe');
const retornoBuscaUserSucess = document.querySelector('#retorno-busca-user-sucess');

async function buscar(){
    let user_sus = document.querySelector("#user_sus").value;
    let result = document.querySelector("#result");

    let rows = await searchUserSus(user_sus, idEquipe);
    // console.log(rows);

    if(rows.length > 0){
        for(let i=0; i<rows.length; i++){
            result.innerHTML += `<button class="equipe" onclick="selecionarUserSus(this)" value="${rows[i].cart_sus}">
                Cartão SUS: ${rows[i].cart_sus}<br> 
                Nome: ${rows[i].nome} / 
                CPF: ${rows[i].cpf}</button><br>`;
        }
    } else {
        retornoBuscaUserSucess.innerHTML = 'Nenhum usuário do SUS encontrado!!!';
        setTimeout(function(){
            retornoBuscaUserSucess.innerHTML = '...';

        }, 3000);
        //window.alert("Nenhum usuário do SUS encontrado!!!");
    }
}

btnBusca.addEventListener("click", buscar);