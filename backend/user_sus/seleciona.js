function selecionarUserSus(userSus){
    let idUserSus = userSus.value;
    // console.log(cartSus);
    localStorage.setItem('idUserSus', idUserSus);
    if(localStorage.getItem('ConfigNivelUser') == 'experiente'){
        window.location = "../pages/menu1.html";

    }else if(localStorage.getItem('ConfigNivelUser') == 'iniciante'){
        window.location = "../pages/pageGuiaEntre.html";
        
    }else{
        window.location = "../pages/pageGuiaEntre.html";

    }
}