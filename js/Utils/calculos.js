const btnPasPad = document.querySelector("#btn-calcular-pas-pad");
const btnCirAbd = document.querySelector("#btn-circ-abdom-calcular");
const btnCintQuad = document.querySelector("#btn-cint-quadr-calcular");
const btnTornBraq = document.querySelector("#btn-torn-braq-calcular");
const btnEstrat2Calcular = document.querySelector('#btn-estrat2-calcular');

function calcular_pas_pad() {
	let pas = document.querySelector("#pas").value;
	let pad = document.querySelector("#pad").value;
	let result = document.querySelector("#retorno-calculo-pas-pad");

	let ha = 'Valor indeterminado';

	if (180 <= pas || 110 <= pad) {
		ha = 'HA estágio 3';
	}
	else if (160 <= pas < 180 || pad <= pad < 110) {
		ha = 'HA estágio 2';
	}
	else if (140 <= pas < 160 || 90 <= pad < 100) {
		ha = 'HA estágio 1';
	}
	else if (130 <= pas < 140 || 85 <= pad < 90) {
		ha = 'Pré-hipertensão';
	}
	else if (120 <= pas < 130 || 80 <= pad < 85) {
		ha = 'PA normal';
	}
	else { //pas < 120 and pad < 80
		ha = 'PA ótima'
	}

	localStorage.setItem('clas_ha', ha);
	result.innerHTML = ha;
}

/*
function calculo_imc()
{
	let peso = document.querySelector("#imc-peso").value;
	let altura = document.querySelector("#imc-altura").value;
	let imc = peso/(altura**2);
	let resultado_imc = document.querySelector("#retorno-calculo-imc");
	resultado_imc.innerHTML = imc;
}*/

function classif_circ_abdominal() {

	let sexo = localStorage.getItem('userCadSexo');
	let circ_abdom = document.querySelector("#circ-abdom-cm").value;
	let classificacao;
	let resultado_circ = document.querySelector("#retorno-calculo-circ-abdom");
	if (sexo == 'Masculino') {
		if (circ_abdom < 94) {
			classificacao = 'Normal';
		}
		else if (circ_abdom < 102) {
			classificacao = 'Risco Elevado';
		}
		else {
			classificacao = 'Risco Muito Elevado';
		}
	}
	else {
		if (circ_abdom < 80) {
			classificacao = 'Normal';
		}
		else if (circ_abdom < 88) {
			classificacao = 'Risco Elevado';
		}
		else {
			classificacao = 'Risco Muito Elevado';
		}
	}
	localStorage.setItem('clas_abdo', classificacao);
	resultado_circ.innerHTML = classificacao;
}

function cint_quadril() {
	let circun_abdmon = document.querySelector("#cint-quadr-abdom-cm").value;
	let circun_quadril = document.querySelector("#cint-quadr-quadr-cm").value;
	let result;
	let result_final = document.querySelector("#retorno-calculo-cint-quadr");
	let sexo = localStorage.getItem('userCadSexo');

	result = circun_abdmon / circun_quadril

	if (sexo == 'Masculino') {
		if (result > 0.9) {
			result = 'Risco elevado';
		}
		else {
			result = 'Normal';
		}
	}
	else {
		if (result > 0.85) {
			result = 'Risco elevado';
		}
		else {
			result = 'Normal';
		}

	}
	localStorage.setItem('clas_cint_quad', result);
	result_final.innerHTML = result;
}

function torno_brac() {
	let tornozelo = document.querySelector("#torn-braq-pas-torn");
	let braquial = document.querySelector("#torn-braq-pas-bra");
	let result_torno_braquial;
	let result_final_tornozelobraquial = document.querySelector("#retorno-calculo-torn-braq");

	result_torno_braquial = tornozelo / braquial;

	if (result_torno_braquial < 0.9) {
		result_torno_braquial = 'Presença de Doença Obstrutiva';
	}
	else if (result_torno_braquial <= 0.99) {
		result_torno_braquial = 'Limítrofes';
	}
	else if (result_torno_braquial <= 1.4) {
		result_torno_braquial = 'Normais';
	}
	else {
		result_torno_braquial = 'Incompressibilidade arterial devido a provável calcificação';
	}
	localStorage.setItem('clas_torn_braq', result_torno_braquial);
	result_final_tornozelobraquial.innerHTML = result_torno_braquial;

}

function calcularEstratificacaoParte2(){
	/*
	let pontos = 0;
	let idade = localStorage.getItem('userCadIdade')
	
	if((localStorage.getItem('userCadSexo')) === 'Masculino'){
		if((idade > 20)&&(idade <= 34)){
			pontos = -9;

		}else if((idade > 34)&&(idade <= 39)){
			pontos = -4;

		}else if((idade > 40)&&(idade <= 44)){
			pontos = 0;

		}else if((idade > 45)&&(idade <= 49)){
			pontos = 3;

		}else if((idade > 50)&&(idade <= 54)){
			pontos = 6;

		}else if((idade > 55)&&(idade <= 59)){
			pontos = 8;

		}else if((idade > 60)&&(idade <= 64)){
			pontos = 10;

		}else if((idade > 65)&&(idade <= 69)){
			pontos = 11;

		}else if((idade > 70)&&(idade < 74)){
			pontos = 12;

		}else if((idade > 75)&&(idade <= 79)){
			pontos = 13;

		}
	}else{
		if((idade >= 20)&&(idade <= 34)){
			pontos = -7;

		}else if((idade > 34)&&(idade <= 39)){
			pontos = -3;

		}else if((idade > 40)&&(idade <= 44)){
			pontos = 0;

		}else if((idade > 45)&&(idade <= 49)){
			pontos = 3;

		}else if((idade > 50)&&(idade <= 54)){
			pontos = 6;

		}else if((idade > 55)&&(idade <= 59)){
			pontos = 8;

		}else if((idade > 60)&&(idade <= 64)){
			pontos = 10;

		}else if((idade > 65)&&(idade <= 69)){
			pontos = 12;

		}else if((idade > 70)&&(idade < 74)){
			pontos = 14;

		}else if((idade > 75)&&(idade <= 79)){
			pontos = 16;
			
		}
	}
	console.log(pontos, idade);
	*/
}
btnPasPad.addEventListener("click", calcular_pas_pad);
btnCirAbd.addEventListener("click", classif_circ_abdominal);
btnCintQuad.addEventListener("click", cint_quadril);
btnTornBraq.addEventListener("click", torno_brac);
btnEstrat2Calcular.addEventListener("click", calcularEstratificacaoParte2);