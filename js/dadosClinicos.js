let pas = '';
let pad = '';

function insertDados(pass, padd){
    console.log('Sucesso Cad Dados Clinicos');
    getDados();
    
}
function getDados(){
    console.log(pas, pad);
    console.log(localStorage.getItem('pas'), localStorage.getItem('pad'));

}

export default {insertDados, getDados};
