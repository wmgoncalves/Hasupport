import { lastUserSus, loadUserSus } from "./connection/userSus_db.js";
import { searchAllAltoRisco } from "./connection/consulta_db.js";

const btnLastCadast = document.querySelector("#btn-print-ult-adic");

async function printLastCad(){
    let result = document.querySelector(".retorno-select-1");
    /*result.innerHTML = `<table border="1">
        <thead>
            <tr>
                <th> Cartão do SUS </th>
                <th> CPF </th>
                <th> Nome </th>
                <th> Data de Nasc. </th>
                <th> Sexo </th>
            </tr>
        </thead>
        `;*/

    let idUserSus = await lastUserSus();
    let rows = await loadUserSus(idUserSus[0].lastId);

    let data_nasc = rows[0].data_nasc.getDate() + '/' + (rows[0].data_nasc.getMonth()+1) + '/' + rows[0].data_nasc.getFullYear();

    result.innerHTML = `
        <table border="1">
            <thead>
                <tr>
                    <th> Cartão do SUS </th>
                    <th> CPF </th>
                    <th> Nome </th>
                    <th> Data de Nasc. </th>
                    <th> Sexo </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> ${rows[0].cart_sus} </td>
                    <td> ${rows[0].cpf} </td>
                    <td> ${rows[0].nome} </td>
                    <td> ${data_nasc} </td>
                    <td> ${rows[0].sexo} </td>
                </tr>
            </tbody>
        </table>`;
}

async function printAltoRisco(){
    let result = document.querySelector(".retorno-select-1");
    let table = `
        <table border="1">
            <thead>
                <tr>
                    <th> Cartão do SUS </th>
                    <th> CPF </th>
                    <th> Nome </th>
                    <th> Data de Nasc. </th>
                    <th> Sexo </th>
                </tr>
            </thead>
            <tbody>`;
    let rows = await searchAllAltoRisco();
    // console.log(rows);
    // console.log(rows.length);

    for(let i=0; i<rows.length; i++){
        let data_nasc = rows[i].data_nasc.getDate() + '/' + (rows[i].data_nasc.getMonth()+1) + '/' + rows[i].data_nasc.getFullYear();
        table += `
                <tr>
                    <td> ${rows[i].cart_sus} </td>
                    <td> ${rows[i].cpf} </td>
                    <td> ${rows[i].nome} </td>
                    <td> ${data_nasc} </td>
                    <td> ${rows[i].sexo} </td>
                </tr>
        `;
    }

    table += `
            </tbody>
        </table>
    `;

    result.innerHTML = table;
}

async function chooseSearch(){
    let option = document.querySelector("#select-consultas").value;

    // console.log(option);

    if(option == 1){
        console.log("Todos usuários do SUS com Alto Risco.");
        await printAltoRisco();
    }
    else if(option == 2){
        // console.log("Último usuário do SUS cadastrado.");
        await printLastCad();
    }
}
btnLastCadast.addEventListener("click", chooseSearch);