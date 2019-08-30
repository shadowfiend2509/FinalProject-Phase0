

var option = document.getElementById('option')
var metu = document.getElementById('output')
var button1 = option.children[0]
button1.addEventListener('click',function(){
    let hasil = ''
    let angkaa = document.getElementById('angka').value;
    if(angkaa<3 ||angkaa>22){
        return alert('Invalid Input')
    }
    for (let i=1;i<=angkaa;i++){
        for (let j=i;j<=angkaa;j++){
            hasil+=" ";
        }
        for (let k=1;k<=i;k++){
            hasil+="*";
        }
        for (let l=1;l<=i-1;l++){
            hasil+="*";
        }
        hasil+="</br>";
    }
    metu.innerHTML = hasil;
})

var button2 = option.children[1]
button2.addEventListener('click',function(){
    let hasil = ''
    let angkaa = document.getElementById('angka').value;
    if(angkaa<3||angkaa>22){
        return alert('Invalid Input')
    }
    for (var i=1;i<=angkaa;i++){
            for (var j=1;j<=i;j++){
                hasil+=" ";
            }
            for (var k=i;k<=angkaa;k++){
                hasil+="*";
            }
            for (var l=i+1;l<=angkaa;l++){
                hasil+="*";
            }
            hasil+="<br>";
        }
    metu.innerHTML = hasil
})
