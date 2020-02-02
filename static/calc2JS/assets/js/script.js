var val1 = "";
var val2 = "";
var opr = "";

function updatetext(){
    document.getElementById("input").innerHTML = val1 + opr + val2;
}

function clr(){
    val1 = "";
    val2 = "";
    opr = "";
    document.getElementById("input").innerHTML = "Type Away";
    print("");
}

function storeval(val){
    if(opr == "")
        val1 += String(val);
    else
        val2 += String(val);
    updatetext();
}

function op(oprt){
    opr = oprt;
    updatetext();
}

function print(s){
    document.getElementById("result").innerHTML = s;
}

function calc(){
    x = Number(val1);
    y = Number(val2);
    switch(opr){
        case '+':
            print(x+y);
            break;
        case '-':
            print(x-y);
            break;
        case '*':
            print(x*y);
            break;
        case '/':
            print(x/y);
            break;
    }
}