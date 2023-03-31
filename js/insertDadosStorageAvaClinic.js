const btnPasPad = document.querySelector('#btn-calcular-pas-pad');
const btnImc = document.querySelector('#btn-imc-calcular');
const btnCircAbdom = document.querySelector('#btn-circ-abdom-calcular');
const btnCintQuadr = document.querySelector('#btn-cint-quadr-calcular');
const btnTornBraq = document.querySelector('#btn-torn-braq-calcular');

const btnEstratCalcular = document.querySelector('#btn-estrat-calcular');
const btnEstrat2Calcular = document.querySelector('#btn-estrat2-calcular');

const etapa2PaSistol = document.querySelector('#etapa2-pa-sistol');
const tornBraqPasBra = document.querySelector('#torn-braq-pas-bra');

function insertPasPad() {
    let pad = document.querySelector('#pad').value;
    let pas = document.querySelector('#pas').value;

    localStorage.setItem('pad', pad);
    localStorage.setItem('pas', pas);

    etapa2PaSistol.value = localStorage.getItem('pas');
    tornBraqPasBra.value = localStorage.getItem('pas');
    console.log('Sucesso Pas-Pad:', pas, pad);

}
function insertImc() {
    let peso = document.querySelector('#imc-peso').value;
    let altura = document.querySelector('#imc-altura').value;


    localStorage.setItem('peso', peso);
    localStorage.setItem('altura', altura);

    console.log('Sucesso Peso-Altura:', peso, altura);
    calculaImc(peso, altura);
    console.log(calculaImc);

}
function insertCircAbdom() {
    let circAbdomCm = document.querySelector('#circ-abdom-cm').value;

    localStorage.setItem('circAbdomCm', circAbdomCm);

    console.log('Sucesso Circunferencia Abdominal:', circAbdomCm);

}
function insertCintQuadr() {
    let cintQuadrAbdomCm = document.querySelector('#cint-quadr-abdom-cm').value;
    let cintQuadrQuadrCm = document.querySelector('#cint-quadr-quadr-cm').value;

    localStorage.setItem('cintQuadrAbdomCm', cintQuadrAbdomCm);
    localStorage.setItem('cintQuadrQuadrCm', cintQuadrQuadrCm);

    console.log('Sucesso Cintura-Quadril:', cintQuadrAbdomCm, cintQuadrQuadrCm);

}
function insertTornBraq() {
    let tornBraqPasTorn = document.querySelector('#torn-braq-pas-torn').value;
    let tornBraqPasBra = document.querySelector('#torn-braq-pas-bra').value;

    localStorage.setItem('tornBraqPasTorn', tornBraqPasTorn);
    localStorage.setItem('pas', tornBraqPasBra);

    etapa2PaSistol.value = localStorage.getItem('pas');
    pas.value = localStorage.getItem('pas');

    console.log('Sucesso Tornozelo-Braquial:', tornBraqPasTorn, tornBraqPasBra);

}
function insertEstratificacao() {
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

    /*Variavel da etapa 2*/
    let checkFumante = document.querySelector('#etapa2-fumante');
    checkFumante.checked = false;

    let contBaixoRisco = 0;
    let contAltoRisco = 0;

    /*Condição Risco Baixo*/
    if (brIdade.checked == true) {
        brIdade = document.querySelector('#br-idade').name;
        contBaixoRisco++;
    } else {
        brIdade = "vazio"
    }

    if (brSexMasc.checked == true) {
        brSexMasc = document.querySelector('#br-sex-masc').name;
        contBaixoRisco++;
    } else {
        brSexMasc = "vazio"
    }

    if (brTabag.checked == true) {
        brTabag = document.querySelector('#br-tabag').name;
        checkFumante.checked = true;
        contBaixoRisco++;
    } else {
        brTabag = "vazio"
    }

    if (brHipert.checked == true) {
        brHipert = document.querySelector('#br-hipert').name;
        contBaixoRisco++;
    } else {
        brHipert = "vazio"
    }

    if (brObs.checked == true) {
        brObs = document.querySelector('#br-obs').name;
        contBaixoRisco++;
    } else {
        brObs = "vazio"
    }

    if (brSedent.checked == true) {
        brSedent = document.querySelector('#br-sedent').name;
        contBaixoRisco++;
    } else {
        brSedent = "vazio"
    }

    if (brHistoFam.checked == true) {
        brHistoFam = document.querySelector('#br-histo-fam').name;
        contBaixoRisco++;
    } else {
        brHistoFam = "vazio"
    }

    if (brHistoDoenca.checked == true) {
        brHistoDoenca = document.querySelector('#br-histo-doenca').name;
        contBaixoRisco++;
    } else {
        brHistoDoenca = "vazio"
    }

    if (brManifest.checked == true) {
        brManifest = document.querySelector('#br-manifest').name;
        contBaixoRisco++;
    } else {
        brManifest = "vazio"
    }

    if (brDiagnDislip.checked == true) {
        brDiagnDislip = document.querySelector('#br-diagn-dislip').name;
        contBaixoRisco++;
    } else {
        brDiagnDislip = "vazio"
    }

    if (brDiagnPolic.checked == true) {
        brDiagnPolic = document.querySelector('#br-diagn-polic').name;
        contBaixoRisco++;
    } else {
        brDiagnPolic = "vazio"
    }

    /*Condição Risco Alto*/
    if (arAcidVasc.checked == true) {
        arAcidVasc = document.querySelector('#ar-acid-vasc').name;
        contAltoRisco++;
    } else {
        arAcidVasc = "vazio"
    }

    if (arInfartAgud.checked == true) {
        arInfartAgud = document.querySelector('#ar-infart-agud').name;
        contAltoRisco++;
    } else {
        arInfartAgud = "vazio"
    }

    if (arLesPerif.checked == true) {
        arLesPerif = document.querySelector('#ar-les-perif').name;
        contAltoRisco++;
    } else {
        arLesPerif = "vazio"
    }

    if (arAtaqIsqu.checked == true) {
        arAtaqIsqu = document.querySelector('#ar-ataq-isqu').name;
        contAltoRisco++;
    } else {
        arAtaqIsqu = "vazio"
    }

    if (arHiperVentr.checked == true) {
        arHiperVentr = document.querySelector('#ar-hiper-ventr').name;
        contAltoRisco++;
    } else {
        arHiperVentr = "vazio"
    }

    if (arNefrop.checked == true) {
        arNefrop = document.querySelector('#ar-nefrop').name;
        contAltoRisco++;
    } else {
        arNefrop = "vazio"
    }

    if (arRetin.checked == true) {
        arRetin = document.querySelector('#ar-retin').name;
        contAltoRisco++;
    } else {
        arRetin = "vazio"
    }

    if (arAneur.checked == true) {
        arAneur = document.querySelector('#ar-aneur').name;
        contAltoRisco++;
    } else {
        arAneur = "vazio"
    }

    if (arEsten.checked == true) {
        arEsten = document.querySelector('#ar-esten').name;
        contAltoRisco++;
    } else {
        arEsten = "vazio"
    }

    if (arDiabet.checked == true) {
        arDiabet = document.querySelector('#ar-diabet').name;
        contAltoRisco++;
    } else {
        arDiabet = "vazio"
    }

    if (arDoenVasc.checked == true) {
        arDoenVasc = document.querySelector('#ar-doen-vasc').name;
        contAltoRisco++;
    } else {
        arDoenVasc = "vazio"
    }

    if (arInsuf.checked == true) {
        arInsuf = document.querySelector('#ar-insuf').name;
        contAltoRisco++;
    } else {
        arInsuf = "vazio"
    }

    if (arAngina.checked == true) {
        arAngina = document.querySelector('#ar-angina').name;
        contAltoRisco++;
    } else {
        arAngina = "vazio"
    }

    if (arDoencRenal.checked == true) {
        arDoencRenal = document.querySelector('#ar-doenc-renal').name;
        contAltoRisco++;
    } else {
        arDoencRenal = "vazio"
    }


    console.log('Sucesso Estratificação Baixo:', brIdade, brSexMasc, brTabag, brHipert, brObs,
        brSedent, brHistoFam, brHistoDoenca, brManifest,
        brDiagnDislip, brDiagnPolic);

    console.log('Sucesso Estratificação Alto:', arAcidVasc, arInfartAgud, arLesPerif,
        arAtaqIsqu, arHiperVentr, arNefrop, arRetin,
        arAneur, arEsten, arDiabet, arDoenVasc, arInsuf,
        arAngina, arDoencRenal);

    verificaRisco(contBaixoRisco, contAltoRisco);

    /*Salva Baixo Risco em LocalStorage */
    localStorage.setItem('brIdade', brIdade);
    localStorage.setItem('brSexMasc', brSexMasc);
    localStorage.setItem('brTabag', brTabag);
    localStorage.setItem('brHipert', brHipert);
    localStorage.setItem('brObs', brObs);
    localStorage.setItem('brSedent', brSedent);
    localStorage.setItem('brHistoFam', brHistoFam);
    localStorage.setItem('brHistoDoenca', brHistoDoenca);
    localStorage.setItem('brManifest', brManifest);
    localStorage.setItem('brDiagnDislip', brDiagnDislip);
    localStorage.setItem('brDiagnPolic', brDiagnPolic);

    /*Salva Baixo Risco em LocalStorage */
    localStorage.setItem('arAcidVasc', arAcidVasc);
    localStorage.setItem('arInfartAgud', arInfartAgud);
    localStorage.setItem('arLesPerif', arLesPerif);
    localStorage.setItem('arAtaqIsqu', arAtaqIsqu);
    localStorage.setItem('arHiperVentr', arHiperVentr);
    localStorage.setItem('arNefrop', arNefrop);
    localStorage.setItem('arRetin', arRetin);
    localStorage.setItem('arAneur', arAneur);
    localStorage.setItem('arEsten', arEsten);
    localStorage.setItem('arDiabet', arDiabet);
    localStorage.setItem('arDoenVasc', arDoenVasc);
    localStorage.setItem('arInsuf', arInsuf);
    localStorage.setItem('arAngina', arAngina);
    localStorage.setItem('arDoencRenal', arDoencRenal);

}
function insertEstratificacaoEtapa2() {
    let etapa2ColestTotal = document.querySelector('#etapa2-colest-total').value;
    let etapa2Fumante = document.querySelector('#etapa2-fumante');
    let etapa2Hdl = document.querySelector('#etapa2-hdl').value;
    let etapa2PaSistol = document.querySelector('#etapa2-pa-sistol').value;
    let etapa2Tratada = document.querySelector('#etapa2-tratada');

    if (etapa2Fumante.checked == true) {
        localStorage.setItem('brTabag', etapa2Fumante.name);
        //localStorage.setItem('etapa2Fumante', etapa2Fumante.name);

    } else {
        localStorage.setItem('brTabag', 'Não fumante');

    }
    if (etapa2Tratada.checked == true) {
        localStorage.setItem('etapa2Tratada', etapa2Tratada.name);

    } else {
        localStorage.setItem('etapa2Tratada', 'Não tratada');

    }

    localStorage.setItem('hemogColes', etapa2ColestTotal);
    localStorage.setItem('hemogHdl', etapa2Hdl);
    localStorage.setItem('pas', etapa2PaSistol);

    tornBraqPasBra.value = localStorage.getItem('pas');
    pas.value = localStorage.getItem('pas');

    console.log(etapa2ColestTotal, localStorage.getItem('brTabag'), etapa2Hdl,
        etapa2PaSistol, localStorage.getItem('etapa2Tratada'));

}
function calculaImc(peso, altura) {
    let el = document.querySelector('#retorno-calculo-imc');
    let result = parseInt(peso) / (parseFloat(altura) * parseFloat(altura));
    console.log(result);
    

    localStorage.setItem('imc', result);

    if (result < 18.5) {
        localStorage.setItem('clas_imc', 'Abaixo do peso');
        el.innerHTML = 'Abaixo do peso'

    } else if ((result >= 18.5) && (result < 25)) {
        localStorage.setItem('clas_imc', 'Peso normal');
        el.innerHTML = 'Peso normal'

    } else if ((result >= 25) && (result < 30)) {
        localStorage.setItem('clas_imc', 'Excesso de peso');
        el.innerHTML = 'Excesso de peso'

    } else if ((result >= 30) && (result < 35)) {
        localStorage.setItem('clas_imc', 'Obesidade classe I');
        el.innerHTML = 'Obesidade classe I'

    } else if ((result >= 35) && (result < 40)) {
        localStorage.setItem('clas_imc', 'Obesidade classe II');
        el.innerHTML = 'Obesidade classe II'

    } else if (result >= 40) {
        localStorage.setItem('clas_imc', 'Obesidade classe III');
        el.innerHTML = 'Obesidade classe III'

    }
}
function calculaImc2(peso, altura) {
    let el = document.querySelector('#retorno-calculo-imc2');
    let result = parseInt(peso) / (parseFloat(altura) * parseFloat(altura));
    console.log(result);
    

    localStorage.setItem('imc', result);

    if (result < 18.5) {
        el.innerHTML = 'Seu IMC é ' + result.toFixed(2);

    } else if ((result >= 18.5) && (result < 25)) {
        el.innerHTML = 'Seu IMC é ' + result.toFixed(2);

    } else if ((result >= 25) && (result < 30)) {
        el.innerHTML = 'Seu IMC é ' + result.toFixed(2);

    } else if ((result >= 30) && (result < 35)) {
        el.innerHTML = 'Seu IMC é ' + result.toFixed(2);

    } else if ((result >= 35) && (result < 40)) {
        el.innerHTML = 'Seu IMC é ' + result.toFixed(2);

    } else if (result >= 40) {
        el.innerHTML = 'Seu IMC é ' + result.toFixed(2);

    }
}
function verificaRisco(contBaixoRisco, contAltoRisco) {
    let el = document.querySelector('#retorno-calculo-estrat');
    let el2 = document.querySelector('.disable-etapa-2');
    let el3 = document.querySelector('.disable-etapa-3');
    el.innerHTML = 'INDEFINIDO'
    el2.style.display = 'none';
    el3.style.display = 'none';

    if (contAltoRisco >= 1) {
        localStorage.setItem('clas_estrat', 'ALTO RISCO');
        el.innerHTML = 'ALTO RISCO';
        el2.style.display = 'none';
        el3.style.display = 'none';

    } else {
        if (contBaixoRisco == 1) {
            localStorage.setItem('clas_estrat', 'BAIXO RISCO');
            el.innerHTML = 'BAIXO RISCO';

        }
        if (contBaixoRisco >= 2) {
            el.innerHTML = 'Risco Indefinido! Prossiga para a Etapa 2 ...'
            el2.style.display = 'flex';
            el3.style.display = 'block';

        }
    }
}

btnPasPad.addEventListener("click", insertPasPad);
btnImc.addEventListener("click", insertImc);
btnEstratCalcular.addEventListener("click", insertEstratificacao);
btnCircAbdom.addEventListener("click", insertCircAbdom);
btnCintQuadr.addEventListener("click", insertCintQuadr);
btnTornBraq.addEventListener("click", insertTornBraq);
btnEstrat2Calcular.addEventListener('click', insertEstratificacaoEtapa2);