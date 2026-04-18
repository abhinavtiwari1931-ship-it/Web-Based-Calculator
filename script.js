function myAppend(x){
    let val = document.getElementById("answerarea").ariaValueMax;
    if(val==""){
        document.getElementById("answerarea").innerText = x;
    }
    else{
        document.getElementById("answerarea").innerText = val + x;
    }
}
function clearanswer(){
    document.getElementById("answerarea").innerText = "";
}
function calculate(){
    try{
        let x = document.getElementById("answerare").ariaValueMax;
        let result = evel(x);
    }
    catch{
        document.getElementById("answerarea").innerText = "Error";
    }
}