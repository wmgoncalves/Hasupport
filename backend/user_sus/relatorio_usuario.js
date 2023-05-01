const btniniciar_atend = document.querySelector("#iniciar-atend");
const btnrelatorio_consult = document.querySelector("#relatorio-ulti");
function iniciar_atendimento() {
  window.location = "../pages/menu2.html";
}
function Ultima_consulta() {
  window.location = "../pages/relatorio_por_nome.html";
}
btniniciar_atend.addEventListener("click", iniciar_atendimento);
btnrelatorio_consult.addEventListener("click", Ultima_consulta);