import { connect } from "./db_connect.js";

//BUSCAR ALTO RISCO
export async function searchAltoRisco(idUserSus){
    const conn = await connect();
    let [row] = await conn.query("SELECT clas_estrat FROM consulta WHERE fk_id_usersus = ? ORDER BY data_cons DESC LIMIT 1", [idUserSus]);
    await conn.end();
    // console.log(row[0]);
    if (row[0] === undefined){
        // console.log("NÃO TEM");
        return 'indefinido';
    }
    else {
        // console.log(row[0].clas_estrat);
        return row[0].clas_estrat;
    }
}