const btnOxigenacaoSalvar = document.querySelector('#btn-oxigenacao-salvar');

function save(){
    let checks = document.querySelectorAll("div > input");

    localStorage.setItem('qtd-oxi', checks.length);
    for(let i=0; i<checks.length; i++){
        if(checks[i].checked == true){
            let name = `oxi-${i}`;
            localStorage.setItem(name, checks[i].name);
        }
    }
}

function test(){
    let tot = localStorage.getItem('qtd-oxi');
    for(let i=0; i<tot; i++){
        let name = `oxi-${i}`;
        let check = localStorage.getItem(name);
        console.log(check);
    }
}

function insertOxigenacao(){
    let el = document.querySelector('#retorno-oxigenacao');
    console.log("Salvando...");
    save();
    
    console.log("Testando...");
    test();
    
    el.innerHTML = "Salvo com sucesso";
    setTimeout(function(){

    }, 2000);
}

btnOxigenacaoSalvar.addEventListener("click", insertOxigenacao);