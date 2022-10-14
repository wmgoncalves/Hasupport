let dados = [
    {
        nome: '',
        idade: null
    }
];

function insertDados(){
    dados[0].nome = localStorage.getItem('nome');
    dados[0].idade = localStorage.getItem('idade');

}
insertDados()

export default dados;
