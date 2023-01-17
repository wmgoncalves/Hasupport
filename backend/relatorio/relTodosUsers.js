import { lastUsersSus } from "../connection/userSus_db.js";

async function printTodosUsers() {
  let result = document.querySelector(".retorno-select-2");
  let table = `
        <table>
            <tr>
                <th> Cartão do SUS </th>
                <th> CPF </th>
                <th> Nome </th>
                <th> Data de Nasc. </th>
                <th> Sexo </th>
            </tr>
            `;
  let rows = await lastUsersSus();
  // console.log(rows);
  // console.log(rows.length);

  for (let i = 0; i < rows.length; i++) {
    let data_nasc = rows[i].data_nasc.getDate() + '/' + (rows[i].data_nasc.getMonth() + 1) + '/' + rows[i].data_nasc.getFullYear();
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
        </table>
    `;

  result.innerHTML = table;
}

window.addEventListener('load', printTodosUsers);

