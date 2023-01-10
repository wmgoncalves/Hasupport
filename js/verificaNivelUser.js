function disableConfigNiveis(){    
    const btnBusca = document.querySelector('.disable-btn-busca');
    const btnConsulta = document.querySelector('.disable-btn-consulta');
    const btnProtocol = document.querySelector('.disable-btn-protocol');
    const nivelUserIni = document.querySelector('.nivel-user-ini');
    const nivelUserExper = document.querySelector('.nivel-user-exper');
    const btnLeft = document.querySelector('.disable-btn-left');
    const btnRelatorio = document.querySelector('.disable-btn-relatorio');
    
    if(localStorage.getItem('ehAdmin') == 'ehAdmin'){
        btnBusca.style.display = 'none';
        btnConsulta.style.display = 'none';
        btnProtocol.style.display = 'block';
        btnRelatorio.style.display = 'none';
        nivelUserIni.style.display = 'none';
        nivelUserExper.style.display = 'none';
        btnLeft.style.cssText = 'display: flex !important';
        console.log('User experiente/ admin');

    }else{
        if(localStorage.getItem('ConfigNivelUser') == 'experiente'){
            btnBusca.style.display = 'block';
            btnConsulta.style.display = 'block';
            btnProtocol.style.display = 'block';
            btnRelatorio.style.display = 'block';
            nivelUserIni.style.display = 'none';
            nivelUserExper.style.display = 'none';
            btnLeft.style.cssText = 'display: flex !important';
            console.log('User experiente');
    
        }else if(localStorage.getItem('ConfigNivelUser') == 'iniciante'){
            btnBusca.style.display = 'block';
            btnConsulta.style.display = 'block';
            btnRelatorio.style.display = 'block';
            nivelUserIni.style.display = 'none';
            nivelUserExper.style.display = 'none';
            btnLeft.style.cssText = 'display: none !important';
            console.log('User iniciante');
    
        }else{
            btnBusca.style.display = 'none';
            btnConsulta.style.display = 'none';
            btnProtocol.style.display = 'none';
            btnRelatorio.style.display = 'none';
            nivelUserIni.style.display = 'block';
            nivelUserExper.style.display = 'block';
            btnLeft.style.cssText = 'display: none !important';
            console.log('User não informado');
    
        }
    }
}
disableConfigNiveis();