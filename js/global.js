const btn1 = document.querySelector('#btn-aspectos');
const btn2 = document.querySelector('#btn-proped');
const btn3 = document.querySelector('#btn-sinais');
const btn4 = document.querySelector('#btn-rastreamento');
const btn5 = document.querySelector('#btn-antropom');

const btn6 = document.querySelector('#btn-imc');

function carrega1(){
    const el = document.querySelector('.text-none-aspectos');
    if(el.style.display === 'block'){
        el.style.display = 'none';
        btn1.textContent = 'ASPECTOS A SEREM AVALIADOS';        
    
    } else {
        el.style.display = 'block';
        btn1.textContent = 'FECHAR';
    }
}
function carrega2(){
    const el = document.querySelector('.text-none-proped');
    if(el.style.display === 'block'){
        el.style.display = 'none';
        btn2.textContent = 'TÉCNICAS PROPEDÊUTICAS';        
    
    } else {
        el.style.display = 'block';
        btn2.textContent = 'FECHAR';
    }
}
function carrega3(){
    const el = document.querySelector('.text-none-sinais');
    if(el.style.display === 'block'){
        el.style.display = 'none';
        btn3.textContent = 'SINAIS VITAIS';        
    
    } else {
        el.style.display = 'block';
        btn3.textContent = 'FECHAR';
    }
}
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
btn1.addEventListener("click", carrega1);
btn2.addEventListener("click", carrega2);
btn3.addEventListener("click", carrega3);
btn4.addEventListener("click", carrega4);
btn5.addEventListener("click", carrega5);

btn6.addEventListener("click", carrega6);