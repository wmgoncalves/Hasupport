const btnAjuda = document.querySelector('#btn-ajuda');

function ajudaUser(){
    const el = document.querySelector('#retorno-ajuda-user');
    el.innerHTML = 'https://www.youtube.com/watch?v=rH_A1A4rBAM';
    el.style.fontSize = '1rem';
    el.style.color = 'green';
    el.style.fontWeight = '500';
    setTimeout(function(){
        el.innerHTML = '';
        
    }, 7000);
    
}
btnAjuda.addEventListener("click", ajudaUser);