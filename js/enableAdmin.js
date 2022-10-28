function enabledAdmin(){
    let enabledCaseAdmin = document.querySelector('#enabled-case-admin');
    //enabledCaseAdmin.style.display = 'block';
    if(localStorage.getItem('ehAdmin') == 'ehAdmin'){
        enabledCaseAdmin.style.display = 'block';
        console.log('É admin: ', localStorage.getItem('ehAdmin'));
        
    }else if(localStorage.getItem('ehAdmin') == 'naoEhAdmin'){
        enabledCaseAdmin.style.display = 'none';
        console.log('Não é admin: ', localStorage.getItem('ehAdmin'));
        
    }
}
enabledAdmin();