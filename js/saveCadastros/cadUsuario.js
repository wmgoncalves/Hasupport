const btnCadastrar = document.querySelector('#cadastrar');

function insertNovoUsuario(){
    let userCadNome = document.querySelector('#user-cad-nome').value;
    let userCadData = document.querySelector('#user-cad-data').value;
    let userCadCpf = document.querySelector('#user-cad-cpf').value;
    let userCadCartao = document.querySelector('#user-cad-cartao').value;
    let userCadAgente = document.querySelector('#user-cad-agente').value;
    let userCadMasc = document.querySelector('#user-cad-masc');
    let userCadFem = document.querySelector('#user-cad-fem');
    
    if(userCadMasc.checked == true){
        localStorage.setItem('userCadSexo', userCadMasc.value);
        
    }else if(userCadFem.checked == true){
        localStorage.setItem('userCadSexo', userCadFem.value);

    }

    localStorage.setItem('userCadNome', userCadNome);
    localStorage.setItem('userCadData', userCadData);
    localStorage.setItem('userCadCpf', userCadCpf);
    localStorage.setItem('userCadCartao', userCadCartao);
    localStorage.setItem('userCadAgente', userCadAgente);

    console.log('Sucesso Usuario:', userCadNome, userCadData,
    userCadCpf, userCadCartao, userCadAgente, localStorage.getItem('userCadSexo'));
    
}

btnCadastrar.addEventListener("click", insertNovoUsuario);