//import dados from './dadosClinicos.js';
const btnPasPad = document.querySelector('#btn-calcular-pas-pad');
const btnImc = document.querySelector('#btn-imc-calcular');

function insertPasPad(){
    let pas = document.querySelector('#pas').value;
    let pad = document.querySelector('#pad').value;
    
    localStorage.setItem('pas', pas);
    localStorage.setItem('pad', pad);

    console.log('Sucesso Pas-Pad:', pas, pad);
    calculaPasPad(pas, pad);
    
}
function insertImc(){
    let peso = document.querySelector('#imc-peso').value;
    let altura = document.querySelector('#imc-altura').value;
    
    localStorage.setItem('peso', peso);
    localStorage.setItem('altura', altura);

    console.log('Sucesso Peso-Altura:', peso, altura);
    calculaImc(peso, altura);
    
}
function calculaPasPad(pas, pad){
    let el = document.querySelector('#retorno-calculo-pas-pad');
    let result = parseInt(pas) + parseInt(pad);
    if(result > 50){
        el.innerHTML = 'PA Ótimo'
        
    }else{
        el.innerHTML = 'PA Normal'

    }
}
function calculaImc(peso, altura){
    let el = document.querySelector('#retorno-calculo-imc');
    let result = parseInt(peso)/(parseFloat(altura)*parseFloat(altura));
    console.log(result);

    if(result > 40){
        el.innerHTML = 'Obesidade Grave'
        
    }else{
        el.innerHTML = 'Normal'

    }
}

btnPasPad.addEventListener("click", insertPasPad);
btnImc.addEventListener("click", insertImc);