const btn1 = document.querySelector('#btn-obj-entrevista');
const btn2 = document.querySelector('#btn-quest-import');

function carrega1(){
    const el = document.querySelector('.text-none-obj-entrevista');
    if(el.style.display === 'block'){
        el.style.display = 'none';
        btn1.textContent = 'OBJETIVOS PARA ENTREVISTA';        
    
    } else {
        el.style.display = 'block';
        btn1.textContent = 'FECHAR';
    }
}
function carrega2(){
    const el = document.querySelector('.text-none-quest-import');
    if(el.style.display === 'block'){
        el.style.display = 'none';
        btn2.textContent = 'QUESTIONAMENTOS IMPORTANTES';        
    
    } else {
        el.style.display = 'block';
        btn2.textContent = 'FECHAR';
    }
}

btn1.addEventListener("click", carrega1);
btn2.addEventListener("click", carrega2);