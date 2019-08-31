function pilihancomp(){
    const comp = Math.random();
    if(comp<=0.39) return 'GUNTING';
    if(comp>0.39 && comp<0.75) return 'BATU';
    return 'KERTAS'
}

const komputer = document.getElementById('pilihancomputer')

const kertas = document.getElementById('kertas');

const outputt = document.getElementById('hasiloutput');

var jumlah = 0
const scoree = document.getElementById('score')

var peran = document.getElementById('peran')

kertas.addEventListener('click',function(){
    let compt = pilihancomp();
    var hasil = ''
    if(compt === 'KERTAS'){
        hasil = 'SERI!';
    }else if(compt === 'BATU'){
        hasil ='MENANG!';
        jumlah++;
    }else{
        hasil = 'KALAH!';
        jumlah--;
    }
    scoree.innerHTML = jumlah;
    komputer.innerHTML = compt;
    outputt.innerHTML = hasil;
    if(jumlah>5 && jumlah<10){
        peran.innerHTML = 'Junior';
    }else if(jumlah>9 && jumlah<16){
        peran.innerHTML = 'Senior';
    }else if(jumlah===16){
        alert('Anda menyentuh peran Profesional...Screenshot dan kirim ke Email saya yang berada di Home untuk Claim Hadiah nya LoL');
        peran.innerHTML = 'Profesional';
    }else if(jumlah===-5){
        alert('LOOSER LoL');
        peran.innerHTML = 'LOOSER!';
    }
})


const gunting = document.getElementById('gunting');
gunting.addEventListener('click',function(){
    let compt = pilihancomp();
    var hasil = '';
    if(compt === 'GUNTING'){
        hasil = 'SERI!';
    }else if(compt === 'BATU'){
        hasil = 'KALAH!';
        jumlah--
    }else{
        hasil = 'MENANG!';
        jumlah++
    }
    scoree.innerHTML = jumlah;
    komputer.innerHTML = compt;
    outputt.innerHTML = hasil;
    if(jumlah>5 && jumlah<10){
        peran.innerHTML = 'Junior';
    }else if(jumlah>9 && jumlah<16){
        peran.innerHTML = 'Senior';
    }else if(jumlah===16){
        alert('Anda menyentuh peran Profesional...Screenshot dan kirim ke Email saya yang berada di Home untuk Claim Hadiah nya LoL');
        peran.innerHTML = 'Profesional';
    }else if(jumlah===-5){
        alert('LOOSER LoL');
        peran.innerHTML = 'LOOSER!';
    }
})


const batu = document.getElementById('batu');


batu.addEventListener('click',function(){
    let compt = pilihancomp();
    var hasil = '';
    if(compt === 'BATU'){
        hasil = 'SERI!';
    }else if(compt === 'KERTAS'){
        hasil = 'KALAH!';
        jumlah--
    }else{
        hasil = 'MENANG!';
        jumlah++
    }
    scoree.innerHTML = jumlah
    komputer.innerHTML = compt ;
    outputt.innerHTML = hasil;
    if(jumlah>5 && jumlah<10){
        peran.innerHTML = 'Junior';
    }else if(jumlah>9 && jumlah<16){
        peran.innerHTML = 'Senior';
    }else if(jumlah===16){
        alert('Anda menyentuh peran Profesional...Screenshot dan kirim ke Email saya yang berada di Home untuk Claim Hadiah nya LoL');
        peran.innerHTML = 'Profesional';
    }else if(jumlah===-5){
        alert('LOOSER LoL');
    }
})

const role = document.getElementById('role1');
role.innerHTML = 'ROLE : <br> Diawal permainan peran anda adalah newbie..<br>Untuk mendapatkan peran junior cukup menang dengan point 6..<br>Untuk mendapatkan peran Senior cukup capai point 10..<br>Capailah peran Profesional dan dapatkan pesan..<br>Setiap Anda kalah maka score berkurang satu..<br>jangan sampai dapat peringatan Loser..<h4>Selamat Mencoba!!</h4>'