const btnLogout = document.querySelector('.btn-logout');

function logoutClean(){
    localStorage.clear();
    console.log('Logout do sistema!!');

}
btnLogout.addEventListener('click', logoutClean);