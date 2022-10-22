import { connect } from "./db_connect.js";

export async function selectEquipe(login, senha){
    const conn = await connect();
    let [rows] = await conn.query('SELECT * FROM usuario WHERE login=? AND senha=?', [login, senha]);
    await conn.end();
    return rows;
}

export async function equipeExists(login){
    const conn = await connect();
    let [rows] = await conn.query('SELECT * FROM usuario WHERE login=?', [login]);
    await conn.end();
    return rows;
}

export async function loadEquipe(idEquipe){
    const conn = await connect();
    let [row] = await conn.query('SELECT * FROM usuario WHERE id=?', [idEquipe]);
    await conn.end();
    return row;
}

export async function insertEquipe(login, senha, membros){
    const conn = await connect();
    let [results] = await conn.query(
        'INSERT INTO usuario (login, senha, membros) VALUES (?, ?, ?)',
        [login, senha, membros],
        function(err){
            if(err) throw err;
        }
    );
    conn.end();
    return results.affectedRows;
}

export async function searchEquipes(login){
    const conn = await connect();
    login = '%' + login + '%';
    let [rows] = await conn.query("SELECT * FROM usuario WHERE login LIKE ?", [login]);
    // let [rows] = await conn.query("SELECT * FROM usuario");
    // console.log(rows);
    await conn.end();
    return rows;
}

//FUNÇÃO NÃO TESTADA
export async function updateEquipes(idEquipe, login, senha, membros){
    const conn = await connect();
    let [results] = await conn.query(
        'UPDATE usuario SET login=?, senha=?, membros=? WHERE id=?',
        [login, senha, membros, idEquipe],
        function(err){
            if(err) throw err;
        }
    );
    conn.end();
    return results.affectedRows;
}