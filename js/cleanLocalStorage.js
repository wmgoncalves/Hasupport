const btnFinalizaConsulta = document.querySelector('#btn-finaliza-consulta');
const retornoFizalizacaoCosulta = document.querySelector('#retorno-fizalizacao-cosulta');

function cleanStorage(){
    retornoFizalizacaoCosulta.innerHTML = 'Consulta finalizada com sucesso!!';
    retornoFizalizacaoCosulta.style.color = 'green';
    retornoFizalizacaoCosulta.style.fontSize = '1.2rem';
    setTimeout(function(){
        retornoFizalizacaoCosulta.innerHTML = '...';
        retornoFizalizacaoCosulta.style.color = 'black';
        
    }, 2000);  
    setTimeout(function(){
        localStorage.clear();

    }, 2000)
}

btnFinalizaConsulta.addEventListener("click", cleanStorage);
