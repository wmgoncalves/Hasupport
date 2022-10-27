const enabledCaseAdmin = document.querySelector('.enabled-case-admin');

function enabledAdmin(){
    //if((localStorage.getItem('ehAdmin') != null) || (localStorage.getItem('ehAdmin') != 'vazio'))
    if(true){
        enabledCaseAdmin.style.display = 'block';
        console.log('É admin');
        
    }else{
        enabledCaseAdmin.style.display = 'none';
        console.log('Não é admin');
        
    }
}
setTimeout(function(){
    enabledAdmin();

}, 2000);