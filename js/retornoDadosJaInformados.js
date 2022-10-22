let imcRetornoSexo = document.querySelector('#imc-retorno-sexo');
let imcRetornoIdade = document.querySelector('#imc-retorno-idade');
let circAbdomRetornoSexo = document.querySelector('#circ-abdom-retorno-sexo');
let cintQuadrRetornoSexo = document.querySelector('#cint-quadr-retorno-sexo');

function retornaSexoIdade(){
    imcRetornoIdade.innerHTML = 30;;
    imcRetornoSexo.innerHTML = 'Masc';

    circAbdomRetornoSexo.innerHTML = 'Masc';
    cintQuadrRetornoSexo.innerHTML = 'Masc';
    
}
retornaSexoIdade();