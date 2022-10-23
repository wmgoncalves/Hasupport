const btnNutricaoSalvar = document.querySelector('#btn-nutricao-salvar');

function insertNutricao(){
    let el = document.querySelector('#retorno-nutricao');
    el.innerHTML = "Salvo com sucesso";
    setTimeout(function(){
        //window.location = 'http://localhost:5500/pages/pageDiagnosEnf.html';

    }, 2000);
    
}

btnNutricaoSalvar.addEventListener("click", insertNutricao);