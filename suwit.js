function pilihancomp(){
    const comp = Math.random();
    if(comp<=0.39) return 'GUNTING';
    if(comp>0.39 && comp<0.75) return 'BATU';
    return 'KERTAS'
}

const komputer = document.getElementById('pilihancomputer')

const kertas = document.getElementById('kertas');

const outputt = document.getElementById('hasiloutput');

kertas.addEventListener('click',function(){
    let compt = pilihancomp();
    let hasil = ''
    if(compt === 'KERTAS'){
        hasil = 'SERI!';
    }else if(compt === 'BATU'){
        hasil ='MENANG!';
    }else{
        hasil = 'KALAH!';
    }
    komputer.innerHTML = compt;
    outputt.innerHTML = hasil;
})

const gunting = document.getElementById('gunting');
gunting.addEventListener('click',function(){
    let compt = pilihancomp();
    let ahsil = '';
    if(compt === 'GUNTING'){
        hasil = 'SERI!';
    }else if(compt === 'BATU'){
        hasil = 'KALAH!';
    }else{
        hasil = 'MENANG!';
    }
    komputer.innerHTML = compt;
    outputt.innerHTML = hasil;
})


const batu = document.getElementById('batu');


batu.addEventListener('click',function(){
    let compt = pilihancomp();
    let hasil = '';
    if(compt === 'BATU'){
        hasil = 'SERI!';
    }else if(compt === 'KERTAS'){
        hasil = 'KALAH!';
    }else{
        hasil = 'MENANG!';
    }
    komputer.innerHTML = compt ;
    outputt.innerHTML = hasil;
})
