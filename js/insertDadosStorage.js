//import dados from './dadosClinicos.js';
const btnPasPad = document.querySelector('#btn-calcular-pas-pad');
const btnImc = document.querySelector('#btn-imc-calcular');

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