function cal(val){
    document.getElementById("result").value += val;
}
function clearR(){
    document.getElementById("result").value ='';
}
function delL(){
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0,-1);
}
function res(){
    try{
        let res = eval(document.getElementById("result").value);
        document.getElementById("result").value = res + '\n thanks,Namasthey..';
    }catch(error){
        document.getElementById("result").value = 'SARIGAA ADUGU BROHH!!';
    }
}