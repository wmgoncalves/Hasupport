import Vue from 'vue';
const btnLastCadast = document.querySelector("#btn-print-maior-risco");
const btnBusca = document.querySelector("#btn-print-ult-adic");

async function chooseSearch() {
    let option = document.querySelector(".form-select-pdf").value;

    console.log(option);

    if (option == 1) {
        console.log("Todos usuários do SUS com Alto Risco.");
        window.location = "./relatorioAltoRisco.html";
    }
    else if (option == 2) {
        console.log("Último usuário do SUS cadastrado.");
        window.location = "./relatorioTodosUsers.html";
    }
}
import React, { useState } from 'react';
import { searchUserSus } from './api';

function App() {
    const [searchString, setSearchString] = useState('');
    const [users, setUsers] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();
        const rows = await searchUserSus(searchString, idEquipe);
        setUsers(rows);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for users..."
                    value={searchString}
                    onChange={e => setSearchString(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;

//botao (consulta 1)
//botao (consulta 2)
result.innerHTML = table;

btnLastCadast.addEventListener("click", chooseSearch);
btnBusca.addEventListener("click", buscaTodos);

