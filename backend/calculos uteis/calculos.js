const btnPasPad = document.querySelector("#btn-calcular-pas-pad");

 function calcular_pas_pad(){
    // console.log("COMEÇOU!");
    
    let pas = document.querySelector("#pas").value;
    let pad = document.querySelector("#pad").value;
    let result = document.querySelector("#retorno-calculo-pas-pad");
    // let sql = `SELECT * FROM usuario WHERE login='${login}' AND senha='${senha}'`;
    // console.log(sql);

if (180 <= pas || 110 <= pad )
{
    ha = 'HA estágio 3';
}
    else if( 160 <= pas < 180 || pad <= pad< 110)
    {
      ha = 'HA estágio 2';
    }
      else if (140 <= pas < 160 || 90 <= pad< 100)
    {
      ha = 'HA estágio 1';
    }
    else if (130 <= pas < 140 || 85 <= pad < 90)
    {
      ha = 'Pré-hipertensão';
    } 
    else if( 120 <= pas < 130 || 80 <= pad < 85)
  {
    ha = 'PA normal';
  }
else{  ha = 'PA ótima'} //int(pas.text) < 120 and int(pad.text) < 80

result.innerHTML = ha;
}
btnPasPad.addEventListener("click", calcular_pas_pad);
