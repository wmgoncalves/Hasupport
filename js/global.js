const btn = document.querySelector('#aspectos');
function carrega(){
    const el = document.querySelector('.text-none-aspectos');
    if(el.style.display === 'block'){
        el.style.display = 'none';
        btn.textContent = 'ASPECTOS A SEREM AVALIADOS';        
    } else {
        el.style.display = 'block';
        btn.textContent = 'FECHAR';
    }
}
btn.addEventListener("click", carrega);