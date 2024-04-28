import { searchUltimaConsulta } from "../connection/consulta_db.js";
import { loadUserSus } from "../connection/userSus_db.js";


async function printUltimaConsulta() {
    const idUser = localStorage.getItem('idUserSus');

    let result = document.querySelector(".retorno-select-3");

    let row = await loadUserSus(idUser);

    let data_nasc = row[0].data_nasc.getDate() + '/' + (row[0].data_nasc.getMonth() + 1) + '/' + row[0].data_nasc.getFullYear();

    let basic_info = `
        <div class="info">
            <h3>Dados do Usuário(a)</h3>
            <div class="infos">
                <div>
                    <p><strong>Nome:</strong> ${row[0].nome}</p>
                    <p><strong>Cartão do SUS:</strong> ${row[0].cart_sus}</p>
                    <p><strong>CPF:</strong> ${row[0].cpf}</p>
                </div>
                <div>
                    <p><strong>Data de Nascimento:</strong> ${data_nasc}</p>
                    <p><strong>Sexo:</strong> ${row[0].sexo}</p>
                </div>
            </div>
        </div>
    `;

    row = await searchUltimaConsulta(idUser);
    console.log(row);
    let data_consulta = row.data_cons.getDate() + '/' + (row.data_cons.getMonth() + 1) + '/' + row.data_cons.getFullYear();

    let info_consulta = `
        <div class="info">
            <h3>Exame físico/avaliação clínica</h3>
            <p>Data da consulta: ${data_consulta}</p>
            <div class="infos">
                <div class="exames">
                    <p><strong>PAS:</strong> ${row.pas} / <strong>PAD:</strong> ${row.pad}</p>
                    <p><strong>Classificação da HA:</strong> ${row.clas_ha}</p>
                    <p><strong>IMC:</strong> ${row.imc.toFixed(2)}</p>
                    <p><strong>Classificação do IMC:</strong> ${row.clas_imc}</p>
                </div>
                <div>
                    <p><strong> Classificação Circunferência abdominal:</strong> ${row.clas_abdo}</p>
                    <p><strong> Circunferência abdominal:</strong> ${row.circ_abdo}</p>
                    <p><strong> Classificação Cintura-Quadril:</strong> ${row.clas_cint_quad}</p>
                    <p><strong> Cintura-Quadril:</strong> ${row.cint_quad.toFixed(2)}</p>
                    <p><strong> Classificação Índice Tornozelo-Braquial:</strong> ${row.clas_torn_brac}</p>
                    <p><strong> Índice Tornozelo-Braquial:</strong> ${row.torn_brac.toFixed(2)}</p>
                    
                </div>
            </div>
        </div>
    `;
    let indi = row.indicadores.replaceAll('\n', '<br>')
    indi=indi.replaceAll("Não fumante","")
    let estrat = `
        <div class="info html2pdf__page-break">
            <h3>Estratificação do Risco Cardiovascular</h3>
            <p><strong>Classificação da Estratificação:</strong> ${row.clas_estrat}</p>
            <p>${indi}</p>
        </div>
    `;
    let nec_psBio = '';
    if (row.list_psicobio != '') {
        let Psicobio = row.list_psicobio.replaceAll('\n', '<br>')
        nec_psBio = `
        <div class="info html2pdf__page-break">
            <h3>Necessidades Psicobiológicas</h3>
            <p>${Psicobio}</p>
        </div>
    `;
    }
    let nec_psSoc = '';
    if (row.list_psicosoc) {
        let Psicosoc = row.list_psicosoc.replaceAll('\n', '<br>')
        nec_psSoc = `
        <div class="info html2pdf__page-break">
            <h3>Necessidades Psicosociais</h3>
            <p>${Psicosoc}</p>
        </div>
    `;
    }
    let nec_psEsp = '';
    if (row.list_psicoesp) {
        let Psicoesp = row.list_psicoesp.replaceAll('\n', '<br>')
        nec_psEsp = `
        <div class="info html2pdf__page-break">
            <h3>Necessidades Psicoespirituais</h3>
            <p>${Psicoesp}</p>
        </div>
    `;
    }
    result.innerHTML = basic_info + info_consulta + estrat + nec_psBio + nec_psSoc + nec_psEsp;
}

window.addEventListener('load', printUltimaConsulta);