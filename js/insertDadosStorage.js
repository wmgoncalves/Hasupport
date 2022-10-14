function insertDados(){
    var nome = document.querySelector('#nome').value;
    var idade = document.querySelector('#idade').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('idade', idade);

}