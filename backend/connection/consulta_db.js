import { connect } from "./db_connect.js";

//BUSCAR ALTO RISCO
export async function searchAltoRisco(idUserSus){
    const conn = await connect();
    let [row] = await conn.query("SELECT clas_estrat FROM consulta WHERE fk_cart_sus = ? ORDER BY data_cons DESC LIMIT 1", [idUserSus]);
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

//BUSCA TODOS ALTO RISCO
export async function searchAllAltoRisco(){
    const conn = await connect();
    let [rows] = await conn.query(`
        SELECT cart_sus, cpf, nome, sexo, data_nasc FROM user_sus u
        JOIN consulta c ON u.cart_sus = c.fk_cart_sus
        WHERE c.clas_estrat LIKE "ALTO RISCO"
        AND c.data_cons = (
            SELECT MAX(data_cons) FROM consulta
            WHERE fk_cart_sus = u.cart_sus
        )`
    );
    await conn.end();
    return rows;
}

//BUSCAR ULTIMA CONSULTA
export async function searchUltimaConsulta(idUserSus){
    const conn = await connect();
    let [row] = await conn.query("SELECT * FROM consulta WHERE fk_cart_sus = ? ORDER BY data_cons DESC LIMIT 1", [idUserSus]);
    await conn.end();
    // console.log(row[0]);
    if (row[0] === undefined){
        // console.log("NÃO TEM");
        return 'indefinido';
    }
    else {
        // console.log(row[0]);
        return row[0];
    }
}
