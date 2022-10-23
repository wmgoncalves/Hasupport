const btnOxigenacaoSalvar = document.querySelector('#btn-oxigenacao-salvar');

function insertOxigenacao(){
    let el = document.querySelector('#retorno-oxigenacao');
    el.innerHTML = "Salvo com sucesso";
    setTimeout(function(){

    }, 2000);
    
}

btnOxigenacaoSalvar.addEventListener("click", insertOxigenacao);