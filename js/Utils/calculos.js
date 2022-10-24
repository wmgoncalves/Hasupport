const btnPasPad = document.querySelector("#btn-calcular-pas-pad");
const btnCirAbd = document.querySelector("#btn-circ-abdom-calcular");
const btnCintQuad = document.querySelector("#btn-cint-quadr-calcular");
const btnTornBraq = document.querySelector("#btn-torn-braq-calcular");

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
	result.innerHTML = ha;
}



//=========================================================================================================

//  Calculo IMC //

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
			self.clas_quadril = 'Normal';
		}

	}
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
	result_final_tornozelobraquial.innerHTML = result_torno_braquial;

}
btnPasPad.addEventListener("click", calcular_pas_pad);
btnCirAbd.addEventListener("click", classif_circ_abdominal);
btnCintQuad.addEventListener("click", cint_quadril);
btnTornBraq.addEventListener("click", torno_brac);