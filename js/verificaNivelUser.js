function disableConfigNiveis(){    
    const btnBusca = document.querySelector('.disable-btn-busca');
    const btnConsulta = document.querySelector('.disable-btn-consulta');
    const btnProtocol = document.querySelector('.disable-btn-protocol');
    const nivelUserIni = document.querySelector('.nivel-user-ini');
    const nivelUserExper = document.querySelector('.nivel-user-exper');
    if((localStorage.getItem('ConfigNivelUser') == 'experiente') || (localStorage.getItem('ehAdmin') == 'ehAdmin')){
        btnBusca.style.display = 'block';
        btnConsulta.style.display = 'block';
        btnProtocol.style.display = 'block';
        nivelUserIni.style.display = 'none';
        nivelUserExper.style.display = 'none';
        console.log('User experiente');

    }else if(localStorage.getItem('ConfigNivelUser') == 'iniciante'){
        btnBusca.style.display = 'block';
        btnConsulta.style.display = 'block';
        nivelUserIni.style.display = 'none';
        nivelUserExper.style.display = 'none';
        console.log('User iniciante');

    }else{
        nivelUserIni.style.display = 'block';
        nivelUserExper.style.display = 'block';
        btnBusca.style.display = 'none';
        btnConsulta.style.display = 'none';
        btnProtocol.style.display = 'none';
        console.log('User não informado');

    }
}
disableConfigNiveis();