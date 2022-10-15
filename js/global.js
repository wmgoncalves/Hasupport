const btn1 = document.querySelector('#btn-aspectos');
const btn2 = document.querySelector('#btn-proped');
const btn3 = document.querySelector('#btn-sinais');
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
btn1.addEventListener("click", carrega1);
btn2.addEventListener("click", carrega2);
btn3.addEventListener("click", carrega3);