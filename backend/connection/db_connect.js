export async function connect(){
    // console.log("Tentando conectar!");
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:12345@localhost:3306/assist_enferm");
    // console.log("Conectou ao MySQL!");
    return connection;
}