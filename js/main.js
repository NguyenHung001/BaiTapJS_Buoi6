// ! Tìm số nguyên dương nhỏ nhất
function timN(){
    let tong = 0;
    let n = 0;
//---------------->
    for(var i = 1 ; tong <= 10000 ; i++){
        tong += i;
        n = i;
    }
    document.getElementById('result1').innerHTML = 'Số nguyên dương nhỏ nhất: ' + n;
}
//===================================================================================>
// ! Tính tổng S(n)
function tinhTong(){
    let x = Number(document.getElementById('soX').value);
    let n = Number(document.getElementById('soN').value);
    let tong = 0;
//------------------------------------------------------->
    for(var i = 1 ; i<=n ; i++){
        tong += Sn(x,i);
    }
    document.getElementById('result2').innerHTML = 'S(n) = ' + tong;
}
function Sn(a,b){
    let S = 0;
    return S += Math.pow(a,b);
}
//====================================================================================>
// ! Tính giai thừa
function tinhGiaiThua(){
    let n = Number(document.getElementById('giaithuaN').value);
    let S = 1;
//-------------------------------------------------------------->
    if(n <= 0){
        alert('Nhập n lớn hơn 0 !')
    }else{
        for(var i = 1 ; i <= n ; i++){
            S *= i;
        }
    }
    document.getElementById('result3').innerHTML = 'n giai thừa = ' + S;
}
//====================================================================================>
// ! Tạo thẻ div
function taoDIV(){
    let Ele = document.querySelector('.div');
//-------------------------------------------->
    for(var i =1 ; i <= 10 ; i++){
        if((i % 2) == 0){
            Ele.appendChild(taoDivCon(i)).style.backgroundColor = 'red';
        }else{
            Ele.appendChild(taoDivCon(i)).style.backgroundColor = 'blue';
        }
    }
}
//------------------------------------------------------------------------>
function taoDivCon(j){
    let div;
    let text;
//------------>
    div = document.createElement('div');
    text = document.createTextNode('thẻ div ' + j);
    div.appendChild(text);
    return div;
}
