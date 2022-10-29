const btnAvaClinic = document.querySelector('#btn-finaliza-ava-clinic');
const retornoFinalizaAvaClinic = document.querySelector('#retorno-finaliza-ava-clinic');

function finalizaAvaClinic(){
    retornoFinalizaAvaClinic.innerHTML = 'Salvando dados. Aguarde...';
    retornoFinalizaAvaClinic.style.color = 'green';
    retornoFinalizaAvaClinic.style.fontSize = '1.2rem';

    setTimeout(function(){
        retornoFinalizaAvaClinic.innerHTML = 'Dados salvos com sucesso!!';
        retornoFinalizaAvaClinic.style.color = 'green';
        
    }, 2000); 

    setTimeout(function(){
        retornoFinalizaAvaClinic.innerHTML = '...';
        retornoFinalizaAvaClinic.style.color = 'black';
        console.log('Dados avaliação clinica salvos');
        
    }, 4000);  
}
btnAvaClinic.addEventListener("click", finalizaAvaClinic);