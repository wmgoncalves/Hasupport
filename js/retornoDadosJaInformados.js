let imcRetornoSexo = document.querySelector('#imc-retorno-sexo');
let imcRetornoIdade = document.querySelector('#imc-retorno-idade');

let circAbdomRetornoSexo = document.querySelector('#circ-abdom-retorno-sexo');
let cintQuadrRetornoSexo = document.querySelector('#cint-quadr-retorno-sexo');

let etapa2RetornoIdade = document.querySelector('#etapa2-retorno-idade');
let etapa2RetornoSexo = document.querySelector('#etapa2-retorno-sexo');
let etapa2ColestTotal = document.querySelector('#etapa2-colest-total');
let etapa2Hdl = document.querySelector('#etapa2-hdl');

let checkMasc = document.querySelector('#br-sex-masc');
let checkIdade = document.querySelector('#br-idade');

function retornaSexoIdade(){
    imcRetornoIdade.innerHTML = 30;
    imcRetornoSexo.innerHTML = 'Masc';

    circAbdomRetornoSexo.innerHTML = 'Masc';
    cintQuadrRetornoSexo.innerHTML = 'Masc';

    etapa2RetornoIdade.innerHTML = 45;
    etapa2RetornoSexo.innerHTML = 'Masc'

}
retornaSexoIdade();

function retornaValoresHemograma(){
    etapa2ColestTotal.value = localStorage.getItem('hemogColes');
    etapa2Hdl.value = localStorage.getItem('hemogHdl');
    
}
retornaValoresHemograma();

/*Funcão teste para marcar checkeds,
ateriormente informados*/
function verificaCheckeds(){
    let dataAtual = parseInt(new Date().toLocaleString().substring(6, 10));
    let dataInformada = parseInt((localStorage.getItem('userCadData')).toLocaleString().substring(0, 4));
    console.log('Data hj: ', dataAtual, dataInformada, (dataAtual-dataInformada));
    
    if(localStorage.getItem('userCadSexo') === 'Masculino'){
        checkMasc.checked = true;

    }else if(localStorage.getItem('userCadSexo') === 'Feminino'){
        checkMasc.checked = false;

    }
    if((dataAtual-dataInformada) > 65){
        checkIdade.checked = true;

    }else{
        checkIdade.checked = false;

    }

}
verificaCheckeds();