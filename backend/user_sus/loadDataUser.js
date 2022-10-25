import { loadUserSus } from '../connection/userSus_db.js';

const carUserSus = localStorage.getItem('cart_sus');

window.onload = async function(){
    let result = await loadUserSus(carUserSus);

    let data_nasc = result[0].data_nasc.getFullYear() + '-' + (result[0].data_nasc.getMonth()+1) + '-' + result[0].data_nasc.getDate();

    // console.log(result[0].sexo);
    // console.log(data_nasc);

    localStorage.setItem('userCadSexo', result[0].sexo);
    localStorage.setItem('userCadData', data_nasc);
}