const btnClean = document.querySelector('#clean-localstorage');

function cleanStorage(){
    console.log('Antes: ', localStorage.getItem('pas'));
    localStorage.clear();
    console.log('Depois: ', localStorage.getItem('pas'));
    
}

btnClean.addEventListener("click", cleanStorage);
