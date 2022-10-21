//import dados from './dadosClinicos.js';
const btnPasPad = document.querySelector('#btn-calcular-pas-pad');
const btnImc = document.querySelector('#btn-imc-calcular');
const btnCircAbdom = document.querySelector('#btn-circ-abdom-calcular');
const btnCintQuadr = document.querySelector('#btn-cint-quadr-calcular');
const btnTornBraq = document.querySelector('#btn-torn-braq-calcular');

const btnEstratCalcular = document.querySelector('#btn-estrat-calcular');

function insertPasPad(){
    let pad = document.querySelector('#pad').value;
    let pas = document.querySelector('#pas').value;
    
    localStorage.setItem('pad', pad);
    localStorage.setItem('pas', pas);

    console.log('Sucesso Pad-Pas:', pad, pas);
    calculaPasPad(pad, pas);
    
}
function insertImc(){
    let peso = document.querySelector('#imc-peso').value;
    let altura = document.querySelector('#imc-altura').value;
    
    localStorage.setItem('peso', peso);
    localStorage.setItem('altura', altura);
    
    console.log('Sucesso Peso-Altura:', peso, altura);
    calculaImc(peso, altura);
    
}
function insertCircAbdom(){
    let circCbdomCm = document.querySelector('#circ-abdom-cm').value;
    
    localStorage.setItem('circCbdomCm', circCbdomCm);
    
    console.log('Sucesso Circunferencia Abdominal:', circCbdomCm);
    
}
function insertCintQuadr(){
    let cintQuadrAbdomCm = document.querySelector('#cint-quadr-abdom-cm').value;
    let cintQuadrQuadrCm = document.querySelector('#cint-quadr-quadr-cm').value;
    
    localStorage.setItem('cintQuadrAbdomCm', cintQuadrAbdomCm);
    localStorage.setItem('cintQuadrQuadrCm', cintQuadrQuadrCm);
    
    console.log('Sucesso Cintura-Quadril:', cintQuadrAbdomCm, cintQuadrQuadrCm);
    
}
function insertTornBraq(){
    let tornBraqPasTorn = document.querySelector('#torn-braq-pas-torn').value;
    let tornBraqPasBra = document.querySelector('#torn-braq-pas-bra').value;
    
    localStorage.setItem('tornBraqPasTorn', tornBraqPasTorn);
    localStorage.setItem('tornBraqPasTorn', tornBraqPasTorn);
    
    console.log('Sucesso Tornozelo-Braquial:', tornBraqPasTorn, tornBraqPasBra);
    
}
function insertEstratificacao(){
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

    /*Condição Risco Baixo*/
    if(brIdade.checked == true){
        brIdade = document.querySelector('#br-idade').name;
    }else{
        brIdade = "vazio"
    }

    if(brSexMasc.checked == true){
        brSexMasc = document.querySelector('#br-sex-masc').name;
    }else{
        brSexMasc = "vazio"
    }

    if(brTabag.checked == true){
        brTabag = document.querySelector('#br-tabag').name;
    }else{
        brTabag = "vazio"
    }

    if(brHipert.checked == true){
        brHipert = document.querySelector('#br-hipert').name;    
    }else{
        brHipert = "vazio"
    }

    if(brObs.checked == true){
        brObs = document.querySelector('#br-obs').name;    
    }else{
        brObs = "vazio"
    }

    if(brSedent.checked == true){
        brSedent = document.querySelector('#br-sedent').name;    
    }else{
        brSedent = "vazio"
    }

    if(brHistoFam.checked == true){
        brHistoFam = document.querySelector('#br-histo-fam').name;
    }else{
        brHistoFam = "vazio"
    }

    if(brHistoDoenca.checked == true){
        brHistoDoenca = document.querySelector('#br-histo-doenca').name;
    }else{
        brHistoDoenca = "vazio"
    }

    if(brManifest.checked == true){
        brManifest = document.querySelector('#br-manifest').name;    
    }else{
        brManifest = "vazio"
    }

    if(brDiagnDislip.checked == true){
        brDiagnDislip = document.querySelector('#br-diagn-dislip').name;    
    }else{
        brDiagnDislip = "vazio"
    }

    if(brDiagnPolic.checked == true){
        brDiagnPolic = document.querySelector('#br-diagn-polic').name;
    }else{
        brDiagnPolic = "vazio"
    }

    /*Condição Risco Alto*/
    if(arAcidVasc.checked == true){
        arAcidVasc = document.querySelector('#ar-acid-vasc').name;
    }else{
        arAcidVasc = "vazio"
    }

    if(arInfartAgud.checked == true){
        arInfartAgud = document.querySelector('#ar-infart-agud').name;
    }else{
        arInfartAgud = "vazio"
    }

    if(arLesPerif.checked == true){
        arLesPerif = document.querySelector('#ar-les-perif').name;
    }else{
        arLesPerif = "vazio"
    }
    
    if(arAtaqIsqu.checked == true){
        arAtaqIsqu = document.querySelector('#ar-ataq-isqu').name;
    }else{
        arAtaqIsqu = "vazio"
    }

    if(arHiperVentr.checked == true){
        arHiperVentr = document.querySelector('#ar-hiper-ventr').name;
    }else{
        arHiperVentr = "vazio"
    }

    if(arNefrop.checked == true){
        arNefrop = document.querySelector('#ar-nefrop').name;
    }else{
        arNefrop = "vazio"
    }

    if(arRetin.checked == true){
        arRetin = document.querySelector('#ar-retin').name;
    }else{
        arRetin = "vazio"
    }

    if(arAneur.checked == true){
        arAneur = document.querySelector('#ar-aneur').name;
    }else{
        arAneur = "vazio"
    }

    if(arEsten.checked == true){
        arEsten = document.querySelector('#ar-esten').name;
    }else{
        arEsten = "vazio"
    }

    if(arDiabet.checked == true){
        arDiabet = document.querySelector('#ar-diabet').name;
    }else{
        arDiabet = "vazio"
    }

    if(arDoenVasc.checked == true){
        arDoenVasc = document.querySelector('#ar-doen-vasc').name;
    }else{
        arDoenVasc = "vazio"
    }

    if(arInsuf.checked == true){
        arInsuf = document.querySelector('#ar-insuf').name;
    }else{
        arInsuf = "vazio"
    }

    if(arAngina.checked == true){
        arAngina = document.querySelector('#ar-angina').name;
    }else{
        arAngina = "vazio"
    }

    if(arDoencRenal.checked == true){
        arDoencRenal = document.querySelector('#ar-doenc-renal').name;
    }else{
        arDoencRenal = "vazio"
    }
    
    console.log('Sucesso Estratificação Baixo:', brIdade, brSexMasc, brTabag, brHipert, brObs,
         brSedent, brHistoFam, brHistoDoenca, brManifest,
         brDiagnDislip, brDiagnPolic);

    console.log('Sucesso Estratificação Alto:', arAcidVasc,arInfartAgud, arLesPerif,
        arAtaqIsqu, arHiperVentr, arNefrop, arRetin,
        arAneur, arEsten, arDiabet, arDoenVasc, arInsuf,
        arAngina, arDoencRenal);

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
        localStorage.setItem('rAcidVasc', arAcidVasc);
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
function calculaPasPad(pad, pas){
    let el = document.querySelector('#retorno-calculo-pas-pad');
    if((parseInt(pad) < 85) && (parseInt(pas) < 130)){
        el.innerHTML = 'Normal'
        
    }else if(((parseInt(pad) >= 85) && (parseInt(pad) < 90)) && (parseInt(pas) >= 130) && (parseInt(pas) < 140)){
        el.innerHTML = 'Peso limítrofe'

    }else if(((parseInt(pad) >= 90) && (parseInt(pad) < 100)) && (parseInt(pas) >= 140) && (parseInt(pas) < 160)){
        el.innerHTML = 'Hipertensão leve (estágio 1)'

    }
}
function calculaImc(peso, altura){
    let el = document.querySelector('#retorno-calculo-imc');
    let result = parseInt(peso)/(parseFloat(altura)*parseFloat(altura));
    console.log(result);

    if(result < 18.5){
        el.innerHTML = 'Abaixo do peso'
        
    }else if((result >= 18.5) && (result < 25)){
        el.innerHTML = 'Peso normal'

    }else if((result >= 25) && (result < 30)){
        el.innerHTML = 'Excesso de peso'

    }else if((result >= 30) && (result < 35)){
        el.innerHTML = 'Obesidade classe I'

    }else if((result >= 35) && (result < 40)){
        el.innerHTML = 'Obesidade classe II'

    }else if(result >= 40){
        el.innerHTML = 'Obesidade classe III'

    }
}

btnPasPad.addEventListener("click", insertPasPad);
btnImc.addEventListener("click", insertImc);
btnEstratCalcular.addEventListener("click", insertEstratificacao);
btnCircAbdom.addEventListener("click", insertCircAbdom);
btnCintQuadr.addEventListener("click", insertCintQuadr);
btnTornBraq.addEventListener("click", insertTornBraq);