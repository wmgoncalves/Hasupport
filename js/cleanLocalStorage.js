const btnFinalizaConsulta = document.querySelector('#btn-finaliza-consulta');
const retornoFizalizacaoCosulta = document.querySelector('#retorno-fizalizacao-cosulta');
let saveUser = localStorage.getItem('ehAdmin');

function cleanStorage(){
    retornoFizalizacaoCosulta.innerHTML = 'Consulta finalizada com sucesso!!';
    retornoFizalizacaoCosulta.style.color = 'green';
    retornoFizalizacaoCosulta.style.fontSize = '1.2rem';
    setTimeout(function(){
        retornoFizalizacaoCosulta.innerHTML = '...';
        retornoFizalizacaoCosulta.style.color = 'black';
        
    }, 2000);  
    localStorage.clear();
    setTimeout(function(){
        localStorage.setItem('ehAdmin', saveUser);
        console.log(localStorage.getItem('ehAdmin'));

    }, 3000);

}

btnFinalizaConsulta.addEventListener("click", cleanStorage);
