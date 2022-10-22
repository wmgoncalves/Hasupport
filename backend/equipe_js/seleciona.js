function selecionarEquipe(equipe){
    let idEquipe = equipe.value;
    // console.log(idEquipe);
    localStorage.setItem('id_equipe', idEquipe);
    window.location = "../pages/alt_equipe.html";
}