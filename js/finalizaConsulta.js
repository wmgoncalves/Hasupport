const btnFinalizaConsulta = document.querySelector('#btn-finaliza-consulta');
const retornoFinalizaCosulta = document.querySelector('#retorno-finaliza-cosulta');
const saveUser = localStorage.getItem('ehAdmin');
const idEquipe = localStorage.getItem('id_equipe');
const idUserSus = localStorage.getItem('idUserSus');
const nivelUser = localStorage.getItem('ConfigNivelUser');

function finalizaConsulta() {
    retornoFinalizaCosulta.innerHTML = 'Salvando dados. Aguarde... Para visualizar e imprimir o atendimento realizado retorne ao MENU INICIAL, selecione a opção (BUSCAR USUÁRIO(A)/RELATÓRIO INDIVIDUAL, digite o cartão SUS)';
    retornoFinalizaCosulta.style.color = 'green';
    retornoFinalizaCosulta.style.fontSize = '1.2rem';

    setTimeout(function () {
        retornoFinalizaCosulta.innerHTML = 'Dados salvos com sucesso!! Para visualizar e imprimir o atendimento realizado retorne ao MENU INICIAL, selecione a opção (BUSCAR USUÁRIO(A)/RELATÓRIO INDIVIDUAL, digite o cartão SUS)';
        retornoFinalizaCosulta.style.color = 'green';
        localStorage.clear();
        console.log('# LocalStorage Limpo #');

    }, 3000);

    setTimeout(function () {
        retornoFinalizaCosulta.innerHTML = '...';
        retornoFinalizaCosulta.style.color = 'black';
        localStorage.setItem('ehAdmin', saveUser);
        localStorage.setItem('id_equipe', idEquipe);
        localStorage.setItem('idUserSus', idUserSus);
        localStorage.setItem('ConfigNivelUser', nivelUser);
        console.log('--> ', localStorage.getItem('ehAdmin'));
        console.log('Id Equipe: ', localStorage.getItem('id_equipe'));
        console.log('Id User Sus: ', localStorage.getItem('idUserSus'));
        console.log('Nivel user: ', localStorage.getItem('ConfigNivelUser'));

        window.location = "../pages/adm_area.html";

    }, 5000);

}

btnFinalizaConsulta.addEventListener("click", finalizaConsulta);