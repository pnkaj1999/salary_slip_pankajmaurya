
function tot()
{
    var a = document.getElementById("base").value;
    var b = a*3/100;// hra
    var c = a*5/100;//alw
    var d = a*15/100;//mdl
    var e = a*2/100;//oth
    var net= parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e);
    document.getElementById("hra").value=b;
    document.getElementById("alw").value=c;
    document.getElementById("mdl").value=d;
    document.getElementById("oth").value=e;
    document.getElementById("ttl1").value=net;
}
function dec()
{
    var a = document.getElementById("base").value;
    var f = a*8/100;//epf
    var g = a*4/100;//hlt
    var h = a*2/100;//prt
    var i = a*2/100;//lo
    var net1 = parseInt(f)+parseInt(g)+parseInt(h)+parseInt(i);
    document.getElementById("epf").value=f;
    document.getElementById("hlt").value=g;
    document.getElementById("prt").value=h;
    document.getElementById("lo").value=i;
    document.getElementById("ded").value=net1;
}
function total()
{
    var total = document.getElementById("ttl1").value-document.getElementById("ded").value;
    document.getElementById("nt").value=total;
}