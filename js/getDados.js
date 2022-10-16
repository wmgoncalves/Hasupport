const btn = document.querySelector('#teste');

function carrega(){
    console.log(localStorage.getItem('pas'), localStorage.getItem('pad'))
   
}

btn.addEventListener("click", carrega);
