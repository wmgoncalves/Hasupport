const footer = document.querySelector('.disable-footer');
const fundo1 = document.querySelector('.fundo1');
const btnLeft = document.querySelector('.disable-btn-left');

function disableFooter(){    
    if((localStorage.getItem('ConfigNivelUser') == 'experiente') || (localStorage.getItem('ehAdmin') == 'ehAdmin')){
        footer.style.display = 'none';
        fundo1.style.justifyContent = 'flex-start';
        btnLeft.style.cssText = 'display: flex !important';
        
    }else if(localStorage.getItem('ConfigNivelUser') == 'iniciante'){
        footer.style.display = 'flex';
        btnLeft.style.cssText = 'display: none !important';
        
    }else{
        footer.style.display = 'none';
        fundo1.style.justifyContent = 'flex-start';
        btnLeft.style.cssText = 'display: none !important';

    }
}
disableFooter();