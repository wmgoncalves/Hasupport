const btnCadastrar = document.querySelector('#cadastrar');

function insertNovoUsuario(){
    let userCadNome = document.querySelector('#nome').value;
    let userCadData = document.querySelector('#dataNasc').value;
    let userCadCpf = document.querySelector('#cpf').value;
    let userCadCartao = document.querySelector('#cartSus').value;
    let userCadAgente = document.querySelector('#agenteSus').value;
    let userCadMasc = document.querySelector('#masc');
    let userCadFem = document.querySelector('#femi');
    
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