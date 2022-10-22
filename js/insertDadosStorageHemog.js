const btnHemogCalcular = document.querySelector('#btn-hemog-calcular');

function insertHemograma(){
    let hemogHemac = document.querySelector('#hemog-hemac').value;
    let hemogHemogl = document.querySelector('#hemog-hemogl').value;
    let hemogHemat = document.querySelector('#hemog-hemat').value;
    let hemogHeuc = document.querySelector('#hemog-leuc').value;
    let hemogHinf = document.querySelector('#hemog-linf').value;
    let hemogHlaq = document.querySelector('#hemog-plaq').value;
    let hemogHlic = document.querySelector('#hemog-glic').value;
    let hemogColes = document.querySelector('#hemog-coles').value;
    let hemogHdl = document.querySelector('#hemog-hdl').value;
    let hemogTrig = document.querySelector('#hemog-trig').value;
    let hemogHemogGlic = document.querySelector('#hemog-hemog-glic').value;
    let hemogCreat = document.querySelector('#hemog-creat').value;
    let hemogPotass = document.querySelector('#hemog-potass').value;
    let hemogEqu = document.querySelector('#hemog-equ').value;
    let hemogMicroa = document.querySelector('#hemog-microa').value;
    let hemogAlbum = document.querySelector('#hemog-album').value;
    let hemogAcid = document.querySelector('#hemog-acid').value;
    let hemogUreia = document.querySelector('#hemog-ureia').value;
    let hemogTgo = document.querySelector('#hemog-tgo').value;
    let hemogTgp = document.querySelector('#hemog-tgp').value;
        
    localStorage.setItem('hemogHemac', hemogHemac);
    localStorage.setItem('hemogHemogl', hemogHemogl);
    localStorage.setItem('hemogHemat', hemogHemat);
    localStorage.setItem('hemogHeuc', hemogHeuc);
    localStorage.setItem('hemogHinf', hemogHinf);
    localStorage.setItem('hemogHlaq', hemogHlaq);
    localStorage.setItem('hemogHlic', hemogHlic);
    localStorage.setItem('hemogColes', hemogColes);
    localStorage.setItem('hemogHdl', hemogHdl);
    localStorage.setItem('hemogTrig', hemogTrig);
    localStorage.setItem('hemogHemogGlic', hemogHemogGlic);
    localStorage.setItem('hemogCreat', hemogCreat);
    localStorage.setItem('hemogPotass', hemogPotass);
    localStorage.setItem('hemogEqu', hemogEqu);
    localStorage.setItem('hemogMicroa', hemogMicroa);
    localStorage.setItem('hemogAlbum', hemogAlbum);
    localStorage.setItem('hemogAcid', hemogAcid);
    localStorage.setItem('hemogUreia', hemogUreia);
    localStorage.setItem('hemogTgo',hemogTgo);
    localStorage.setItem('hemogTgp', hemogTgp);

    console.log('Sucesso Hemograma:', hemogHemac, hemogHemogl, hemogHemat, hemogHeuc,
         hemogHinf, hemogHlaq, hemogHlic, hemogColes, hemogHdl, hemogTrig,
         hemogHemogGlic, hemogCreat, hemogPotass, hemogEqu, hemogMicroa, hemogAlbum,
         hemogAcid, hemogUreia,hemogTgo, hemogTgp);

    let hemogramaSalvo = document.querySelector('#retorno-salvo-hemograma');
    hemogramaSalvo.innerHTML = 'Salvo com sucesso';
    hemogramaSalvo.style.color = 'green';

}

btnHemogCalcular.addEventListener("click", insertHemograma);