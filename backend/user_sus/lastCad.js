import { lastUserSus, loadUserSus } from "../connection/userSus_db.js";

const btnLastCadast = document.querySelector("#btn-print-ult-adic");

async function printLastCad(){
    let result = document.querySelector("#return-busca");
    result.innerHTML = `<table border="1">
        <thead>
            <tr>
                <th> Cartão do SUS </th>
                <th> CPF </th>
                <th> Nome </th>
                <th> Data de Nasc. </th>
                <th> Sexo </th>
            </tr>
        </thead>
        `;

    let idUserSus = await lastUserSus();
    let rows = await loadUserSus(idUserSus[0].lastId);

    let data_nasc = rows[0].data_nasc.getDate() + '/' + (rows[0].data_nasc.getMonth()+1) + '/' + rows[0].data_nasc.getFullYear();

    result.innerHTML += `<tbody>
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
btnLastCadast.addEventListener("click", printLastCad);