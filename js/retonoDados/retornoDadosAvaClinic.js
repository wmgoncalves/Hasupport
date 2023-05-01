let imcRetornoSexo = document.querySelector('#imc-retorno-sexo');
let imcRetornoIdade = document.querySelector('#imc-retorno-idade');

let circAbdomRetornoSexo = document.querySelector('#circ-abdom-retorno-sexo');
let cintQuadrRetornoSexo = document.querySelector('#cint-quadr-retorno-sexo');

let etapa2RetornoIdade = document.querySelector('#etapa2-retorno-idade');
let etapa2RetornoSexo = document.querySelector('#etapa2-retorno-sexo');
let etapa2ColestTotal = document.querySelector('#etapa2-colest-total');
let etapa2Hdl = document.querySelector('#etapa2-hdl');

let checkMasc = document.querySelector('#br-sex-masc');
let checkIdade = document.querySelector('#br-idade');


function retornaValoresHemograma() {
    etapa2ColestTotal.value = localStorage.getItem('hemogColes');
    etapa2Hdl.value = localStorage.getItem('hemogHdl');

}
retornaValoresHemograma();

/*Funcão para marcar checkeds, ateriormente informados*/
function verificaCheckeds() {
    let dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();
    let dataInformada = 0;
    let idade = 0;
    if ((localStorage.getItem('userCadData')) == null) {
        dataInformada = '';
        /*Salva idade em localstorage*/
        localStorage.setItem('userCadIdade', dataInformada);

    } else {
        dataInformada = localStorage.getItem('userCadData');
        const dataNascimento = new Date(dataInformada);
        const anoNascimento = dataNascimento.getFullYear();
        const mesNascimento = dataNascimento.getMonth() + 1;
        const diaNascimento = dataNascimento.getDate();
        idade = anoAtual - anoNascimento;

        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
            idade--;
        }
        /*Salva idade em localstorage*/
        localStorage.setItem('userCadIdade', idade);
    }

    console.log('Data hj: ', dataAtual, dataInformada, (idade));

    if (localStorage.getItem('userCadSexo') === 'Masculino') {
        checkMasc.checked = true;

    } else if (localStorage.getItem('userCadSexo') === 'Feminino') {
        checkMasc.checked = false;

    }
    if ((dataAtual - dataInformada) > 65) {
        checkIdade.checked = true;

    } else {
        checkIdade.checked = false;

    }

}
verificaCheckeds();

function retornaSexoIdade() {
    imcRetornoIdade.innerHTML = localStorage.getItem('userCadIdade');
    imcRetornoSexo.innerHTML = localStorage.getItem('userCadSexo');

    circAbdomRetornoSexo.innerHTML = localStorage.getItem('userCadSexo');
    cintQuadrRetornoSexo.innerHTML = localStorage.getItem('userCadSexo');

    etapa2RetornoIdade.innerHTML = localStorage.getItem('userCadIdade');
    etapa2RetornoSexo.innerHTML = localStorage.getItem('userCadSexo');

    console.log(localStorage.getItem('userCadSexo'), localStorage.getItem('userCadIdade'));

}
retornaSexoIdade();

/*Função que preenche input anteriormente informados*/
function retornaDadosInputs() {
    let pas = document.querySelector('#pas');
    let pad = document.querySelector('#pad');

    let peso = document.querySelector('#imc-peso');
    let altura = document.querySelector('#imc-altura');

    let circAbdomCm = document.querySelector('#circ-abdom-cm');

    let cintQuadrAbdomCm = document.querySelector('#cint-quadr-abdom-cm');
    let cintQuadrQuadrCm = document.querySelector('#cint-quadr-quadr-cm');

    let tornBraqPasTorn = document.querySelector('#torn-braq-pas-torn');
    let tornBraqPasBra = document.querySelector('#torn-braq-pas-bra');

    let etapa2ColestTotal = document.querySelector('#etapa2-colest-total');
    let etapa2Fumante = document.querySelector('#etapa2-fumante');
    let etapa2Hdl = document.querySelector('#etapa2-hdl');
    let etapa2PaSistol = document.querySelector('#etapa2-pa-sistol');
    let etapa2Tratada = document.querySelector('#etapa2-tratada');

    pas.value = localStorage.getItem('pas');
    pad.value = localStorage.getItem('pad');

    peso.value = localStorage.getItem('peso');
    altura.value = localStorage.getItem('altura');

    circAbdomCm.value = localStorage.getItem('circAbdomCm');

    cintQuadrAbdomCm.value = localStorage.getItem('cintQuadrAbdomCm');
    cintQuadrQuadrCm.value = localStorage.getItem('cintQuadrQuadrCm');

    tornBraqPasTorn.value = localStorage.getItem('tornBraqPasTorn');
    tornBraqPasBra.value = localStorage.getItem('pas');

    etapa2ColestTotal.value = localStorage.getItem('hemogColes');
    etapa2Hdl.value = localStorage.getItem('hemogHdl');
    etapa2PaSistol.value = localStorage.getItem('pas');

    if ((localStorage.getItem('etapa2Tratada') == null) || (localStorage.getItem('etapa2Tratada') == 'Não tratada')) {
        console.log('false', localStorage.getItem('etapa2Tratada'));
        etapa2Tratada.checked = false;

    } else {
        console.log('true', localStorage.getItem('etapa2Tratada'));
        etapa2Tratada.checked = true;

    }
    if ((localStorage.getItem('brTabag') == null) || (localStorage.getItem('brTabag') == 'Não fumante')) {
        console.log('false', localStorage.getItem('brTabag'));
        etapa2Fumante.checked = false;

    } else {
        console.log('true', localStorage.getItem('brTabag'));
        etapa2Fumante.checked = true;

    }

}
retornaDadosInputs();

/*Função que preenche input anteriormente informados*/
function retornaDadosCheckbox() {
    /*Variaveis Risco Baixo*/
    let brIdade = document.querySelector('#br-idade');
    let brSexMasc = document.querySelector('#br-sex-masc');
    let brTabag = document.querySelector('#br-tabag');
    let brHipert = document.querySelector('#br-hipert');
    let brObs = document.querySelector('#br-obs');
    let brSedent = document.querySelector('#br-sedent');
    let brHistoFam = document.querySelector('#br-histo-fam');
    let brHistoDoenca = document.querySelector('#br-histo-doenca');
    let brManifest = document.querySelector('#br-manifest');
    let brDiagnDislip = document.querySelector('#br-diagn-dislip');
    let brDiagnPolic = document.querySelector('#br-diagn-polic');

    /*Variaveis Risco Alto */
    let arAcidVasc = document.querySelector('#ar-acid-vasc');
    let arInfartAgud = document.querySelector('#ar-infart-agud');
    let arLesPerif = document.querySelector('#ar-les-perif');
    let arAtaqIsqu = document.querySelector('#ar-ataq-isqu');
    let arHiperVentr = document.querySelector('#ar-hiper-ventr');
    let arNefrop = document.querySelector('#ar-nefrop');
    let arRetin = document.querySelector('#ar-retin');
    let arAneur = document.querySelector('#ar-aneur');
    let arEsten = document.querySelector('#ar-esten');
    let arDiabet = document.querySelector('#ar-diabet');
    let arDoenVasc = document.querySelector('#ar-doen-vasc');
    let arInsuf = document.querySelector('#ar-insuf');
    let arAngina = document.querySelector('#ar-angina');
    let arDoencRenal = document.querySelector('#ar-doenc-renal');

    /*Salva Baixo Risco em LocalStorage *//*
    localStorage.setItem('arDoenVasc', arDoenVasc);
    localStorage.setItem('arInsuf', arInsuf);
    localStorage.setItem('arAngina', arAngina);
    localStorage.setItem('arDoencRenal', arDoencRenal);
    */

    if ((localStorage.getItem('brTabag') == null) || (localStorage.getItem('brTabag') == 'Não fumante')) {
        brTabag.checked = false;

    } else {
        brTabag.checked = true;

    }
    if ((localStorage.getItem('brHipert') == null) || (localStorage.getItem('brHipert') == 'vazio')) {
        brHipert.checked = false;

    } else {
        brHipert.checked = true;

    }
    if ((localStorage.getItem('brObs') == null) || (localStorage.getItem('brObs') == 'vazio')) {
        brObs.checked = false;

    } else {
        brObs.checked = true;

    }
    if ((localStorage.getItem('brSedent') == null) || (localStorage.getItem('brSedent') == 'vazio')) {
        brSedent.checked = false;

    } else {
        brSedent.checked = true;

    }
    if ((localStorage.getItem('brHistoFam') == null) || (localStorage.getItem('brHistoFam') == 'vazio')) {
        brHistoFam.checked = false;

    } else {
        brHistoFam.checked = true;

    }
    if ((localStorage.getItem('brHistoDoenca') == null) || (localStorage.getItem('brHistoDoenca') == 'vazio')) {
        brHistoDoenca.checked = false;

    } else {
        brHistoDoenca.checked = true;

    }
    if ((localStorage.getItem('brManifest') == null) || (localStorage.getItem('brManifest') == 'vazio')) {
        brManifest.checked = false;

    } else {
        brManifest.checked = true;

    }
    if ((localStorage.getItem('brDiagnDislip') == null) || (localStorage.getItem('brDiagnDislip') == 'vazio')) {
        brDiagnDislip.checked = false;

    } else {
        brDiagnDislip.checked = true;

    }
    if ((localStorage.getItem('brDiagnPolic') == null) || (localStorage.getItem('brDiagnPolic') == 'vazio')) {
        brDiagnPolic.checked = false;

    } else {
        brDiagnPolic.checked = true;

    }
    if ((localStorage.getItem('arAcidVasc') == null) || (localStorage.getItem('arAcidVasc') == 'vazio')) {
        arAcidVasc.checked = false;

    } else {
        arAcidVasc.checked = true;

    }
    if ((localStorage.getItem('arInfartAgud') == null) || (localStorage.getItem('arInfartAgud') == 'vazio')) {
        arInfartAgud.checked = false;

    } else {
        arInfartAgud.checked = true;

    }
    if ((localStorage.getItem('arLesPerif') == null) || (localStorage.getItem('arLesPerif') == 'vazio')) {
        arLesPerif.checked = false;

    } else {
        arLesPerif.checked = true;

    }
    if ((localStorage.getItem('arAtaqIsqu') == null) || (localStorage.getItem('arAtaqIsqu') == 'vazio')) {
        arAtaqIsqu.checked = false;

    } else {
        arAtaqIsqu.checked = true;

    }
    if ((localStorage.getItem('arHiperVentr') == null) || (localStorage.getItem('arHiperVentr') == 'vazio')) {
        arHiperVentr.checked = false;

    } else {
        arHiperVentr.checked = true;

    }
    if ((localStorage.getItem('arNefrop') == null) || (localStorage.getItem('arNefrop') == 'vazio')) {
        arNefrop.checked = false;

    } else {
        arNefrop.checked = true;

    }
    if ((localStorage.getItem('arRetin') == null) || (localStorage.getItem('arRetin') == 'vazio')) {
        arRetin.checked = false;

    } else {
        arRetin.checked = true;

    }
    if ((localStorage.getItem('arAneur') == null) || (localStorage.getItem('arAneur') == 'vazio')) {
        arAneur.checked = false;

    } else {
        arAneur.checked = true;

    }
    if ((localStorage.getItem('arEsten') == null) || (localStorage.getItem('arEsten') == 'vazio')) {
        arEsten.checked = false;

    } else {
        arEsten.checked = true;

    }
    if ((localStorage.getItem('arDiabet') == null) || (localStorage.getItem('arDiabet') == 'vazio')) {
        arDiabet.checked = false;

    } else {
        arDiabet.checked = true;

    }
    if ((localStorage.getItem('arDoenVasc') == null) || (localStorage.getItem('arDoenVasc') == 'vazio')) {
        arDoenVasc.checked = false;

    } else {
        arDoenVasc.checked = true;

    }
    if ((localStorage.getItem('arInsuf') == null) || (localStorage.getItem('arInsuf') == 'vazio')) {
        arInsuf.checked = false;

    } else {
        arInsuf.checked = true;

    }
    if ((localStorage.getItem('arAngina') == null) || (localStorage.getItem('arAngina') == 'vazio')) {
        arAngina.checked = false;

    } else {
        arAngina.checked = false;

    }
    if ((localStorage.getItem('arDoencRenal') == null) || (localStorage.getItem('arDoencRenal') == 'vazio')) {
        arDoencRenal.checked = false;

    } else {
        arDoencRenal.checked = true;

    }
}
retornaDadosCheckbox();