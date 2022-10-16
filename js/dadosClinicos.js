let dados = [
    {
        nome: '',
        idade: null,
        peso: null,
        altura: null,
        sexo: '',
        pas: null,
        pad: null
    }
];

function insertDados(){
    dados[0].nome = localStorage.getItem('nome');
    dados[0].idade = localStorage.getItem('idade');
    dados[0].pas = localStorage.getItem('pas');
    dados[0].pad = localStorage.getItem('pad');

    console.log('Sucesso Cad Dados Clinicos');
    console.log(dados[0].pas, dados[0].pad);

}

export default {dados, insertDados};
