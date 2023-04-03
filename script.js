function ran(){
    var a= document.getElementById("ran").Value;
    var b=Math.random(a);
    document.getElementById("demo").innerHTML=b;
}
function raninteger(){
    var a= document.getElementById("ran").Value;
    var b= Math.floor(Math.random(a)*100);
    document.getElementById("demo").innerHTML=b;
}

// js in boolean
function less(){
    var a= String(document.getElementById("b1").Value);
   var b=String(document.getElementById("b2").Value);
document.getElementById("demo1").innerHTML = Boolean(a < b);
}
function greter(){
    var a= String(document.getElementById("b1").Value);
    var b=String(document.getElementById("b2").Value);
    document.getElementById("demo1").innerHTML = Boolean(a > b);
}
