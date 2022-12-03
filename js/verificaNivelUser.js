
function disableFooter(){
    const footer = document.querySelector('.disable-footer');
    if(localStorage.getItem('ConfigNivelUser') == 'experiente'){
        footer.style.display = 'none';

    }else{
        footer.style.display = 'flex';

    }
}
disableFooter();

function disableBtnLeft(){
    const btnLeft = document.querySelector('.disable-btn-left');
    if(localStorage.getItem('ConfigNivelUser') == null){
        btnLeft.style.display = 'none';

    }else{
        btnLeft.style.display = 'flex';

    }
}
disableBtnLeft();