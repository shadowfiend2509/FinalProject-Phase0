function dadu1(){
    const comp = Math.random()
    if(comp<0.15) return 1 ; 
    if(comp>0.15 && comp<0.29) return 2 ;
    if(comp>0.29 && comp<0.41) return 3 ;
    if(comp>0.41 && comp<0.71) return 4 ;
    if(comp>0.71 && comp<0.89) return 5 ;
    return 6 ;
}
function dadu2(){
    const comp1 = Math.random()
    if(comp1<0.15) return 1 ; 
    if(comp1>0.15 && comp1<0.29) return 2 ;
    if(comp1>0.29 && comp1<0.55) return 3 ;
    if(comp1>0.55 && comp1<0.69) return 4 ;
    if(comp1>0.69 && comp1<0.89) return 5 ;
    return 6 ;
}
function dadu3(){
    const comp2 = Math.random()
    if(comp2<0.15) return 1 ; 
    if(comp2>0.15 && comp2<0.40) return 2 ;
    if(comp2>0.40 && comp2<0.55) return 3 ;
    if(comp2>0.55 && comp2<0.71) return 4 ;
    if(comp2>0.71 && comp2<0.80) return 5 ;
    return 6 ;
}

function hasil(){
    return dadu1()+dadu2()+dadu3();
}

var parent = document.getElementById('middle');
var panggild1 = document.getElementsByClassName('dadu1');
var panggild2 = document.getElementsByClassName('dadu2');
var panggild3 = document.getElementsByClassName('dadu3');


var after = document.getElementById('after-middle');

var child = after.children[0]
child.addEventListener('click',function(){
    var life =10
    let result = hasil()
    if(result>10){
        alert(result+' Kamu Benar!')
    }else{
        alert(result+' Kamu Salah!')
    }
})


var child2 = after.children[1]
child2.addEventListener('click',function(){
    var life =10

    let result = hasil()
    if(result<10){
        alert(result+' Kamu Benar!')
    }else{
        alert(result+' Kamu Salah!')
    }
})
