let imcRetornoSexo = document.querySelector('#imc-retorno-sexo');
let imcRetornoIdade = document.querySelector('#imc-retorno-idade');

let circAbdomRetornoSexo = document.querySelector('#circ-abdom-retorno-sexo');
let cintQuadrRetornoSexo = document.querySelector('#cint-quadr-retorno-sexo');

let etapa2RetornoIdade = document.querySelector('#etapa2-retorno-idade');
let etapa2RetornoSexo = document.querySelector('#etapa2-retorno-sexo');
let etapa2ColestTotal = document.querySelector('#etapa2-colest-total');
let etapa2Hdl = document.querySelector('#etapa2-hdl');

let checkMasc = document.querySelector('#br-sex-masc');

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
    if(localStorage.getItem('hemogHdl') == 'Masculino'){
        checkMasc.checked = true;

    }else{
        checkMasc.checked = false;

    }

}
verificaCheckeds();