import { connect } from "./db_connect.js";

const btnFinaliza = document.querySelector("#btn-finaliza-consulta");

function ajustaIndicadores(){
    let baixo_risco = localStorage.getItem('brIdade') != null ? localStorage.getItem('brIdade') : '';
    // localStorage.setItem('brSexMasc', brSexMasc);
    // localStorage.setItem('brTabag', brTabag);
    // localStorage.setItem('brHipert', brHipert);
    // localStorage.setItem('brObs', brObs);
    // localStorage.setItem('brSedent', brSedent);
    // localStorage.setItem('brHistoFam', brHistoFam);
    // localStorage.setItem('brHistoDoenca', brHistoDoenca);
    // localStorage.setItem('brManifest', brManifest);
    // localStorage.setItem('brDiagnDislip', brDiagnDislip);
    // localStorage.setItem('brDiagnPolic', brDiagnPolic);

    // localStorage.setItem('arAcidVasc', arAcidVasc);
    // localStorage.setItem('arInfartAgud', arInfartAgud);
    // localStorage.setItem('arLesPerif', arLesPerif);
    // localStorage.setItem('arAtaqIsqu', arAtaqIsqu);
    // localStorage.setItem('arHiperVentr', arHiperVentr);
    // localStorage.setItem('arNefrop', arNefrop);
    // localStorage.setItem('arRetin', arRetin);
    // localStorage.setItem('arAneur', arAneur);
    // localStorage.setItem('arEsten', arEsten);
    // localStorage.setItem('arDiabet', arDiabet);
    // localStorage.setItem('arDoenVasc', arDoenVasc);
    // localStorage.setItem('arInsuf', arInsuf);
    // localStorage.setItem('arAngina', arAngina);
    // localStorage.setItem('arDoencRenal', arDoencRenal);

    return ind;
}

function ajustaListPsicobio(){
    let lista = "NECESSIDADES PSICOBIOLÓGICAS:\n";

    //OXIGENAÇÃO
    let oxigenacao = '';
    let tot = localStorage.getItem('qtd-oxi');
    for(let i=0; i<tot; i++){
        let name = `oxi-${i}`;
        let check = localStorage.getItem(name);
        // console.log(check);
        if(check != null)
            oxigenacao += check + ".\n";
    }
    if(oxigenacao != ''){
        lista += "- Oxigenação:\n" + oxigenacao;
    }

    //NUTRIÇÃO
    
    // console.log(lista);
    return lista;
}

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
    //INDICADORES
    let indicadores = null; //localStorage.getItem('');
    //Indicadores de risco baixo/intermediário
    //Indicadores de alto risco

    let clas_estrat = localStorage.getItem('clas_estrat');
    let list_psicobio = ajustaListPsicobio();
    let list_psicosoc = null; //localStorage.getItem('');
    let list_psicoesp = null; //localStorage.getItem('');

    let hemogHemac = localStorage.getItem('hemogHemac');
    let hemogHemogl = localStorage.getItem('hemogHemogl');
    let hemogHemat = localStorage.getItem('hemogHemat');
    let hemogHeuc = localStorage.getItem('hemogHeuc');
    let hemogHinf = localStorage.getItem('hemogHinf');
    let hemogHlaq = localStorage.getItem('hemogHlaq');
    let hemogHlic = localStorage.getItem('hemogHlic');
    let hemogColes = localStorage.getItem('hemogColes');
    let hemogHdl = localStorage.getItem('hemogHdl');
    let hemogTrig = localStorage.getItem('hemogTrig');
    let hemogHemogGlic = localStorage.getItem('hemogHemogGlic');
    let hemogCreat = localStorage.getItem('hemogCreat');
    let hemogPotass = localStorage.getItem('hemogPotass');
    let hemogEqu = localStorage.getItem('hemogEqu');
    let hemogMicroa =  localStorage.getItem('hemogMicroa');
    let hemogAlbum = localStorage.getItem('hemogAlbum');
    let hemogAcid = localStorage.getItem('hemogAcid');
    let hemogUreia = localStorage.getItem('hemogUreia');
    let hemogTgo = localStorage.getItem('hemogTgo');
    let hemogTgp = localStorage.getItem('hemogTgp');

    // console.log(ajustaIndicadores());
    const conn = await connect();
    let [results] = await conn.query(
        'INSERT INTO consulta (data_cons, fk_id_usersus, pas, clas_ha, imc, clas_imc, clas_abdo, clas_cint_quad, clas_torn_brac, indicadores, clas_estrat, list_psicobio, list_psicosoc, list_psicoesp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [cur_date, idUserSus, pas, clas_ha, imc, clas_imc, clas_abdo, clas_cint_quad, clas_torn_braq, indicadores, clas_estrat, list_psicobio, list_psicosoc, list_psicoesp],
        function(err){
            if(err) throw err;
        }
    );

    let [results2] = await conn.query(
        'INSERT INTO hemograma (fk_id_usersus, fk_data_cons, hemacias, hemoglobina, hematoclito, leucocitos, linfocitos, plaquetas, glicemia_jejum, colesterol_total, hdl, triglicerideos, hemoglobina_glicada, creatina, potassio_plasmatico, equ, microalbumina_urina, albumina, acido_urico, ureia, tgo, tgp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [idUserSus, cur_date, hemogHemac, hemogHemogl, hemogHemat, hemogHeuc, hemogHinf, hemogHlaq, hemogHlic, hemogColes, hemogHdl, hemogTrig, hemogHemogGlic, hemogCreat, hemogPotass, hemogEqu,hemogMicroa, hemogAlbum, hemogAcid, hemogUreia, hemogTgo, hemogTgp],
        function(err){
            if(err) throw err;
        }
    );
    conn.end();
    return results.affectedRows;
}

btnFinaliza.addEventListener('click', saveConsulta);