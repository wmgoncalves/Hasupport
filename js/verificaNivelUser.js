
function disableFooter(){
    const footer = document.querySelector('.disable-footer');
    if(localStorage.getItem('ConfigNivelUser') == 'experiente'){
        footer.style.display = 'none';

    }else{
        footer.style.display = 'flex';

    }
}
disableFooter();