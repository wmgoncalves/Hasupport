import { connect } from "./db_connect.js";

//CADASTRO
export async function userSusExists(cartSus, cpf) {
    const conn = await connect();
    let [rows] = await conn.query('SELECT * FROM user_sus WHERE cart_sus=? OR cpf=?', [cartSus, cpf]);
    await conn.end();
    return rows;
}

export async function lastUserSus() {
    const conn = await connect();
    let [rows] = await conn.query('SELECT MAX(id_usersus) AS lastId FROM user_sus');
    await conn.end();
    return rows;
}


//ALTERAR
export async function loadUserSus(idUserSus) {
    const conn = await connect();
    let [row] = await conn.query('SELECT * FROM user_sus WHERE id_usersus=?', [idUserSus]);
    await conn.end();
    return row;
}

//BUSCAR
export async function searchUserSus(user, idEquipe) {
    const conn = await connect();
    user = '%' + user + '%';
    let [rows] = await conn.query(
        "SELECT * FROM user_sus WHERE fk_id_equipe=? AND (cart_sus LIKE ? OR cpf LIKE ? OR nome LIKE ?)",
        [idEquipe, user, user, user]);
    await conn.end();
    return rows;
}

export async function insertUserSus(cartSus, cpf, nome, dataNasc, sexo, idEquipe) {
    const conn = await connect();
    let [results] = await conn.query(
        'INSERT INTO user_sus (cart_sus, cpf, nome, data_nasc, sexo, fk_id_equipe) VALUES (?, ?, ?, ?, ?, ?)',
        [cartSus, cpf, nome, dataNasc, sexo, idEquipe],
        function (err) {
            if (err) throw err;
        }
    );
    conn.end();
    return results.affectedRows;
}

export async function todos_users() {
    const conn = await connect();
    let [rows] = await conn.query('SELECT * FROM user_sus');
    await conn.end();
    return rows;
}


// export async function updateUserSus(cartSus, cpf, nome, dataNasc, sexo, idEquipe){
//     const conn = await connect();
//     let [results] = await conn.query(
//         'UPDATE user_sus SET cpf=?, nome=?, data_nasc=?, sexo=?, fk_id_equipe=? WHERE cart_sus=?',
//         [cpf, nome, dataNasc, sexo, idEquipe, cartSus],
//         function(err){
//             if(err) throw err;
//         }
//     );
//     conn.end();
//     return results.affectedRows;
// }