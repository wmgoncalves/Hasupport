const btnClean = document.querySelector('#clean-localstorage');
const retornoFizalizacaoCosulta = document.querySelector('#retorno-fizalizacao-cosulta');

function cleanStorage(){
    localStorage.clear();
    retornoFizalizacaoCosulta.innerHTML = 'Consulta finalizada com sucesso!!';
    retornoFizalizacaoCosulta.style.color = 'green';
    retornoFizalizacaoCosulta.style.fontSize = '1.2rem';
    setTimeout(function(){
        retornoFizalizacaoCosulta.innerHTML = '...';
        retornoFizalizacaoCosulta.style.color = 'black';

    }, 3000);    
}

btnClean.addEventListener("click", cleanStorage);
