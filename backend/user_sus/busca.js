import { searchUserSus } from "../connection/userSus_db.js";
import { searchAltoRisco } from "../connection/consulta_db.js";

const btnBusca = document.querySelector("#buscar");
const idEquipe = localStorage.getItem('id_equipe');
const retornoBuscaUser = document.querySelector('#retorno-busca-user');

const isEmpty = str => !str.trim().length;

async function buscar() {
    let user_sus = document.querySelector("#user_sus").value.trim();
    let result = document.querySelector("#result");

    result.innerHTML = "";

    if (isEmpty(user_sus)) {
        retornoBuscaUser.innerHTML = "ERRO -> Nenhum valor inserido na busca!";
        retornoBuscaUser.style.color = 'red';
        setTimeout(function () {
            retornoBuscaUser.innerHTML = "";
        }, 5000);
    }
    else {
        let rows = await searchUserSus(user_sus, idEquipe);
        // console.log(rows);

        if (rows.length > 0) {
            for (let i = 0; i < rows.length; i++) {
                if (await searchAltoRisco(rows[i].id_usersus) === 'ALTO RISCO') {
                    result.innerHTML += `<button class="equipe" onclick="selecionarUserSus(this)" value="${rows[i].id_usersus}">
                    <span class="flag-risco"><img src="../assets/icons/flag_icon.png"></span>
                    Cartão SUS: ${rows[i].cart_sus}<br> 
                    Nome: ${rows[i].nome} / 
                    CPF: ${rows[i].cpf}</button><br>`;
                }
                else {
                    result.innerHTML += `<button class="equipe" onclick="selecionarUserSus(this)" value="${rows[i].id_usersus}">
                    Cartão SUS: ${rows[i].cart_sus}<br> 
                    Nome: ${rows[i].nome} / 
                    CPF: ${rows[i].cpf}</button><br>`;
                }
            }
        } else {
            retornoBuscaUser.innerHTML = 'Nenhum usuário(a) do SUS encontrado(a)!!!';
            retornoBuscaUser.style.color = 'green';
            setTimeout(function () {
                retornoBuscaUser.innerHTML = "";
            }, 3000);
        }
    }
}

btnBusca.addEventListener("click", buscar);