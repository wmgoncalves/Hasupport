import { connect } from "./db_connect.js";

const btnFinaliza = document.querySelector("#btn-finaliza-consulta");

export async function saveConsulta(){
    let date = new Date();
    let cur_date = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    // Data informada se novo cadastro/ tbm pode ser retorno do banco
    // let cur_date = localStorage.getItem('userCadData');
    // console.log(cur_date);

    let idUserSus = localStorage.getItem('idUserSus');
    let pas = localStorage.getItem('pas');
    let clas_ha = localStorage.getItem('clas_ha');
    let imc = localStorage.getItem('imc');
    let clas_imc = localStorage.getItem('clas_imc');
    let clas_abdo = localStorage.getItem('clas_abdo');
    let clas_cint_quad = localStorage.getItem('clas_cint_quad');
    let clas_torn_braq = localStorage.getItem('clas_torn_braq');
    let indicadores = null; //localStorage.getItem('');
    let clas_estrat = localStorage.getItem('clas_estrat');
    let list_psicobio = null; //localStorage.getItem('');
    let list_psicosoc = null; //localStorage.getItem('');
    let list_psicoesp = null; //localStorage.getItem('');

    
    const conn = await connect();
    let [results] = await conn.query(
        'INSERT INTO consulta (data_cons, fk_id_usersus, pas, clas_ha, imc, clas_imc, clas_abdo, clas_cint_quad, clas_torn_brac, indicadores, clas_estrat, list_psicobio, list_psicosoc, list_psicoesp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [cur_date, idUserSus, pas, clas_ha, imc, clas_imc, clas_abdo, clas_cint_quad, clas_torn_braq, indicadores, clas_estrat, list_psicobio, list_psicosoc, list_psicoesp],
        function(err){
            if(err) throw err;
        }
    );
    conn.end();
    return results.affectedRows;
}

btnFinaliza.addEventListener('click', saveConsulta);