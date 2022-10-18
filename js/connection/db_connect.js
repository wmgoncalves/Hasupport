async function connect(){
    #console.log("Tentando conectar!");
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:12345@localhost:3306/assist_enferm");
    #console.log("Conectou ao MySQL!");
    return connection;
}

//EQUIPES
export async function selectEquipe(login, senha){
    const conn = await connect();
    let [rows] = await conn.query('SELECT * FROM usuario WHERE login=? AND senha=?', [login, senha]);
    await conn.end();
    return rows;
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
    return results.affectedRows;
}
