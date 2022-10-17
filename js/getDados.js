const btn = document.querySelector('#teste');

function carrega(){
    console.log(localStorage.getItem('pas'), localStorage.getItem('pad'))
    console.log(localStorage.getItem('peso'), localStorage.getItem('altura'))
   
}

btn.addEventListener("click", carrega);
