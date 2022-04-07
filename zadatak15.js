var rand = require('./slucajanBroj');

var br1= rand.dajSlucajanBroj(10,100);
var br2= rand.dajSlucajanBroj(10,100);
var br3= rand.dajSlucajanBroj(10,100);

var zadnji1= parseInt(br1.toString()[br1.toString().length-1]);
var zadnji2= parseInt(br2.toString()[br2.toString().length-1]);
var zadnji3= parseInt(br3.toString()[br3.toString().length-1]);
console.log(br1);
console.log(br2);
console.log(br3);

if(zadnji1==zadnji2)
{
    console.log("true");
}
else if(zadnji1==zadnji3)
{
    console.log("true");
}
else if(zadnji2==zadnji3)
{
    console.log("true");
}
else
{
    console.log("false");
}