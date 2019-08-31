function computer1(){
    const comp = Math.random()
    if(comp<0.15) return 1;
    if(comp>0.15 && comp<0.29) return 2;
    if(comp>0.29 && comp<0.41) return 3;
    if(comp>0.41 && comp<0.71) return 4;
    if(comp>0.71 && comp<0.89) return 5;
    return 6;
}

// //==================================

function computer2(){
    const comp1 = Math.random()
    if(comp1<0.15) return 1;
    if(comp1>0.15 && comp1<0.29) return 2;
    if(comp1>0.29 && comp1<0.55) return 3;
    if(comp1>0.55 && comp1<0.69) return 4;
    if(comp1>0.69 && comp1<0.89) return 5;
    return 6;
}

// //==================================

function computer3 () {
    const comp2 = Math.random()
    if(comp2<0.15) return 1;
    if(comp2>0.15 && comp2<0.40) return 2;
    if(comp2>0.40 && comp2<0.55) return 3;
    if(comp2>0.55 && comp2<0.71) return 4;
    if(comp2>0.71 && comp2<0.80) return 5;
    return 6;
}

// //==================================

function jumlahcomputer(){
    const jumlahcom = computer1+computer2+computer3;
    return jumlahcom
}

/**
 * ===================================
 */

const timer = setTimeout(function(){
    location.reload();
},3000); // 5000 milliseconds atau 5 seconds.

const aftermiddle = document.getElementById('after-middle');

const buttonBesar = document.getElementById('button1');

const buttonKecil = document.getElementById('button2');

var computer1 = computer1();
var computer2 = computer2();
var computer3 = computer3();

buttonBesar.addEventListener('click',function(){
    let jumlahcomm = jumlahcomputer();
    const dadupertama = document.querySelector('#middle .dadu1');
    const dadukedua = document.querySelector('#middle .dadu2');
    const daduketiga = document.querySelector('#middle .dadu3');    
    dadupertama.innerHTML = computer1;
    dadukedua.innerHTML = computer2;
    daduketiga.innerHTML = computer3;
    
    var hasill = document.querySelector('#jumlah');
    var output = '';
    
    if(jumlahcomm>11){
        output = 'TOTAL: '+jumlahcomm+' | BENAR!';
    }else{
        output = 'TOTAL: '+jumlahcomm+' | SALAH!';
    }
    hasill.innerHTML = output;
    timer;
    var setTimer = setInterval(function(waktu) {
        var waktu = 3;
        waktu--;
    })
    buttonBesar.innerHTML = '<h7>Akan reset setelah </h7>'+setTimer+' <h7>detik</h7>';
})

buttonKecil.addEventListener('click',function(){
    let jumlahcomm = jumlahcomputer();
    const dadupertama = document.querySelector('#middle .dadu1');
    const dadukedua = document.querySelector('#middle .dadu2');
    const daduketiga = document.querySelector('#middle .dadu3');    
    dadupertama.innerHTML = computer1;
    dadukedua.innerHTML = computer2;
    daduketiga.innerHTML = computer3;
    
    var hasill = document.querySelector('#jumlah');
    var output = '';
    
    if(jumlahcomm<11){
        output = 'TOTAL: '+jumlahcomm+' | BENAR!';
    }else{
        output = 'TOTAL: '+jumlahcomm+' | SALAH!';
    }
    hasill.innerHTML = output;
    timer;
    var setTimer = setInterval(function(waktu) {
        var waktu = 3;
        waktu--;
    })
    buttonKecil.innerHTML = '<h7>Akan reset setelah </h7>'+setTimer+' <h7>detik</h7>';
})

const rule = document.getElementById('role');
rule.innerHTML = 'Role: 3-10 = Kecil | 11-16 = Besar<br>Hati-hati angka yang di tampilkan bisa menipu!!'
rule.style.fontSize = '19px';
