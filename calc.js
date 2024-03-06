function button(number){
    var results = document.getElementById("result");
    results.value+=number;
}
function calculation(){
    var calculation = document.getElementById("result").value;
    var fResult = eval(calculation);
    document.getElementById("result").value=fResult;

}

function clr(){
    document.getElementById("result").value="";
}