const btnFinalizaConsulta = document.querySelector('#btn-finaliza-consulta');
const retornoFinalizaCosulta = document.querySelector('#retorno-finaliza-cosulta');
let saveUser = localStorage.getItem('ehAdmin');

function finalizaConsulta(){
    retornoFinalizaCosulta.innerHTML = 'Salvando dados. Aguarde...';
    retornoFinalizaCosulta.style.color = 'green';
    retornoFinalizaCosulta.style.fontSize = '1.2rem';

    setTimeout(function(){
        retornoFinalizaCosulta.innerHTML = 'Dados salvos com sucesso!!';
        retornoFinalizaCosulta.style.color = 'green';
        localStorage.clear();
        console.log('LIMPO...');
        
    }, 3000); 

    setTimeout(function(){
        retornoFinalizaCosulta.innerHTML = '...';
        retornoFinalizaCosulta.style.color = 'black';
        localStorage.setItem('ehAdmin', saveUser);
        console.log('--> ', localStorage.getItem('ehAdmin'));
        
    }, 5000);  
}

btnFinalizaConsulta.addEventListener("click", finalizaConsulta);