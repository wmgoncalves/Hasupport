const btn4 = document.querySelector('#btn-rastreamento');
const btn5 = document.querySelector('#btn-antropom');
const btn6 = document.querySelector('#btn-imc');
const btn7 = document.querySelector('#btn-circ-abdom');
const btn8 = document.querySelector('#btn-cint-quadr');
const btn9 = document.querySelector('#btn-torn-braq');
const btn10 = document.querySelector('#btn-estrat-risco');

function carrega4(){
    const el = document.querySelector('.text-none-rastreamento');
    if(el.style.display === 'block'){
        el.style.display = 'none';
        btn4.textContent = 'RASTREAMENTO DA HIPERTENSÃO ARTERIAL';        
        
    } else {
        el.style.display = 'block';
        btn4.textContent = 'FECHAR';
    }
}
function carrega5(){
    const el = document.querySelector('.text-none-antropom');
    if(el.style.display === 'block'){
        el.style.display = 'none';
        btn5.textContent = 'DADOS ANTROPOMÉTRICOS';        
        
    } else {
        el.style.display = 'block';
        btn5.textContent = 'FECHAR';
    }
}
function carrega6(){
    const el = document.querySelector('.text-none-imc');
    if(el.style.display === 'block'){
        el.style.display = 'none';
        btn6.textContent = 'ÍNDICE DE MASSA CORPORAL (IMC)';       
        
    } else {
        el.style.display = 'block';
        btn6.textContent = 'FECHAR';
    }
}
function carrega7(){
    const el = document.querySelector('.text-none-circ-abdom');
    if(el.style.display === 'block'){
        el.style.display = 'none';
        btn7.textContent = 'CIRCUNFERÊNCIA ABDOMINAL';        
        
    } else {
        el.style.display = 'block';
        btn7.textContent = 'FECHAR';
    }
}
function carrega8(){
    const el = document.querySelector('.text-none-cint-quadr');
    if(el.style.display === 'block'){
        el.style.display = 'none';
        btn8.textContent = 'RELAÇÃO CINTURA-QUADRIL';        
        
    } else {
        el.style.display = 'block';
        btn8.textContent = 'FECHAR';
    }
}
function carrega9(){
    const el = document.querySelector('.text-none-torn-braq');
    if(el.style.display === 'block'){
        el.style.display = 'none';
        btn9.textContent = 'ÍNDICE TORNOZELO-BRAQUIAL';        
        
    } else {
        el.style.display = 'block';
        btn9.textContent = 'FECHAR';
    }
}
function carrega10(){
    const el = document.querySelector('.text-none-estrat-risco');
    if(el.style.display === 'block'){
        el.style.display = 'none';
        btn10.textContent = 'ESTRATIFICAÇÃO DO RISCO CARDIOVASCULAR';        
        
    } else {
        el.style.display = 'block';
        btn10.textContent = 'FECHAR';
    }
}

btn4.addEventListener("click", carrega4);
btn5.addEventListener("click", carrega5);
btn6.addEventListener("click", carrega6);
btn7.addEventListener("click", carrega7);
btn8.addEventListener("click", carrega8);
btn9.addEventListener("click", carrega9);
btn10.addEventListener("click", carrega10);