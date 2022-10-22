const btnPasPad = document.querySelector("#btn-calcular-pas-pad");

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

btnPasPad.addEventListener("click", calcular_pas_pad);
