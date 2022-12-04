const footer = document.querySelector('.disable-footer');
const fundo1 = document.querySelector('.fundo1');
function disableFooter(){    
    if(localStorage.getItem('ConfigNivelUser') == 'experiente'){
        footer.style.display = 'none';
        fundo1.style.justifyContent = 'flex-start';
        
    }else if(localStorage.getItem('ConfigNivelUser') == 'iniciante'){
        footer.style.display = 'flex';    
        
    }else{
        footer.style.display = 'none';
        fundo1.style.justifyContent = 'flex-start';

    }
}
disableFooter();