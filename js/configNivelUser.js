const btn1 = document.querySelector('#btn-nivel-user-inic');
const btn2 = document.querySelector('#btn-nivel-user-exper');

function carrega1(){
    const el = document.querySelector('#retorno-config-nivel-user');
    el.innerHTML = 'Configuração salva!!';
    setTimeout(function(){
        el.innerHTML = '...';
        
    }, 3000);
    localStorage.setItem('ConfigNivelUser', null);

}

function carrega2(){
    const el = document.querySelector('#retorno-config-nivel-user');
    el.innerHTML = 'Configuração salva!!';
    setTimeout(function(){
        el.innerHTML = '...';
        
    }, 3000);
    localStorage.setItem('ConfigNivelUser', 'experiente');

}

btn1.addEventListener("click", carrega1);
btn2.addEventListener("click", carrega2);