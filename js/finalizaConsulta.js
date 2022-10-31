const btnFinalizaConsulta = document.querySelector('#btn-finaliza-consulta');
const retornoFinalizaCosulta = document.querySelector('#retorno-finaliza-cosulta');
let saveUser = localStorage.getItem('ehAdmin');
const idEquipe = localStorage.getItem('id_equipe');
const idUserSus = localStorage.getItem('idUserSus');

function finalizaConsulta(){
    retornoFinalizaCosulta.innerHTML = 'Salvando dados. Aguarde...';
    retornoFinalizaCosulta.style.color = 'green';
    retornoFinalizaCosulta.style.fontSize = '1.2rem';

    setTimeout(function(){
        retornoFinalizaCosulta.innerHTML = 'Dados salvos com sucesso!!';
        retornoFinalizaCosulta.style.color = 'green';
        localStorage.clear();
        console.log('# LocalStorage Limpo #');
        
    }, 3000); 

    setTimeout(function(){
        retornoFinalizaCosulta.innerHTML = '...';
        retornoFinalizaCosulta.style.color = 'black';
        localStorage.setItem('ehAdmin', saveUser);
        localStorage.setItem('id_equipe', idEquipe);
        localStorage.setItem('idUserSus', idUserSus);
        console.log('--> ', localStorage.getItem('ehAdmin'));
        console.log('Id Equipe: ', localStorage.getItem('id_equipe'));
        console.log('Id User Sus: ', localStorage.getItem('idUserSus'));
        
    }, 5000);  
}

btnFinalizaConsulta.addEventListener("click", finalizaConsulta);