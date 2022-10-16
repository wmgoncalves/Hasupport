//import dados from './dadosClinicos.js';
const btnPasPad = document.querySelector('#btn-pas-pad');

function insertPasPad(){
    let pas = document.querySelector('#pas').value;
    let pad = document.querySelector('#pad').value;
    
    localStorage.setItem('pas', pas);
    localStorage.setItem('pad', pad);

    //dados.insertDados(pas, pad);
    console.log('Sucesso Cad Storage:', pas, pad);
    calculaPasPad(pas, pad);
    
}
function calculaPasPad(pas, pad){
    let el = document.querySelector('#retorno-calculo');
    let result = parseInt(pas) + parseInt(pad);
    if(result > 50){
        el.innerHTML = 'PA Ótimo'
        
    }else{
        el.innerHTML = 'PA Normal'

    }
}

btnPasPad.addEventListener("click", insertPasPad);