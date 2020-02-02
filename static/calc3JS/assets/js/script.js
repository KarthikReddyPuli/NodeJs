var expn = "";

function updatetext(){
    document.getElementById("input").innerHTML = expn;
}

function clr(){
    expn = "";
    document.getElementById("input").innerHTML = "Type Away";
}

function store(val){
    expn += String(val);
    updatetext();
}

function calc(){
    if(expn.length==0){
        document.getElementById("input").innerHTML = "Click Something";
        return;
    }
    document.getElementById("input").innerHTML = "Error";
    expn = eval(expn);
    updatetext();
}

function del(){
    expn = expn.substr(0, expn.length-1);
    if(expn.length == 0){
        clr();
    }
    else
        updatetext();
}

var darkMode = true;

function shiftcolor(){
    if(darkMode){
        document.getElementById("full").style = "background-color: white;";
        document.getElementById("input").style = "color: black;";
        document.getElementById("btnOfDarkness").style = "color: black; border-color: black;";
        document.getElementById("btnOfDarkness").innerHTML = "DarkMode";
        darkMode = false;
    }
    else{
        document.getElementById("full").style = "background-color: black;";
        document.getElementById("input").style = "color: white;";
        document.getElementById("btnOfDarkness").style = "color: white; border-color: white;";
        document.getElementById("btnOfDarkness").innerHTML = "LightMode";
        darkMode = true;
    }
}