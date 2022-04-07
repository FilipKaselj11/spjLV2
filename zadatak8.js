var rand = require('./slucajanBroj');

var aBrojevi=[];

for(var i = 0; i<50; i++)
{
    aBrojevi.push(rand.dajSlucajanBroj(1,20));
}
aBrojevi.forEach(function(br)
{
    console.log(br);
});
console.log("----");
for(var i = 0; i<20; i++)
{
    if(aBrojevi.indexOf(i)>-1)
    {
        console.log(i);
    }
}