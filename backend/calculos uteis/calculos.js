const btnPasPad = document.querySelector("#btn-calcular-pas-pad");

 function calcular_pas_pad(){
    // console.log("COMEÇOU!");
    
    let pas = document.querySelector("#pas").value;
    let pad = document.querySelector("#pad").value;
    let result = document.querySelector("#retorno-calculo-pas-pad");
    // let sql = `SELECT * FROM usuario WHERE login='${login}' AND senha='${senha}'`;
    // console.log(sql);

if (180 <= pad || 110 <= pas )
{
    ha = 'HA estágio 3';
}
    else if( 160 <= pad < 180 || pad <= pas < 110)
    {
      ha = 'HA estágio 2';
    }
      else if (140 <= pad < 160 || 90 <= pas < 100)
    {
      ha = 'HA estágio 1';
    }
    else if (130 <= pad < 140 || 85 <= pas < 90)
    {
      ha = 'Pré-hipertensão';
    } 
    else if( 120 <= pad < 130 || 80 <= pas < 85)
  {
    ha = 'PA normal';
  }
else{  ha = 'PA ótima'} //int(pas.text) < 120 and int(pad.text) < 80

result.innerHTML = ha;
}
btnPasPad.addEventListener("click", calcular_pas_pad);

/*/=============================================================================================================================================================
/*/

