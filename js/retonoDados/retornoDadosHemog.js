function retornaDadosHemograma(){
    let hemogHemac = document.querySelector('#hemog-hemac');
    let hemogHemogl = document.querySelector('#hemog-hemogl');
    let hemogHemat = document.querySelector('#hemog-hemat');
    let hemogHeuc = document.querySelector('#hemog-leuc');
    let hemogHinf = document.querySelector('#hemog-linf');
    let hemogHlaq = document.querySelector('#hemog-plaq');
    let hemogHlic = document.querySelector('#hemog-glic');
    let hemogColes = document.querySelector('#hemog-coles');
    let hemogHdl = document.querySelector('#hemog-hdl');
    let hemogTrig = document.querySelector('#hemog-trig');
    let hemogHemogGlic = document.querySelector('#hemog-hemog-glic');
    let hemogCreat = document.querySelector('#hemog-creat');
    let hemogPotass = document.querySelector('#hemog-potass');
    let hemogEqu = document.querySelector('#hemog-equ');
    let hemogMicroa = document.querySelector('#hemog-microa');
    let hemogAlbum = document.querySelector('#hemog-album');
    let hemogAcid = document.querySelector('#hemog-acid');
    let hemogUreia = document.querySelector('#hemog-ureia');
    let hemogTgo = document.querySelector('#hemog-tgo');
    let hemogTgp = document.querySelector('#hemog-tgp');

    hemogHemac.value = localStorage.getItem('hemogHemac');
    hemogHemogl.value = localStorage.getItem('hemogHemogl');
    hemogHemat.value = localStorage.getItem('hemogHemat');
    hemogHeuc.value = localStorage.getItem('hemogHeuc');
    hemogHinf.value = localStorage.getItem('hemogHinf');
    hemogHlaq.value = localStorage.getItem('hemogHlaq');
    hemogHlic.value = localStorage.getItem('hemogHlic');
    hemogColes.value = localStorage.getItem('hemogColes');
    hemogHdl.value = localStorage.getItem('hemogHdl');
    hemogTrig.value = localStorage.getItem('hemogTrig');
    hemogHemogGlic.value = localStorage.getItem('hemogHemogGlic');
    hemogCreat.value = localStorage.getItem('hemogCreat');
    hemogPotass.value = localStorage.getItem('hemogPotass');
    hemogEqu.value = localStorage.getItem('hemogEqu');
    hemogMicroa.value =  localStorage.getItem('hemogMicroa');
    hemogAlbum.value = localStorage.getItem('hemogAlbum');
    hemogAcid.value = localStorage.getItem('hemogAcid');
    hemogUreia.value = localStorage.getItem('hemogUreia');
    hemogTgo.value = localStorage.getItem('hemogTgo');
    hemogTgp.value = localStorage.getItem('hemogTgp');

}
retornaDadosHemograma();