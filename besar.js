function computer1(){
    const comp = Math.random()
    if(comp<0.15) return 1;
    if(comp>0.15 && comp<0.29) return 2;
    if(comp>0.29 && comp<0.41) return 3;
    if(comp>0.41 && comp<0.71) return 4;
    if(comp>0.71 && comp<0.89) return 5;
    return 6;
}

//==================================


const dadupertama = document.getElementById('dadu1');
dadupertama.innerHTML = computer1();

//==================================
function computer2(){
    const comp1 = Math.random()
    if(comp1<0.15) return 1;
    if(comp1>0.15 && comp1<0.29) return 2;
    if(comp1>0.29 && comp1<0.55) return 3;
    if(comp1>0.55 && comp1<0.69) return 4;
    if(comp1>0.69 && comp1<0.89) return 5;
    return 6;
}

//==================================

const dadukedua = document.getElementById('dadu2');
dadukedua.innerHTML = computer2();

//==================================
function computer3 () {
    const comp2 = Math.random()
    if(comp2<0.15) return 1;
    if(comp2>0.15 && comp2<0.40) return 2;
    if(comp2>0.40 && comp2<0.55) return 3;
    if(comp2>0.55 && comp2<0.71) return 4;
    if(comp2>0.71 && comp2<0.80) return 5;
    return 6;
}
//==================================

function jumlahcomputer(){
    return computer1()+computer2()+computer3();
}

//==================================

const daduketiga = document.getElementById('dadu3');

daduketiga.innerHTML = computer3();

//==================================

const hasill = document.getElementById('jumlah');


//==================================

const after = document.getElementById('after-middle');

//==================================

const child = after.children[0]

child.addEventListener('click',function(){
    const resultt = jumlahcomputer();
    if(resultt>10){
        alert(resultt+' Kamu Benar!');
    }else{
        alert(resultt+' Kamu Salah!');
    }
})

const child2 = after.children[1]
child2.addEventListener('click',function(){
    const resultt = jumlahcomputer();
    if(resultt<10){
        alert(resultt+' Kamu Benar!');
    }else{
        alert(resultt+' Kamu Salah!');
    }
})


const rule = document.getElementById('role');
rule.innerHTML = 'Role: 3-10 = Kecil | 11-16 = Besar<br>Hati-hati angka yang di tampilkan bisa menipu!!'
rule.style.fontSize = '19px';