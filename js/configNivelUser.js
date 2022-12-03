const btn1 = document.querySelector('#btn-nivel-user');

function carrega1(){
    const el = document.querySelector('#retorno-config-nivel-user');
    const btnProtocol = document.querySelector('.disable-btn-protocol');
    el.innerHTML = 'Configuração salva!!';
    setTimeout(function(){
        el.innerHTML = '...';
        
    }, 3000);
    localStorage.setItem('ConfigNivelUser', 'experiente');
    btnProtocol.style.display = 'block';
}

btn1.addEventListener("click", carrega1);