let imcRetornoSexo = document.querySelector('#imc-retorno-sexo');
let imcRetornoIdade = document.querySelector('#imc-retorno-idade');

let circAbdomRetornoSexo = document.querySelector('#circ-abdom-retorno-sexo');
let cintQuadrRetornoSexo = document.querySelector('#cint-quadr-retorno-sexo');

let etapa2RetornoIdade = document.querySelector('#etapa2-retorno-idade');
let etapa2RetornoSexo = document.querySelector('#etapa2-retorno-sexo');
let etapa2ColestTotal = document.querySelector('#etapa2-colest-total');
let etapa2Hdl = document.querySelector('#etapa2-hdl');

let tornBraqPasBra = document.querySelector('#torn-braq-pas-bra');

let checkMasc = document.querySelector('#br-sex-masc');
let checkIdade = document.querySelector('#br-idade');

function retornaValoresHemograma(){
    etapa2ColestTotal.value = localStorage.getItem('hemogColes');
    etapa2Hdl.value = localStorage.getItem('hemogHdl');
    
}
retornaValoresHemograma();



/*Funcão para marcar checkeds, ateriormente informados*/
function verificaCheckeds(){
    let dataAtual = parseInt(new Date().toLocaleString().substring(6, 10));
    let dataInformada = 0;
    //dataInformada = parseInt((localStorage.getItem('userCadData')).toLocaleString().substring(0, 4));
    if((localStorage.getItem('userCadData')) == null){
        dataInformada = parseInt(new Date().toLocaleString().substring(6, 10));
        
    }else{
        dataInformada = parseInt((localStorage.getItem('userCadData')).toLocaleString().substring(0, 4));

    }
    
    /*Salva idade em localstorage*/
    localStorage.setItem('userCadIdade', (dataAtual-dataInformada));
    
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

function retornaSexoIdade(){
    imcRetornoIdade.innerHTML = localStorage.getItem('userCadIdade');
    imcRetornoSexo.innerHTML = localStorage.getItem('userCadSexo');

    circAbdomRetornoSexo.innerHTML = localStorage.getItem('userCadSexo');
    cintQuadrRetornoSexo.innerHTML = localStorage.getItem('userCadSexo');

    etapa2RetornoIdade.innerHTML = localStorage.getItem('userCadIdade');
    etapa2RetornoSexo.innerHTML = localStorage.getItem('userCadSexo');

}
retornaSexoIdade();

/*Função que preenche input anteriormente informados*/
function retornaDadosInputs(){
    let pas = document.querySelector('#pas');
    let pad = document.querySelector('#pad');
    let peso = document.querySelector('#imc-peso');
    let altura = document.querySelector('#imc-altura');
    let brHipert = document.querySelector('#br-hipert');
 
    pas.value = localStorage.getItem('pas');
    pad.value = localStorage.getItem('pad');
    peso.value = localStorage.getItem('peso');
    altura.value = localStorage.getItem('altura');

    if((localStorage.getItem('brHipert') == null) || (localStorage.getItem('brHipert') == 'vazio')){
        console.log('false', localStorage.getItem('brHipert'));
        brHipert.checked = false;
        
    }else{
        console.log('true', localStorage.getItem('brHipert'));
        brHipert.checked = true;

    }

}
retornaDadosInputs();