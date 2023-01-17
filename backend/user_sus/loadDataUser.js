import { loadUserSus } from '../connection/userSus_db.js';

const idUserSus = localStorage.getItem('idUserSus');

window.onload = async function () {
    let result = await loadUserSus(idUserSus);

    //console.log(result[0].data_nasc);

    let data_nasc = result[0].data_nasc.getFullYear() + '-' + (result[0].data_nasc.getMonth() + 1) + '-' + result[0].data_nasc.getDate();

    // console.log(result[0].sexo);
    // console.log(data_nasc);

    localStorage.setItem('userCadSexo', result[0].sexo);
    localStorage.setItem('userCadData', data_nasc);
}