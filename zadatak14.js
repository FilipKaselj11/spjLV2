var broj= 123;

if(broj>99)
{
    var prvi= parseInt(broj.toString()[0]);
    var zadnji= parseInt(broj.toString()[broj.toString().length-1]);
    console.log(prvi+zadnji);
}
else
{
    console.log("nije veci od 99");
}