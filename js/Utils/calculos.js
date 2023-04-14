//CALCULOS DO PROJETO;

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

	if (pas >= 180 || pad >= 110) {
		ha = 'HA estágio 3';
	}
	else if (pas >= 160 || pad >= 100) {
		ha = 'HA estágio 2';
	}
	else if (pas >= 140 || pad >= 90) {
		ha = 'HA estágio 1';
	}
	else if (pas >= 130 || pad >= 85) {
		ha = 'Pré-hipertensão';
	}
	else if (pas >= 120 || pad >= 80) {
		ha = 'PA normal';
	}
	else { //pas < 120 AND pad < 80
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
	let tornozelo = parseInt(document.querySelector("#torn-braq-pas-torn").value);
	let braquial = parseInt(document.querySelector("#torn-braq-pas-bra").value);
	let result_torno_braquial;
	let result_final_tornozelobraquial = document.querySelector("#retorno-calculo-torn-braq");

	result_torno_braquial = tornozelo / braquial;

	if (result_torno_braquial < 0.9) {
		result_torno_braquial = 'Presença de Doença Obstrutiva';
	}
	else if (result_torno_braquial <= 0.99) {
		result_torno_braquial = 'Limítrofe';
	}
	else if (result_torno_braquial <= 1.4) {
		result_torno_braquial = 'Normal';
	}
	else {
		result_torno_braquial = 'Incompressibilidade arterial devido a provável calcificação';
	}
	localStorage.setItem('clas_torn_braq', result_torno_braquial);
	result_final_tornozelobraquial.innerHTML = result_torno_braquial;

}

function calcularEstratificacaoParte2() {

	let pontos = 0;
	let idade = localStorage.getItem('userCadIdade')
	let colesterol = document.querySelector('#etapa2-colest-total').value;
	let fumante = document.querySelector('#etapa2-fumante')
	let pas2 = document.querySelector('#etapa2-pa-sistol').value;
	let tratada = document.querySelector('#etapa2-tratada')
	let retorno_calculo_estratificacao = document.querySelector('#retorno-calculo-estrat3')
	let perc_risco = "..."
	if ((localStorage.getItem('userCadSexo')) === 'Masculino') {
		if ((idade > 20) && (idade <= 34)) { pontos += -9 }
		else if ((idade > 34) && (idade <= 39)) { pontos += -4 }
		else if ((idade > 40) && (idade <= 44)) { pontos += 0 }
		else if ((idade > 45) && (idade <= 49)) { pontos += 3 }
		else if ((idade > 50) && (idade <= 54)) { pontos += 6 }
		else if ((idade > 55) && (idade <= 59)) { pontos += 8 }
		else if ((idade > 60) && (idade <= 64)) { pontos += 10 }
		else if ((idade > 65) && (idade <= 69)) { pontos += 11 }
		else if ((idade > 70) && (idade < 74)) { pontos += 12; }
		else if ((idade > 75) && (idade <= 79)) { pontos += 13 }

		if (colesterol < 160) { pontos += 0 }
		else if (colesterol <= 199) {
			if (idade <= 39) { pontos += 4 }
			else if (idade <= 49) { pontos += 3 }
			else if (idade <= 59) { pontos += 2 }
			else if (idade <= 69) { pontos += 1 }
			else if (idade <= 79) { pontos += 0 }
		}
		else if (colesterol <= 239) {
			if (idade <= 39) { pontos += 7 }
			else if (idade <= 49) { pontos += 5 }
			else if (idade <= 59) { pontos += 3 }
			else if (idade <= 69) { pontos += 1 }
			else if (idade <= 79) { pontos += 0 }
		}
		else if (colesterol <= 279) {
			if (idade <= 39) { pontos += 9 }
			else if (idade <= 49) { pontos += 6 }
			else if (idade <= 59) { pontos += 4 }
			else if (idade <= 69) { pontos += 2 }
			else if (idade <= 79) { pontos += 1 }
		}
		else {
			if (idade <= 39) { pontos += 11 }
			else if (idade <= 49) { pontos += 8 }
			else if (idade <= 59) { pontos += 5 }
			else if (idade <= 69) { pontos += 3 }
			else if (idade <= 79) { pontos += 1 }
		}
		if (fumante.checked == true) {
			if (idade <= 39) { pontos += 8 }
			else if (idade <= 49) { pontos += 5 }
			else if (idade <= 59) { pontos += 3 }
			else if (idade <= 69) { pontos += 1 }
			else if (idade <= 79) { pontos += 1 }
		}

		if (pas2 < 120) { pontos += 0 }
		else if (pas2 <= 129) {
			if (tratada.checked == true) { pontos += 1 }
			else { pontos += 0 }
		}
		else if (pas2 <= 139) {
			if (tratada.checked == true) { pontos += 2 }
			else { pontos += 1 }
		}
		else if (pas2 <= 159) {
			if (tratada.checked == true) { pontos += 2 }
			else { pontos += 1 }
		}
		else {
			if (tratada.checked == true) { pontos += 3 }
			else { pontos += 2 }
		}
		if (pontos < 0) { perc_risco = 0 }
		else if (pontos <= 4) { perc_risco = 1 }
		else if (pontos <= 6) { perc_risco = 2 }
		else if (pontos == 7) { perc_risco = 3 }
		else if (pontos == 8) { perc_risco = 4 }
		else if (pontos == 9) { perc_risco = 5 }
		else if (pontos == 10) { perc_risco = 6 }
		else if (pontos == 11) { perc_risco = 8 }
		else if (pontos == 12) { perc_risco = 10 }
		else if (pontos == 13) { perc_risco = 12 }
		else if (pontos == 14) { perc_risco = 16 }
		else if (pontos == 15) { perc_risco = 20 }
		else if (pontos == 16) { perc_risco = 25 }
		else if (pontos >= 17) { perc_risco = 30 }

	} else {
		if ((idade >= 20) && (idade <= 34)) { pontos += -7 }
		else if ((idade > 34) && (idade <= 39)) { pontos += -3 }
		else if ((idade > 40) && (idade <= 44)) { pontos += 0 }
		else if ((idade > 45) && (idade <= 49)) { pontos += 3 }
		else if ((idade > 50) && (idade <= 54)) { pontos += 6 }
		else if ((idade > 55) && (idade <= 59)) { pontos += 8 }
		else if ((idade > 60) && (idade <= 64)) { pontos += 10 }
		else if ((idade > 65) && (idade <= 69)) { pontos += 12 }
		else if ((idade > 70) && (idade < 74)) { pontos += 14 }
		else if ((idade > 75) && (idade <= 79)) { pontos += 16 }

		if (colesterol < 160) { pontos += 0 }
		else if (colesterol <= 199) {
			if (idade <= 39) { pontos += 4 }
			else if (idade <= 49) { pontos += 3 }
			else if (idade <= 59) { pontos += 2 }
			else if (idade <= 69) { pontos += 1 }
			else if (idade <= 79) { pontos += 1 }
		}
		else if (colesterol <= 239) {
			if (idade <= 39) { pontos += 8 }
			else if (idade <= 49) { pontos += 6 }
			else if (idade <= 59) { pontos += 4 }
			else if (idade <= 69) { pontos += 2 }
			else if (idade <= 79) { pontos += 1 }
		}
		else if (colesterol <= 279) {
			if (idade <= 39) { pontos += 11 }
			else if (idade <= 49) { pontos += 8 }
			else if (idade <= 59) { pontos += 5 }
			else if (idade <= 69) { pontos += 3 }
			else if (idade <= 79) { pontos += 2 }
		}
		else {
			if (idade <= 39) { pontos += 13 }
			else if (idade <= 49) { pontos += 10 }
			else if (idade <= 59) { pontos += 7 }
			else if (idade <= 69) { pontos += 4 }
			else if (idade <= 79) { pontos += 2 }
		}
		if (fumante.checked == true) {
			if (idade <= 39) { pontos += 9 }
			else if (idade <= 49) { pontos += 7 }
			else if (idade <= 59) { pontos += 4 }
			else if (idade <= 69) { pontos += 2 }
			else if (idade <= 79) { pontos += 1 }
		}

		if (pas2 < 120) { pontos += 0 }
		else if (pas2 <= 129) {
			if (tratada.checked == true) { pontos += 3 }
			else { pontos += 1 }
		}
		else if (pas2 <= 139) {
			if (tratada.checked == true) { pontos += 4 }
			else { pontos += 2 }
		}
		else if (pas2 <= 159) {
			if (tratada.checked == true) { pontos += 5 }
			else { pontos += 3 }
		}
		else {
			if (tratada.checked == true) { pontos += 6 }
			else { pontos += 4 }
		}
		if (pontos < 9) { perc_risco = 0 }
		else if (pontos <= 12) { perc_risco = 1 }
		else if (pontos <= 14) { perc_risco = 2 }
		else if (pontos == 15) { perc_risco = 3 }
		else if (pontos == 16) { perc_risco = 4 }
		else if (pontos == 17) { perc_risco = 5 }
		else if (pontos == 18) { perc_risco = 6 }
		else if (pontos == 19) { perc_risco = 8 }
		else if (pontos == 20) { perc_risco = 11 }
		else if (pontos == 21) { perc_risco = 14 }
		else if (pontos == 22) { perc_risco = 17 }
		else if (pontos == 23) { perc_risco = 22 }
		else if (pontos == 24) { perc_risco = 27 }
		else if (pontos >= 25) { perc_risco = 30 }
	}
	console.log(pontos, idade);

	if (perc_risco < 10) {
		retorno_calculo_estratificacao.innerHTML = 'BAIXO RISCO'
		localStorage.setItem('clas_estrat', 'BAIXO RISCO')
	}

	else if (perc_risco < 20) {
		retorno_calculo_estratificacao.innerHTML = 'RISCO MODERADO'
		localStorage.setItem('clas_estrat', 'RISCO MODERADO')
	}
	else {
		retorno_calculo_estratificacao.innerHTML = 'ALTO RISCO'
		localStorage.setItem('clas_estrat', 'ALTO RISCO')
	}
}
btnPasPad.addEventListener("click", calcular_pas_pad);
btnCirAbd.addEventListener("click", classif_circ_abdominal);
btnCintQuad.addEventListener("click", cint_quadril);
btnTornBraq.addEventListener("click", torno_brac);
btnEstrat2Calcular.addEventListener("click", calcularEstratificacaoParte2);
