const btnSalvar = document.querySelector('#btn-educacao-salvar');

function save(){
    let checks = document.querySelectorAll("div > input");
    localStorage.setItem('qtd-edu', checks.length);
    for(let i=0; i<checks.length; i++){
        if(checks[i].checked == true){
            let name = `edu-${i}`;
            localStorage.setItem(name, checks[i].name);
        }
    }
}

function insertChecks(){
    let el = document.querySelector('#retorno-educacao');
    console.log("Salvando...");
    save();
    el.innerHTML = "Salvo com sucesso";
    setTimeout(function(){
        //window.location = 'http://localhost:5500/pages/pageDiagnosEnf.html';
    }, 2000);  
}

btnSalvar.addEventListener("click", insertChecks);